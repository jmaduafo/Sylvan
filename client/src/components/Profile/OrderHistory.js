import React, { useState, useEffect } from 'react'
import pic from '../../assets/hero-image.jpg'
import OrderViewMore from './OrderViewMore'
import { motion, easeInOut } from 'framer-motion'
import { onAuthStateChanged } from 'firebase/auth'
import { query, collection, where, getDocs } from 'firebase/firestore'
import { auth, db } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'
import { epoch } from '../../utils/epochConverter'

const OrderHistory = () => {
    const [ viewMore, setViewMore ] = useState(false)
    const [ order, setOrder ] = useState()
    const [ allOrders, setAllOrders ] = useState() 

    let navigate = useNavigate()

    // Only save order history if user is logged in
  function getOrderHistory() {
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
          })
          setAllOrders(orderAll)
        }

        userCheck()
        console.log(allOrders)

      } else {
        navigate('/login')
      }
    }); 
    }

    useEffect(function() {
      getOrderHistory()
      
    }, [])

  return (
    <div>
        {viewMore ? <OrderViewMore order={order} setViewMore={setViewMore} viewMore={viewMore}/> : <MainOrder allOrders={allOrders} viewMore={viewMore} setViewMore={setViewMore} setOrder={setOrder}/>}
    </div>
    
  )
}

 // What is shown first when user lands on page
 const MainOrder = ({ setViewMore, viewMore, setOrder, allOrders }) => {
  return (
  <motion.div initial={{ opacity: viewMore ? 1 : 0 }} animate={{ opacity: viewMore ? 0 : 1 }} transition={{ duration: .5, ease: easeInOut}}>
    <div className='flex text-sienna border-b-siennaOpaque border-b-[1px] pb-2 px-4'>
      <div className='basis-[35%]'>
        <p className='font-light text-[14px]'>Order Items</p>
      </div>
      <div className='basis-[15%]'>
        <p className='font-light text-[14px]'>Total Price</p>
      </div>
      <div className='basis-[20%]'>
        <p className='font-light text-[14px]'>Date Ordered</p>
      </div>
      <div className='basis-[30%]'>
        <p className='font-light text-[14px]'>Status</p>
      </div>
    </div>
    {allOrders?.length && allOrders?.map(order => {
      return (
        <div key={order.purchasedAt} onClick={() => {setOrder(order); setViewMore(true)}} className='hover:bg-siennaOpaque duration-[.4s] cursor-pointer hover:text-cream flex text-sienna items-center py-3 px-4 border-b-siennaOpaque border-b-[1px]'>
          <div className='basis-[35%] flex gap-2 items-center'>
            <div className='w-[90px] h-[120px] object-cover object-bottom'>
              <img className='w-full h-full' src={order.items[0]?.images[0]} alt={order.items[0]?.images[0]}/>
            </div>
            <p className='text-[13px] font-light'>{order.items?.length} item{order.items?.length === 1 ? '' : 's'}</p>
          </div>
          <div className='basis-[15%]'>
            <p className='text-[13px] font-light'>${order.totalPrice?.toString().length > 6 && order.totalPrice ? Intl.NumberFormat().format(parseFloat(order.price).toFixed(2)) : '5,678'}</p>
          </div>
          <div className='basis-[20%]'>
            <p className='text-[13px] font-light'>{order.purchasedAt && epoch(order.purchasedAt)}</p>
          </div>
          <div className='basis-[30%]'>
            <p className='py-[2px] px-6 bg-olive font-light text-cream text-[13px] w-fit rounded-full'>Pending</p>
          </div>
      </div>
      )
    })
    
    }
  </motion.div>
  )

}



export default OrderHistory