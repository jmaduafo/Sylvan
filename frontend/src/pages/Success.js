import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import { updateDoc, getDocs, query, collection, where, serverTimestamp } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
    setLoading(true)

    setTimeout(function() {
      setLoading(false)
      navigate('/')
    }, 5000)

  }, [loading])

  return (
    <div>Success</div>
  )
}

export default Success