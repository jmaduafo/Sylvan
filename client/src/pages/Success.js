import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import { updateDoc, getDocs, query, collection, where, serverTimestamp } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import MainPreloader from '../components/MainPreloader'
import CheckMark from '../components/icons/CheckMark'

const Success = () => {
  const [ loading, setLoading ] = useState(false)

  const { cartItems } = useSelector(state => state.cart)

  let navigate = useNavigate()

  // Only save order history if user is logged in
  function saveOrderHistory() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const userRef = query(collection(db, 'users'), where('id', '==', user.uid))

        async function userCheck() {
          const userSnap = await getDocs(userRef)

          let orderAll;
          userSnap.forEach(doc => {
            orderAll = doc.data().orderHistory
            
            try {
              async function order() {
                await updateDoc(doc.ref, {
                  orderHistory: [...orderAll, {items: cartItems, purchasedAt: serverTimestamp()}]
                })
              }
              order()
            } catch (err) {
              console.log(err)
            }
          })
        }

        userCheck()
      }
    });
    
    
  }

  useEffect(function() {
    saveOrderHistory()
    // setLoading(true)

    // setTimeout(function() {
    //   setLoading(false)
    //   navigate('/')
    // }, 5000)

  }, [])

  return (
    <section className='flex justify-center items-center pt-[4rem]'>
      <MainPreloader/>
      <div className='p-5 mx-auto w-[30%] text-sienna text-center border-sienna border-[2px]'>
        <div className='flex justify-center items-center'>
          <CheckMark/>
        </div>
        <h4 className='mt-8 font-semibold text-[32px] font-serif'>Thank you for your purchase!</h4>
        <p className='mt-3'>Your order has been confirmed and is being processed and prepared for shipping. Your order number is <span className='font-semibold'>#73281243574338</span></p>
        <div className='mt-2'>
          <Link to='/'>
          <button className='py-2 mt-2 hover:bg-[#9b4e17b2] hover:text-cream duration-[.4s] border-siennaOpaque border-[1px] text-sienna sm:text-[15px] text-[13px] w-full uppercase text-center font-light'>
            Return home
          </button>
          </Link>
          <Link to='/shop/all'>
          <button className="py-2 mt-2 hover:bg-[#9b4e17b2] hover:text-cream duration-[.4s] border-siennaOpaque border-[1px] text-sienna sm:text-[15px] text-[13px] w-full uppercase text-center font-light">
            Continue Shopping
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Success