import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase/config";
import { getDocs, collection, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Heading from "../Heading";
import { timestamp } from "../../utils/timestampConverter";
import HomeButton from "../HomeButton";
import { Link } from 'react-router-dom'

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState();
  const [allProducts, setAllProducts] = useState();
  const [ loading, setLoading ] = useState(false)

  function getUserInfo() {
    onAuthStateChanged(auth, (user) => {
      setLoading(true)
      if (user) {
        const userRef = query(
          collection(db, "users"),
          where("id", "==", user?.uid)
        );

        const productRef = collection(db, 'products')
    
        async function userInfo() {
          const userSnap = await getDocs(userRef);
          const productSnap = await getDocs(productRef);
    
          const array = [];
          userSnap.forEach((user) => {
            array.push(user.data());
          });
          setUserInfo(array);

          const products = [];
          productSnap.forEach((doc) => {
            products.push(doc.data());
          });
          setAllProducts(products);
        }
    
        userInfo();
        setLoading(false)
      }

    })
     
  }

  useEffect(function () {
    getUserInfo();
  }, []);

  return (
    <div>
      <div className="">
        <div className="py-4">
          {!loading && userInfo?.length ? 
          userInfo?.map((user) => {
            return (
              <div key={user.id} className="flex justify-between">
                <div>
                  <p className="text-sienna text-[14px] font-light">{user.username}</p> 
                  <p className="text-sienna text-[14px] font-light">{user.email}</p>
                </div>
                <div>
                  <p className="text-sienna text-[14px] font-light">Joined at {timestamp(user.timestamp?.seconds)}</p>
                </div>
              </div>
            )
            })
            :
            <div className="flex justify-between">
              <div>
                  <div className='w-[80px] h-[15px] rounded-sm animate-pulse bg-siennaOpaque'></div>
                  <div className='w-[110px] h-[15px] rounded-sm mt-2 animate-pulse bg-siennaOpaque'></div>
              </div>
              <div>
                  <div className='w-[110px] h-[15px] rounded-sm animate-pulse bg-siennaOpaque'></div>
              </div>
            </div>
        }
        </div>
        <p className="text-sienna text-[14px] mb-2">Edit</p>
        <Heading headerText="You may also like" linkText='shop all' link='/shop/all'/>
        <div className="overflow-x-auto mt-2 userScroll">
          <div className="w-[fit-content] flex gap-1">
              {!loading && allProducts?.length ? 
              allProducts?.slice(0, 8).map(card => {
                return (
                  <Link key={card.id} to={`/${card.category}/${card.id}`}>
                    <div className="w-[300px] h-[45vh] bg-[gray] object-cover object-bottom">
                      <img className='w-full h-full' src={card.images[0]} alt={card.name}/>
                    </div> 
                  </Link> 
                )
              })
              :
              [0, 1, 2, 3, 4, 5, 6, 7, 8].map(place => {
                return (
                  <div key={place} className="w-[300px] h-[50vh] bg-siennaOpaque flex justify-center items-center animate-pulse">
                    <h3 className="text-[60px] font-serif text-sienna">S</h3>
                  </div> 
                )
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
