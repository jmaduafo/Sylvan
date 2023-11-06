import React, { useState } from 'react'
import { categories } from '../utils/shopCategories'
import Toast from '../components/Toast'
import { db } from '../firebase/config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import LoadingSmall from '../components/LoadingSmall'

const Api = () => {
    const materials = ['Wood', 'Iron', 'Suede', 'Leather', 'Ceramics']

    const [ name, setName] = useState('')
    const [ price, setPrice] = useState(20)
    const [ category, setCategory] = useState('')
    const [ quantity, setQuantity] = useState(0)
    const [ description, setDescription] = useState('')
    const [ isLookbook, setIsLookbook] = useState('')
    const [ materialArray, setMaterialArray ] = useState([])
    const [ sizeArray, setSizeArray ] = useState([])
    const [ colors, setColors] = useState('') 
    const [ images, setImages] = useState('')
    const [ message, setMessage] = useState('')

    const [ loading, setLoading] = useState(false)

    function handleIsLookbook(e) {
        if (e.target.checked) {
            setIsLookbook(e.target.value)
        }
    }

    function handleCheckedMaterials(e) {
        var checkedArray = [...materialArray]

        if (e.target.checked) {
            // if item is selected, then append to array
            checkedArray = [...materialArray, e.target.value]
        } else {
            // if the selected checkbox is already in array, then find where it
            // is and remove it
            checkedArray.splice(checkedArray.indexOf(e.target.value), 1)
        }

        setMaterialArray(checkedArray)

        console.log(materialArray)
    }

    function handleCheckedSizes(e) {
        var sizeAll = [...sizeArray]

        if (e.target.checked) {
            // if item is selected, then append to existing array
            sizeAll = [...sizeArray, e.target.value]
        } else {
            // if the selected checkbox is already in array, then find where it
            // is and remove it
            sizeAll.splice(sizeAll.indexOf(e.target.value), 1)
        }

        setSizeArray(sizeAll)
    }    

    function handleProductSubmit(e) {
        e.preventDefault()

        if (!name.length || !category.length || !description.length || !isLookbook || 
            !materials.length || !sizeArray.length || !colors.length || !images.length) {
            setMessage('All entries must be entered')
        } else if (quantity < 1) {
            setMessage('Quantity must be greater than 0')
        } else {
            setLoading(true)
            async function createProduct() {
                const productRef = collection(db, 'products') 

                try {
                    await addDoc(productRef, {
                        name: name,
                        category: category,
                        price: +price,
                        quantity: +quantity,
                        description: description,
                        isLookbook: isLookbook === 'true' ? true : false,
                        colors: colors.split(', '),
                        images: images.split(', '),
                        materials: materialArray,
                        sizes: sizeArray,
                        createdAt: serverTimestamp() 
                    })

                    setLoading(false)
                    setMessage('Product added successfully!')
                } catch (err) {
                    setLoading(false)
                    setMessage('Something went wrong. Please try again')
                    console.log(err)
                }
            }

            createProduct()
        }
    }

  return (
    <section className='py-[5rem] flex justify-center w-full'>
        <Toast setMessage={setMessage} message={message}/>
        <div className='border-sienna border-[2px] w-[45%]'>
            <h3 className='py-3 px-2 text-[40px] text-sienna font-serif'>Create Product</h3>
            <form onSubmit={handleProductSubmit} className='px-2 flex flex-wrap gap-[2rem]'>
                {/* PRODUCT NAME*/}
                <div className='my-2'>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='productName'>Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} className='text-sienna block mt-1 outline-none bg-transparent rounded-full border-siennaOpaque border-[1.5px] px-2' type='text' id='productName'/>
                </div>
                {/* PRDOUCT PRICE*/}
                <div className='my-2'>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='productPrice'>Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className='text-sienna block mt-1 outline-none bg-transparent rounded-full border-siennaOpaque border-[1.5px] px-2' min='20' step='.01' type='number' id='productPrice'/>
                </div>
                {/* PRODUCT CATEGORY */}
                <div className='my-2'>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='productPrice'>Category</label>
                    <select onChange={(e) => setCategory(e.target.value)} value={category} className='text-sienna block mt-1 outline-none bg-transparent rounded-full border-siennaOpaque border-[1.5px] px-2' min='20' step='.01' type='number' id='productPrice'>
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
                    <input onChange={(e) => setQuantity(e.target.value)} value={quantity} className='text-sienna block mt-1 outline-none bg-transparent rounded-full border-siennaOpaque border-[1.5px] px-2' min='0' type='number' id='productQuantity'/>
                </div>
                {/* PRODUCT DESCRIPTION */}
                <div className='my-2'>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='productDescription'>Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='text-[13px] text-sienna block mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] px-2' cols='50' rows={4} id='productDescription'></textarea>
                </div>
                {/* LOOKBOOK BOOLEAN*/}
                <div className='my-2'>
                    <p className='text-chocolate font-light text-[14px]'>Add to lookbook</p>
                    <input onChange={handleIsLookbook} value='true' type='radio' className='mr-2 text-sienna mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] px-2' id='isLookbook' name='lookbook'/>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='isLookbook'>True</label>
                    <input onChange={handleIsLookbook} value='false' type='radio' className='ml-3 mr-2 text-sienna mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] px-2' id='isNotLookbook' name='lookbook'/>
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
                {/* COLOR ARRAY*/}
                <div className='my-2'>
                    <input type='color' className='text-sienna mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] w-[30px] h-[25px]'/>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='productColors'>Color (separate by ', ' and write in hexcode)</label>
                    <textarea onChange={(e) => setColors(e.target.value)} value={colors} className='text-[13px] text-sienna block mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] px-2' cols='50' rows={4} id='productColors'></textarea>
                </div>
                {/* IMAGES ARRAY*/}
                <div className='my-2'>
                    <label className='text-[14px] font-light text-chocolate' htmlFor='productImages'>Images (separate urls by ', ')</label>
                    <textarea onChange={(e) => setImages(e.target.value)} value={images} className='text-[13px] text-sienna block mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] px-2' cols='50' rows={4} id='productImages'></textarea>
                </div>
                {/* <div className='my-2'>
                    <p className='text-chocolate font-light text-[14px]'>Colors</p>
                    <div className='flex gap-3'>
                    {colorArray.map(color => {
                            return (
                            <input key={color} onChange={handleColorArray} id={`color${color}`} type='color' className='text-sienna mt-1 outline-none bg-transparent rounded-md border-siennaOpaque border-[1.5px] w-[30px] h-[25px]'/>
                            )
                    })}
                    </div>
                        <p className='cursor-pointer' onClick={handleColorArray}>+</p>                   
                        <p className='cursor-pointer' onClick={handleColorArray}>-</p>
                   
                </div> */}
               {/* SUBMIT BUTTON */}
                <button type='submit' className='block w-full bg-olive text-cream font-light uppercase mb-2 py-2 rounded-md'>{loading ? LoadingSmall : 'Submit'}</button>
            </form>
        </div>
    </section>
  )
}

// function handleColorArray(e) {
    //     var newColorArray = [...colorArray]

    //     if (e.target.innerText === '+') {
    //         // If increase is pushed, then add a new value in array that is an increment of the
    //         // previous value
    //         newColorArray.push(colorArray[colorArray.length - 1] + 1)

    //         setColorArray(newColorArray)
    //     } else if (e.target.innerText === '-') {
    //         // If the length of the array is 2 or more, remove the last element from the array
    //         if (colorArray.length >= 2) {
    //             newColorArray.pop()
    //             setColorArray(newColorArray)
    //         }
    //     } else if (e.target.id.includes('color')) {
    //         var newArray = []
    //         for (let i = 0; i < colorArray.length; i++) {
    //             newArray.push(e.target.value)
    //         }
    //         completeColorArray(newArray)
    //     }

    // }

export default Api