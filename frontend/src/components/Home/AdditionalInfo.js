import React from 'react'

const AdditionalInfo = () => {
  return (
    <section data-scroll data-scroll-speed='.05' className='my-2 flex justify-between items-center relative h-[90vh] bg-cover bg-no-repeat bg-center z-[0]' style={{ backgroundImage: 'url(https://res.cloudinary.com/dyxxn831a/image/upload/v1699976963/Sylvan/room-decor-with-potted-plants-sofa_e4clcy.jpg)'}}>
        <div className='absolute bg-black opacity-[.25] top-0 left-0 w-full h-full z-[-1]'></div>
        <div className='w-[70%] mx-auto relative'>
            <div data-scroll data-scroll-speed='.3' className='z-[1] w-[60%] object-cover object-bottom'>
                <img className='w-full h-full' src='https://res.cloudinary.com/dyxxn831a/image/upload/v1699976963/Sylvan/room-decor-with-potted-plants-sofa_e4clcy.jpg' alt='white couch with plant on wooden chair'/>
            </div>
            <div data-scroll data-scroll-speed='.1' className='z-[3] absolute w-[50%] top-1/2 right-0'>
                <p className='text-cream font-light'>Our furniture store is more than a showroom; it's a curated collection where every piece is a masterpiece. Sylvan holds a steadfast commitment to attention to detail, meticulously selecting and showcasing pieces that embody sophistication and timeless design. With a sense of responsibility to our clientele, we pride ourselves on presenting not just furniture, but an elevated lifestyle.</p>
            </div>
        </div>
    </section>
  )
}

export default AdditionalInfo