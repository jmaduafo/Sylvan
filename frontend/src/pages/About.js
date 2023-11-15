import React from 'react'

const About = () => {
  return (
    <div className='text-sienna'>
      <section>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-end sm:gap-8'>
          <div className='overflow-hidden basis-full sm:basis-[65%] object-cover object-bottom'>
            <img className='w-[150%] h-[150%]' src='https://res.cloudinary.com/dyxxn831a/image/upload/v1699978914/Sylvan/landon10_qwlnwy.jpg' alt='burnt orange background with vase and rustic sink'/>
          </div>
          <div className='basis-full sm:basis-[35%] sm:pb-8'>
            <p className='w-full text-[14px] sm:w-[70%] mb-8'>Sylvan, a haven for those who appreciate the intersection of elegance and aesthetics in home decor. Our furniture store is more than a showroom; it's a curated collection where every piece is a masterpiece. Sylvan holds a steadfast commitment to attention to detail, meticulously selecting and showcasing pieces that embody sophistication and timeless design.</p>
            <p className='w-full text-[14px] sm:w-[70%]'>With a sense of responsibility to our clientele, we pride ourselves on presenting not just furniture, but an elevated lifestyle. Each item in our collection is a testament to our dedication to offering the very best in curated pieces, where every nuance is considered, ensuring that Sylvan is synonymous with the epitome of refined living.</p>
          </div>
        </div>
      </section>
      <section className='mt-[10rem]'>
        <div className='sm:w-[70%] mx-auto flex flex-col-reverse sm:flex-row sm:items-start sm:gap-[5rem]'>
          <div className='sm:basis-[50%]'>
            <h2 className='font-serif text-[40px]'>Serenity & Craftsmanship</h2>
            <div className='sm:pl-[8rem] mt-[3rem]'>
              <p className='text-[14px] mb-8'>Other travelling salesmen live a life of luxury. For instance, whenever I go back to the guest house during the morning to copy out the contract. These gentlemen are always still sitting there eating.</p>
              <p className='text-[14px]'>I ought to just try that with my boss; I'd get kicked out on the spot. Doing business like this takes much more effort than doing your own business at home.</p>
            </div>
          </div>
          <div className='sm:basis-[50%] flex items-start gap-5'>
            <div className='basis-[50%] pt-[10rem] h-auto object-cover object-bottom'>
              <img className='w-full h-full' src='https://res.cloudinary.com/dyxxn831a/image/upload/v1700057167/Sylvan/landon31_co8msi.png'/>
            </div>
            <div className='basis-[50%] h-auto object-cover object-bottom'>
              <img className='w-full h-full' src='https://res.cloudinary.com/dyxxn831a/image/upload/v1700057218/Sylvan/landon32_hkkvbc.jpg'/>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-[10rem]'>
        <div className='sm:w-[60%] mx-auto'>
          <div></div>
          <div className='text-center'>
            <h2 className='font-serif text-[40px]'>Our Team</h2>
            <div className='flex justify-center items-center'>
              <p className='sm:w-[70%] text-[14px]'>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </div>
  )
}

export default About