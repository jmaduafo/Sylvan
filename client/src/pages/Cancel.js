import React from "react";
import furnish from "../assets/furniture-ill.jpg";
import { Link } from "react-router-dom";
import MainPreloader from "../components/MainPreloader";

const Cancel = () => {
  return (
    <section className="py-8">
      <MainPreloader/>
      <div className="mx-auto sm:w-[50%] md:w-[40%] xl:w-[35%] 2xl:w-[20%] w-[75%] mb-8">
        <div className="w-full h-auto rounded-full border-sienna border-[2px] object-cover object-bottom">
          <img
            className="w-full h-full rounded-full"
            src={furnish}
            alt="furniture illsutration with orange and plants"
          />
        </div>
        <div className="w-[85%] mx-auto mt-6">
          <p className="text-center text-sienna font-light">
            Your checkout has been canceled. Feel free to continue shopping for
            more or navigate to{" "}
            <Link to="/">
              <span className="relative after:content-[''] after:absolute after:w-full after:h-[1.5px] after:bg-sienna after:top-full after:left-0">
                home
              </span>
              .
            </Link>
          </p>
        </div>
        <div>
          <Link to="/shop/all">
            <button className="hover:bg-[#9b4e17b2] hover:text-cream duration-[.4s] border-siennaOpaque border-[1px] w-full mt-3 text-[14px] text-sienna py-2 font-light">
              CONTINUE SHOPPING
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cancel;
