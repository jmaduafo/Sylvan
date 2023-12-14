import React, { useState } from "react";
import Toast from "../components/Toast";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, getDocs, doc, query, collection, where, serverTimestamp } from "firebase/firestore";
import LoadingSmall from "../components/LoadingSmall";
import MainPreloader from "../components/MainPreloader";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage ] = useState("");
  const [ userNameDuplicate, setUserNameDuplicate] = useState()
  const [ messageType, setMessageType] = useState('')

  const [ loading, setLoading ] = useState(false)

  let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    // Checks to see if the username entered has already been taken by another user
    async function passwordValidate() {
      const usernameValidation = query(collection(db, 'users'), where('username', '==', userName))

      const querySnapshot = await getDocs(usernameValidation);
        
      const userCheck = [];
      querySnapshot.forEach(doc => {
          userCheck.push(doc)
      })

      setUserNameDuplicate(userCheck)
    }

    passwordValidate()
                
    if (!email.length || !password.length || !userName.length ) {
      setMessageType('Error message')
      setMessage('All entries must not be left empty')
    } else if (password.length < 6) {
      setMessageType('Error message')
      setMessage('Password has to be six characters or more')
    } else if (userNameDuplicate?.length) {
      setMessageType('Error message')
      setMessage('This username has been taken. Please enter another one.')
    } else {
      setMessage('')
      setLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
                    
            // Linking auth with firestore database
            async function verify() {
              try {
                await setDoc(doc(db, 'users', user.uid), {
                  id: user.uid,
                  username: userName,
                  email: email,
                  orderHistory: [],                    
                  timestamp: serverTimestamp()
                })
                
                setLoading(false)
              } catch (err) {
                setMessageType('Error message')
                setMessage('User information was unable to process. Please try again.')
                setLoading(false)
              }
                
            }
            
            verify() 
            setLoading(false)
            navigate('/')
      })
      .catch(err => {
        setMessageType('Error message')
        setMessage('Something went wrong. Please try again.')
        setLoading(false)
      })
    }
  }

  return (
    <section className="w-full h-[85vh] flex justify-center items-center">
      <MainPreloader/>
      <Toast messageType={messageType} setMessage={setMessage} message={message} />
      <div className="text-center w-[90%] sm:w-[65%] md:w-[50%] lg:w-[35%]">
        <h3 className="text-[40px] font-semibold text-sienna font-serif">
          SIGN UP
        </h3>
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col">
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            id="registerUsername"
            type="text"
            placeholder="Username"
            className="font-light font-sans px-3 py-[3px] outline-none text-[#9b4e17b2] border-b-sienna bg-transparent border-b-[1.5px]"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="registerEmail"
            type="email"
            placeholder="Email"
            className="font-light font-sans mt-4 px-3 py-[3px] outline-none text-[#9b4e17b2] border-b-sienna bg-transparent border-b-[1.5px]"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="registerPassword"
            type="password"
            placeholder="Password"
            className="font-light font-sans mt-4 px-3 py-[3px] outline-none text-[#9b4e17b2] border-b-sienna bg-transparent border-b-[1.5px]"
          />

          <button
            type="submit"
            className="mt-5 py-2 rounded-lg bg-olive text-cream sm:text-[18px] text-[15px] w-full uppercase text-center font-light"
          >
            {loading ? <LoadingSmall/> : 'Register'}
          </button>
        </form>
        <Link to="/login">
          <div className="group hover:bg-[#9b4e17b2] duration-[.4s] mt-2 py-2 flex justify-center gap-2 border-sienna border-[1px] text-[#9b4e17c4]">
            <p className="group-hover:text-cream text-[13px] font-light uppercase">
              Switch to login
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Register;
