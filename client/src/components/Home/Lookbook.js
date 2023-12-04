import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import { db } from "../../firebase/config";
import { query, collection, where, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Lookbook = () => {
  const [allLookbook, setAllLookbook] = useState();

  function getLookbook() {
    const lookRef = query(
      collection(db, "products"),
      where("isLookbook", "==", true)
    );

    async function lookbook() {
      const docSnap = await getDocs(lookRef);

      const array = [];
      docSnap.forEach((doc) => {
        array.push(doc.data());
      });

      setAllLookbook(array);
    }

    lookbook();
  }

  useEffect(function () {
    getLookbook();
  }, []);

  return (
    <section>
      <Heading headerText="Lookbook" linkText={"see all"} link="/lookbook" />
      <div className="w-full overflow-hidden">
        <div className="lookbookCarousel flex gap-2 w-fit my-2">
          {allLookbook?.map((lookbook) => {
            return (
              <div
                key={lookbook.id}
                className="sm:w-[360px] w-[260px] sm:h-[60vh] h-[50vh] bg-slate-300"
              >
                <Link to={`/${lookbook.category}/${lookbook.id}`}>
                  <img
                    className="w-full h-full"
                    src={lookbook.images[0]}
                    alt={lookbook.name}
                  />
                </Link>
              </div>
            );
          })}
          {allLookbook?.map((lookbook) => {
            return (
              <div
                key={lookbook.id}
                className="sm:w-[360px] w-[260px] sm:h-[60vh] h-[50vh] bg-slate-300"
              >
                <Link to={`/${lookbook.category}/${lookbook.id}`}>
                  <img
                    className="w-full h-full"
                    src={lookbook.images[0]}
                    alt={lookbook.name}
                  />
                </Link>
              </div>
            );
          })}
          {allLookbook?.map((lookbook) => {
            return (
              <div
                key={lookbook.id}
                className="sm:w-[360px] w-[260px] sm:h-[60vh] h-[50vh] bg-slate-300"
              >
                <Link to={`/${lookbook.category}/${lookbook.id}`}>
                  <img
                    className="w-full h-full"
                    src={lookbook.images[0]}
                    alt={lookbook.name}
                  />
                </Link>
              </div>
            );
          })}
          {allLookbook?.map((lookbook) => {
            return (
              <div
                key={lookbook.id}
                className="sm:w-[360px] w-[260px] sm:h-[60vh] h-[45vh] bg-slate-300"
              >
                <Link to={`/${lookbook.category}/${lookbook.id}`}>
                  <img
                    className="w-full h-full"
                    src={lookbook.images[0]}
                    alt={lookbook.name}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
