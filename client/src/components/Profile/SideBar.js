import React from 'react'

const SideBar = ({ setSelected, selected}) => {
  const sections = ['My account', 'Past Orders', 'Logout']

  return (
    <aside className='sm:h-[85vh] sm:border-none sm:pb-0 h-[25vh] border-b-[1px] border-b-siennaOpaque pb-4'>
      <div className='h-[90%]'>
      {sections.map(section => {
        return (
          <div key={section}>
            <p onClick={() => setSelected(section)} key={section} className={`${selected === section ? 'text-sienna' : 'text-[#9b4e1781]'} hover:text-sienna duration-[.4s] w-[fit-content] cursor-pointer capitalize text-[13px] font-light pt-2 pb-1`}>{section}</p>
          </div>
        )
      })}
      </div>
      <div className='h-[10%]'>
        <p className='text-[13px] text-[red] cursor-pointer w-[fit-content]' onClick={(e) => setSelected(e.target.innerText)}>Delete Account</p>
      </div>
    </aside>
  )
}

export default SideBar
