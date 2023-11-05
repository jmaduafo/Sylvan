import React, { useState } from "react";
import Toast from "../components/Toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="w-full h-[85vh] flex justify-center items-center">
      <Toast message="" />
      <div className="text-center w-[35%]">
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
            Register
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
