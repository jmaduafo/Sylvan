import React from "react";
import Label from "../Label";
import Heading from "../Heading";
import Cover from "../Cover";

const SimilarItems = () => {
  return (
    <>
      <div className="mt-4">
        <Heading headerText="More like this" />
        <div className="my-2 grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-1">
          {[1, 2, 3, 4].map((similar) => {
            return (
              <div
                key={similar}
                className="relative xs:h-[60vh] 2xl:h-[70vh] h-[50vh] p-2 flex items-end"
              >
                <Cover />
                <Label title="Landon Armchair" price="65.45" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SimilarItems;
