import React from "react";
import Label from "../components/Label";
import Cover from "../components/Cover";
import { Link, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  return (
    <section>
      <div className="">
        <div className="py-2 px-6 border-b-siennaOpaque border-b-[1px]">
            <h4 className='uppercase text-[22px] text-sienna'>{searchParams.get('product')} (8)</h4>
        </div>
        <div className="my-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => {
            return (
            <Link key={card} to={`/category/2`}>
                <div className="p-2 relative flex items-end bg-slate-300 h-[60vh] 2xl:h-[70vh]">
                    <Cover/>
                    <Label title='Maggie Lamp' price='45.78'/>
                </div>
            </Link>
            )
          })}
        </div>
        {/* <div className="text-center mt-6 mb-5">
            <p className="font-light text-sienna">No products found. Please try another search.</p>
        </div> */}
      </div>
    </section>
  );
};

export default Search;
