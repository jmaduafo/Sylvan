import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion";
import { auth, db } from "../firebase/config";
import {
  EmailAuthProvider,
  deleteUser,
  reauthenticateWithCredential,
} from "firebase/auth";
import { query, collection, where, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Cancel from "./icons/Cancel";
import LoadingSmall from "./LoadingSmall";

const EnterPassword = ({
  setPasswordEnter,
  passwordEnter,
  confirmDelete,
  setConfirmDelete,
  setDeleteModalOpen,
  setMessage,
  setMessageType,
}) => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // Delete User Profile
  function handlePasswordSubmit(e) {
    e.preventDefault();
    setDeleteModalOpen(false);
    if (!passwordEnter) {
      setMessageType("Error Message");
      setMessage("Password must be entered in to confirm delete.");
    } else {
      setLoading(true);
      const user = auth.currentUser;
      // PROMPT USER TO ENTER PASSWORD IN ORDER TO REAUTHENTICATE AND CONFIRM DELETE
      const credential = EmailAuthProvider.credential(
        auth?.currentUser?.email,
        passwordEnter
      );

      // AFTER USER IS REAUTHENTICATED, DELETE USER AND NAVIGATE TO HOME
      reauthenticateWithCredential(user, credential)
        .then(() => {
          // User re-authenticated.
          // USER IS DELETED FROM AUTHENTICATION DATABASE
          deleteUser(user)
            .then(() => {
              // User deleted.

              // USER IS DELETED FROM FIRESTORE DATABASE AS WELL
              async function deletePerson() {
                const userRef = query(
                  collection(db, "users"),
                  where("id", "==", auth?.currentUser?.uid)
                );
                await deleteDoc(userRef);
              }

              deletePerson();

              setConfirmDelete(false);
              setLoading(false);
              navigate("/");
            })
            .catch((error) => {
              // An error ocurred
              setLoading(false);
              console.log(error);
              setMessageType("Error Message");
              setMessage(
                "Something went wrong. User was unable to be deleted."
              );
            });
        })
        .catch((error) => {
          // An error ocurred
          // ...
          setLoading(false);
          console.log(error);
          setMessageType("Error Message");
          setMessage(
            "Please check your password to make sure that the correct password was entered."
          );
        });
    }
  }

  return (
    <div
      className={`${
        confirmDelete ? "visible" : "invisible"
      } duration-[.4s] fixed flex justify-center items-center bg-chocolateOpaque w-full h-[85vh] z-[80] py-6 text-sienna`}
    >
      <motion.div
        initial={{ opacity: confirmDelete ? 0 : 1 }}
        animate={{ opacity: confirmDelete ? 1 : 0 }}
        transition={{ duration: 0.6, ease: easeInOut }}
        className="text-center policy border-sienna border-[1px] bg-cream w-[95%] sm:w-[55%] md:w-[40%] lg:w-[30%] 2xl:w-[20%] mx-auto py-4 px-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-sienna text-[18px] uppercase">
            Re-enter Password
          </h3>
          <div onClick={() => setConfirmDelete(false)}>
            <Cancel />
          </div>
        </div>
        <form className="mt-6" onSubmit={handlePasswordSubmit}>
          <input
            id="registerPassword"
            className="font-light font-sans px-3 py-[3px] outline-none text-[#9b4e17b2] border-b-sienna bg-transparent border-b-[1.5px] w-full"
            placeholder="Enter Password"
            type="password"
            onChange={(e) => setPasswordEnter(e.target.value)}
          />
          <button
            type="submit"
            className="mt-5 py-2 rounded-lg bg-olive text-cream sm:text-[18px] text-[15px] w-full uppercase text-center font-light"
          >
            {loading ? <LoadingSmall /> : "Submit"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default EnterPassword;
