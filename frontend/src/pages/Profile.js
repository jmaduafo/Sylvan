import React, { useState, useEffect } from 'react'
import SideBar from '../components/Profile/SideBar'
import UserInfo from '../components/Profile/UserInfo'
import OrderHistory from '../components/Profile/OrderHistory'
import { auth } from '../firebase/config'
import { signOut, deleteUser } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Toast from '../components/Toast'
import DeleteModal from '../components/DeleteModal'

const Profile = () => {
  const [ selected, setSelected ] = useState('My account')
  const [ message, setMessage ] = useState('')
  const [ messageType, setMessageType ] = useState('')
  const [ modalOpen, setModalOpen ] = useState(false)
  const [ confirmDelete, setConfirmDelete ] = useState(false)

  let navigate = useNavigate()

  // On logout click
  function handleLogout() {
      signOut(auth).then(() => {
          // Sign-out successful.
          navigate('/')
      }).catch((error) => {
          // An error happened.
          console.log(error)
          setMessageType('Error Message')
          setMessage('Something went wrong. Please try again.')
      });
  } 

  function handleDeleteUser() {
    const user = auth.currentUser;
      deleteUser(user).then(() => {
        // User deleted.
        navigate('/')
      }).catch((error) => {
        // An error ocurred
        setMessageType('Error Message')
        setMessage('Something went wrong. User was unable to be deleted.')
      })
  }

  useEffect(function() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [])

  useEffect(function() {
    if (selected === 'Logout') {
      handleLogout()
    }
    if (selected === 'Delete Account') {
      setModalOpen(true)     
    }
  }, [selected, confirmDelete])

  useEffect(function() {
    if (confirmDelete) {
      handleDeleteUser()
    }
  }, [confirmDelete])

  return (
    <section className='relative'>
      <DeleteModal modalOpen={modalOpen} setModalOpen={setModalOpen} setConfirmDelete={setConfirmDelete}/>
      <Toast messageType={messageType} message={message} setMessage={setMessage}/>
      <div className='max-w-[90%] mx-auto flex sm:flex-row flex-col max-h-[85vh] py-6'>
        <div className='sm:basis-[25%] basis-full'>
          <SideBar setSelected={setSelected} selected={selected}/>
        </div>
        <div className='sm:basis-[75%] basis-full overflow-x-hidden orderHistory'>
          {selected === 'My account' ? <UserInfo/> : <OrderHistory/>}
        </div>
      </div>
    </section>
  )
}

export default Profile