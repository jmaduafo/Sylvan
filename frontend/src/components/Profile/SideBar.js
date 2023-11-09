import React from 'react'

const SideBar = ({ setSelected, selected}) => {
  const sections = ['My account', 'Past Orders', 'Logout']

  return (
    <div className='h-[85vh]'>
      <div className='h-[90%]'>
      {sections.map(section => {
        return (
          <div>
            <p onClick={() => setSelected(section)} className={`${selected === section ? 'text-sienna' : 'text-siennaOpaque'} hover:text-sienna duration-[.4s] w-[fit-content] cursor-pointer capitalize text-[13px] font-light pt-2 pb-1`}>{section}</p>
          </div>
        )
      })}
      </div>
      <div className='h-[10%]'>
        <p className='text-[13px] text-[red] cursor-pointer w-[fit-content]' onClick={(e) => setSelected(e.target.innerText)}>Delete Account</p>
      </div>
    </div>
  )
}

export default SideBar
