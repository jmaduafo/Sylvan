import React, { useState } from 'react'
import { categories } from '../utils/shopCategories'

const Api = () => {
    const materials = ['Wood', 'Iron', 'Suede', 'Leather', 'Ceramics']

    const [ images, setImages] = useState()
    const [ materialArray, setMaterialArray ] = useState([])
    const [ sizeArray, setSizeArray ] = useState([])
    const [ colorArray, setColorArray ] = useState([1])
    const [ completeColorArray, setCompleteColorArray ] = useState([])

    function handleCheckedMaterials(e) {
        var checkedArray = [... materialArray]

        if (e.target.checked) {
            // if item is selected, then append to array
            checkedArray = [...materialArray, e.target.value]
        } else {
            // if the selected checkbox is already in array, then find where it
            // is and remove it
            checkedArray.splice(checkedArray.indexOf(e.target.value), 1)
        }

        setMaterialArray(checkedArray)
    }

    function handleCheckedSizes(e) {
        var sizeAll = [... sizeArray]

        if (e.target.checked) {
            // if item is selected, then append to array
            sizeAll = [...sizeArray, e.target.value]
        } else {
            // if the selected checkbox is already in array, then find where it
            // is and remove it
            sizeAll.splice(sizeAll.indexOf(e.target.value), 1)
        }

        setSizeArray(sizeAll)
    }

    function handleColorArray(e) {
        var newColorArray = [...colorArray]

        if (e.target.innerText === '+') {
            // If increase is pushed, then add a new value in array that is an increment of the
            // previous value
            newColorArray.push(colorArray[colorArray.length - 1] + 1)

            setColorArray(newColorArray)
        } else if (e.target.innerText === '-') {
            // If the length of the array is 2 or more, remove the last element from the array
            if (colorArray.length >= 2) {
                newColorArray.pop()
                setColorArray(newColorArray)
            }
        } else if (e.target.id.includes('color')) {
            var newArray = []
            for (let i = 0; i < colorArray.length; i++) {
                newArray.push(e.target.value)
            }
            setCompleteColorArray(newArray)
        }

        console.log(completeColorArray)

    }

    function handleProductSubmit(e) {
        e.preventDefault()
    }

  return (
    <section className='py-[5rem] flex justify-center w-full'>
        <div className='border-sienna border-[2px] w-[45%]'>
            <h3 className='py-3 px-2 text-[40px] text-sienna font-serif'>Create Product</h3>
            <form onSubmit={handleProductSubmit} className='px-2 flex flex-wrap gap-[2rem]'>
                {/* PRODUCT NAME*/}
                <div className='my-2'>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='productName'>Name</label>
                    <input className='text-sienna block mt-1 outline-none bg-transparent rounded-full border-siennaOpaque border-[1.5px] px-2' type='text' id='productName' required/>
                </div>
                {/* PRDOUCT PRICE*/}
                <div className='my-2'>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='productPrice'>Price</label>
                    <input className='text-sienna block mt-1 outline-none bg-transparent rounded-full border-siennaOpaque border-[1.5px] px-2' min='20' step='.01' type='number' id='productPrice' required/>
                </div>
                {/* PRODUCT CATEGORY */}
                <div className='my-2'>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='productPrice'>Category</label>
                    <select className='text-sienna block mt-1 outline-none bg-transparent rounded-full border-siennaOpaque border-[1.5px] px-2' min='20' step='.01' type='number' id='productPrice' required>
                        {categories.map(category => {
                            return (
                                <option key={category} value={category.toLowerCase()}>{category}</option>
                            )
                        })}
                    </select>
                </div>
                {/* PRODUCT QUANTITY */}
                <div className='my-2'>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='productQuantity'>Quantity</label>
                    <input className='text-sienna block mt-1 outline-none bg-transparent rounded-full border-siennaOpaque border-[1.5px] px-2' min='0' type='number' id='productQuantity' required/>
                </div>
                {/* PRODUCT DESCRIPTION */}
                <div className='my-2'>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='productDescription'>Description</label>
                    <textarea className='text-[13px] text-sienna block mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] px-2' cols='50' rows={4} id='productDescription' required></textarea>
                </div>
                {/* LOOKBOOK BOOLEAN*/}
                <div className='my-2'>
                    <p className='text-chocolate font-light text-[14px]'>Add to lookbook</p>
                    <input type='radio' className='mr-2 text-sienna mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] px-2' id='isLookbook' name='lookbook' value='true'/>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='isLookbook'>True</label>
                    <input type='radio' className='ml-3 mr-2 text-sienna mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] px-2' id='isNotLookbook' name='lookbook' value='false'/>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='isNotLookbook'>False</label>
                </div>
                {/* MATERIALS ARRAY*/}
                <div className='my-2'>
                    <p className='text-chocolate font-light text-[14px]'>Materials</p>
                    {materials.map(material => {
                        return (
                            <div key={material}>
                                <input onChange={handleCheckedMaterials} type='checkbox' className='mr-2 text-sienna mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] px-2' id={material} name={material} value={material}/>
                                <label className='text-[14px] font-light text-chocolate' htmlFor={material}>{material}</label>
                            </div>   
                        )
                    })}
                </div>
                {/* SIZES ARRAY*/}
                <div className='my-2'>
                    <p className='text-chocolate font-light text-[14px]'>Sizes</p>
                    {['S', 'M', 'L'].map(size => {
                        return (
                            <div key={size}>
                                <input onChange={handleCheckedSizes} type='checkbox' className='mr-2 text-sienna mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] px-2' id={size} name={size} value={size}/>
                                <label className='text-[14px] font-light text-chocolate' htmlFor={size}>{size}</label>
                            </div>   
                        )
                    })}
                </div>
                {/* COLORS ARRAY*/}
                <div className='my-2'>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='productColors'>Colors (separate with comma and space ', '; write in hexcode)</label>
                    <textarea className='text-[13px] text-sienna block mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] px-2' cols='50' rows={4} id='productColors' required></textarea>
                </div>
               {/* SUBMIT BUTTON */}
                <button type='submit' className='block w-full bg-olive text-cream font-light uppercase mb-2 py-2 rounded-md'>Submit</button>
            </form>
        </div>
    </section>
  )
}

const LabelInput = ({ labelName, typeName, idName }) => {
    return (
        <div className='my-2'>
            <label className='text-[14px] font-light text-chocolate' for={idName}>{labelName}</label>
            <input className='text-sienna block mt-1 outline-none bg-transparent rounded-full border-siennaOpaque border-[1.5px] px-2' type={typeName} id={idName}/>
        </div>
    )
}

export default Api