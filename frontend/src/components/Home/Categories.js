import React, { useRef, useLayoutEffect } from "react";
import HomeButton from "../HomeButton";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Categories = ({ setCategory }) => {
  const categoriesSection = useRef(null);
  const tables = useRef(null);
  const homeDec = useRef(null);
  const beds = useRef(null);
  const chairs = useRef(null);
  const lamps = useRef(null);



  useLayoutEffect(function () {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: categoriesSection.current,
        start: "-=600px",
        end: "bottom +=500px",
        toggleActions: "play complete reverse reset",
        scrub: true,
      },
    });

    timeline
      .to(tables.current, {
        scale: 1.1,
      })
      .to(
        homeDec.current,
        {
          scale: 1.1,
        },
        0
      )
      .to(
        beds.current,
        {
          scale: 1.15,
        },
        0
      )
      .to(
        chairs.current,
        {
          scale: 1.2,
        },
        0
      )
      .to(
        lamps.current,
        {
          scale: 1.25,
        },
        0
      );
  }, []);



  return (
    <section ref={categoriesSection} className="bg-olive py-[5rem] my-6">
      <div className="w-[70%] mx-auto">
        <Link to='/shop/tables'>
        <div
          onMouseEnter={() => setCategory("View Tables")}
          onMouseLeave={() => setCategory("")}
          className="overflow-hidden sm:w-[60%] mx-auto h-auto object-cover object-bottom cursor-none"
        >
          <img
            ref={tables}
            className="w-full h-full"
            src="https://res.cloudinary.com/dyxxn831a/image/upload/v1699340554/Sylvan/7046066_1517_pimxzv.jpg"
            alt="tables category"
          />
        </div>
        </Link>
        <div className="mt-6 sm:mt-[6rem] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-[5rem]">
          <Link to='/shop/home%20decor'>
            <div 
            onMouseEnter={() => setCategory("View Home Decors")}
            onMouseLeave={() => setCategory("")}
            className="overflow-hidden basis-full sm:basis-[50%] object-cover object-bottom cursor-none">
                <img
                ref={homeDec}
                className="w-full h-full"
                src="https://res.cloudinary.com/dyxxn831a/image/upload/v1699718077/Sylvan/eco-friendly-cleaning-products-set-basket-with-soaps-brushes_pgam0x.jpg"
                alt="home appliances category"
                />
            </div>
          </Link>
          <div className="mb-3 sm:mb-0 basis-full sm:basis-[50%] text-center sm:text-left">
            <h4 className="sm:w-[75%] mb-5 sm:text-[22px] 2xl:text-[28px] text-[20px] w-full font-extralight leading-[20px] text-cream">
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            </h4>
            <HomeButton bgColor={"cream"} textColor={"chocolate"} />
          </div>
        </div>
        <div className="mt-6 sm:mt-[6rem]">
        <Link to='/shop/beds'>
          <div 
          onMouseEnter={() => setCategory("View Beds")}
          onMouseLeave={() => setCategory("")}
          className="overflow-hidden sm:w-[55%] mx-auto sm:pl-[50px] object-cover object-bottom cursor-none">
            <img
              ref={beds}
              className="w-full h-full"
              src="https://res.cloudinary.com/dyxxn831a/image/upload/v1699718144/Sylvan/bed-cropped_t2ajjs.jpg"
              alt="beds category"
            />
          </div>
          </Link>
        </div>
        <div className="mt-6 sm:mt-[6rem] flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-[5rem] gap-6 sm:w-[70%] mx-auto">
          <Link to='/shop/chairs'>
          <div 
          onMouseEnter={() => setCategory("View Chairs")}
          onMouseLeave={() => setCategory("")}
          className="overflow-hidden sm:basis-[50%] object-cover object-bottom cursor-none">
            <img
              ref={chairs}
              className="w-full h-full"
              src="https://res.cloudinary.com/dyxxn831a/image/upload/v1699719771/Sylvan/landon16_oztdoh.jpg"
              alt="chairs category"
            />
          </div>
          </Link>
          <Link to='/shop/lamps'>
          <div 
          onMouseEnter={() => setCategory("View Lamps")}
          onMouseLeave={() => setCategory("")}
          className="overflow-hidden sm:basis-[50%] object-cover object-bottom cursor-none">
            <img
              ref={lamps}
              className="w-full h-full"
              src="https://res.cloudinary.com/dyxxn831a/image/upload/v1699720164/Sylvan/H_zqp7th.jpg"
              alt="lamps category"
            />
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
