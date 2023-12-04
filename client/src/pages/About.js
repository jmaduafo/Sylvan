import React, { useState } from "react";
import ArrowRight from "../components/icons/ArrowRight";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MainPreloader from "../components/MainPreloader";

const About = () => {
  const images = [
    {
      image:
        "https://res.cloudinary.com/dyxxn831a/image/upload/v1699979090/Sylvan/interior-design-with-logs-plants_dwfhhm.jpg",
      description: "a white vase next to a barrel of logs",
      category: "accents",
    },
    {
      image:
        "https://res.cloudinary.com/dyxxn831a/image/upload/v1700072908/Sylvan/Say_Hello_To_These_Summer_Trends_nivqb4.jpg",
      description: "a quaint brown armchair on steps",
      category: "chairs",
    },
    {
      image:
        "https://res.cloudinary.com/dyxxn831a/image/upload/v1700072929/Sylvan/Modern_Arc_Floor_Lamp_with_Shelf_in_Black_Glass_Shade_Included_f8pasw.jpg",
      description: "a lamp beside a gray couch",
      category: "lamps",
    },
    {
      image:
        "https://res.cloudinary.com/dyxxn831a/image/upload/v1699286438/Sylvan/EJ_295_hwi2rx.jpg",
      description: "a beige couch beside a potted plant and gold table lamp",
      category: "sofas",
    },
  ];

  const [categoryHover, setCategoryHover] = useState("");
  const [x, setX] = useState();
  const [y, setY] = useState();

  const easing = [0.39, 0.41, 0.37, 0.87];

  return (
    <div
      className="text-sienna"
      onMouseMove={(e) => {
        setX(e.clientX);
        setY(e.clientY);
      }}
    >
      <motion.div
        initial={{ opacity: categoryHover.length ? 0 : 1 }}
        animate={{ opacity: categoryHover.length ? 1 : 0, x: x, y: y }}
        transition={{ duration: 0.3, ease: easing }}
        className={`${
          categoryHover.length ? "visible" : "invisible"
        } flex justify-center items-center fixed top-0 w-[120px] h-[120px] rounded-full bg-sienna text-cream border-sienna border-[1px]`}
      >
        <p className="text-[14px] text-center">{categoryHover}</p>
      </motion.div>
      <section>
        <MainPreloader />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end lg:gap-8 gap-3">
          <div className="overflow-hidden basis-full md:basis-[65%] sm:basis-[55%] object-cover object-bottom">
            <img
              className="w-full h-full"
              src="https://res.cloudinary.com/dyxxn831a/image/upload/v1699978914/Sylvan/landon10_qwlnwy.jpg"
              alt="burnt orange background with vase and rustic sink"
            />
          </div>
          <div className="basis-full md:basis-[35%] sm:basis-[45%] sm:pb-8 p-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: easing }}
              className="w-full text-[14px] md:w-[70%] md:mb-8 mb-6"
            >
              Sylvan, a haven for those who appreciate the intersection of
              elegance and aesthetics in home decor. Our furniture store is more
              than a showroom; it's a curated collection where every piece is a
              masterpiece. Sylvan holds a steadfast commitment to attention to
              detail, meticulously selecting and showcasing pieces that embody
              sophistication and timeless design.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: easing }}
              className="w-full md:text-[14px] text-[13px] md:w-[70%]"
            >
              With a sense of responsibility to our clientele, we pride
              ourselves on presenting not just furniture, but an elevated
              lifestyle. Each item in our collection is a testament to our
              dedication to offering the very best in curated pieces, where
              every nuance is considered, ensuring that Sylvan is synonymous
              with the epitome of refined living.
            </motion.p>
          </div>
        </div>
      </section>
      <section className="mt-[10rem] sm:p-0 p-6">
        <div className="lg:w-[70%] w-[90%] mx-auto flex flex-col-reverse sm:flex-row sm:items-start lg:gap-[5rem] sm:gap-[5rem]">
          <div className="sm:basis-[50%]">
            <h2 className="font-serif text-[40px]">Serenity & Craftsmanship</h2>
            <div className="lg:pl-[8rem] sm:pl-[4rem] mt-[3rem]">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: easing }}
                className="text-[14px] mb-8"
              >
                Other travelling salesmen live a life of luxury. For instance,
                whenever I go back to the guest house during the morning to copy
                out the contract. These gentlemen are always still sitting there
                eating.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: easing }}
                className="text-[14px]"
              >
                I ought to just try that with my boss; I'd get kicked out on the
                spot. Doing business like this takes much more effort than doing
                your own business at home.
              </motion.p>
            </div>
          </div>
          <div className="sm:basis-[50%] flex items-start gap-5">
            <div
              data-scroll
              data-scroll-speed=".1"
              className="basis-[50%] pt-[10rem] h-auto object-cover object-bottom"
            >
              <img
                className="w-full h-full"
                src="https://res.cloudinary.com/dyxxn831a/image/upload/v1700057167/Sylvan/landon31_co8msi.png"
              />
            </div>
            <div
              data-scroll
              data-scroll-speed=".3"
              className="basis-[50%] h-auto object-cover object-bottom"
            >
              <img
                className="w-full h-full"
                src="https://res.cloudinary.com/dyxxn831a/image/upload/v1700057218/Sylvan/landon32_hkkvbc.jpg"
              />
            </div>
          </div>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: easing }}
        className="mt-[10rem]"
      >
        <div className="lg:w-[55%] w-[70%] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-[4rem]">
            <div className="basis-[33.333%] object-cover object-bottom">
              <img
                className="w-full h-full"
                src="https://res.cloudinary.com/dyxxn831a/image/upload/v1700057157/Sylvan/landon40_hm1fkx.jpg"
                alt=""
              />
            </div>
            <div className="basis-[33.333%] object-cover object-bottom">
              <img
                className="w-full h-full"
                src="https://res.cloudinary.com/dyxxn831a/image/upload/v1700057174/Sylvan/landon42_zyrszr.jpg"
                alt=""
              />
            </div>
            <div className="basis-[33.333%] object-cover object-bottom">
              <img
                className="w-full h-full"
                src="https://res.cloudinary.com/dyxxn831a/image/upload/v1700057164/Sylvan/landon41_phvyfp.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="text-center mt-[3rem] sm:p-0 p-6">
            <h2 className="font-serif text-[40px]">Our Team</h2>
            <div className="flex justify-center items-center">
              <p className="sm:w-[75%] text-[14px]">
                A collection of textile samples lay spread out on the table -
                Samsa was a travelling salesman - and above it there hung a
                picture that he had recently cut out of an illustrated magazine
                and housed in a nice, gilded frame. It showed a lady fitted out
                with a fur hat and fur boa who sat upright, raising a heavy fur
                muff that covered the whole of her lower arm towards the viewer.
                Gregor then turned to look out the window at the dull weather.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: easing }}
        className="mt-[10rem]"
      >
        <div className="w-[70%] mx-auto">
          <p className="italic text-[14px]">featured categories</p>
          <div className="mt-2 flex justify-between items-center gap-4 flex-wrap">
            {images.map((img) => {
              return (
                <Link to={`/shop/${img.category}`} key={img.description}>
                  <div
                    onMouseEnter={() => setCategoryHover(img.category)}
                    onMouseLeave={() => setCategoryHover("")}
                    className="overflow-hidden sm:w-[250px] sm:h-[320px] w-full object-cover object-bottom cursor-none"
                  >
                    <img
                      className="w-full h-full rounded-tr-[50px] cursor-none"
                      src={img.image}
                      alt={img.description}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
          <Link to="/shop/all">
            <div className="group cursor-pointer mt-2 flex justify-end items-center gap-2">
              <p className="group-hover:italic text-[14px]">shop all</p>
              <div className="duration-[.4s] group-hover:transform group-hover:translate-x-1">
                <ArrowRight />
              </div>
            </div>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
