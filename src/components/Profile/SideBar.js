import React from 'react'

const SideBar = ({ setSelected}) => {
  const sections = ['My account', 'Past Orders']

  return (
    <div>
      {sections.map(section => {
        return (
          <div onClick={() => setSelected(section)}>
            <p className='w-[fit-content] cursor-pointer capitalize text-[13px] font-light text-sienna pt-2 pb-1'>{section}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SideBar
