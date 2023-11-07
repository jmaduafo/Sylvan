import React, { useState } from 'react'
import SideBar from '../components/Profile/SideBar'
import UserInfo from '../components/Profile/UserInfo'
import OrderHistory from '../components/Profile/OrderHistory'

const Profile = () => {
  const [ selected, setSelected ] = useState('My account')
  return (
    <section>
      <div className='max-w-[90%] mx-auto flex sm:flex-row flex-col min-h-[85vh] py-6'>
        <div className='sm:basis-[25%] basis-full'>
          <SideBar setSelected={setSelected} selected={selected}/>
        </div>
        <div className='sm:basis-[75%] basis-full'>
          {selected === 'My account' ? <UserInfo/> : <OrderHistory/>}
        </div>
        
       

      </div>
    </section>
  )
}

export default Profile