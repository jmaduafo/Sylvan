import React from 'react'

const Filter = () => {
    const categories = ['All', 'Chairs', 'Sofas', 'Couches', 'Beds', 'Dining', 'Home Decor', 'Accents', 'Appliances']
    const sortCategories = [
        {
            'sortCategory': 'A-Z',
            'types': null

        },
        {
            'sortCategory': 'Z-A',
            'types': null
        },
        {
            'sortCategory': 'Oldest to newest',
            'types': null
        },
        {
            'sortCategory': 'Newest to Oldest',
            'types': null
        },
        {
            'sortCategory': '$ to $$$',
            'types': null
        },
        {
            'sortCategory': '$$$ to $',
            'types': null
        },
        {
            'sortCategory': 'Material:',
            'types': ['Wood', 'Iron', 'Suede', 'Ceramics', 'Leather']
        }
    ]
  return (
    <>
        <div className='p-3 border-b-siennaOpaque border-b-[1px]'>
            <h6 className='text-sienna'>FILTER BY:</h6>
            <div className='flex flex-wrap gap-2 mt-6'>
                {categories.map(category => {
                    return (
                        <p key={category} className='uppercase text-[12px] font-light px-4 py-[3px] rounded-full bg-olive text-cream text-center cursor-pointer'>{category}</p>
                    )
                })}
            </div>
        </div>
        <div className='p-3'>
            <div>
                <h6 className='text-sienna'>SORT BY:</h6>
                <div className='border-sienna border-[1px] h-[30px] w-[30px] rounded-full'>
                    
                </div>
            </div>
            
            <div className='mt-6 border-t-siennaOpaque border-t-[1px]'>
                {sortCategories.map(sort => {
                    return (
                        <div key={sort.sortCategory} className='border-b-siennaOpaque border-b-[1px] p-1 cursor-pointer group duration-[.4s] ease-in'>
                           <p className='text-[13px] text-chocolate group-hover:text-sienna'>{sort.sortCategory}</p>
                           {sort.types ? 
                            <div className='mt-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-1'>
                                    {sort.types.map(type => {
                                    return <div key={type} className='p-1 text-center border-siennaOpaque border-[1px]'>
                                        <p className='text-[13px] text-chocolate hover:text-sienna'>{type}</p>
                                    </div>
                                    })}
                            </div>
                            
                            : ''}
                            
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Filter