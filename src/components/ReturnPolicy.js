import React from 'react'
import Cancel from './icons/Cancel'

const ReturnPolicy = ({ setPolicyOpen, policyOpen }) => {
    const policy = [
        {
            'title': 'Shipping',
            'details': [
                {
                    'title': 'Delivery Timeframe',
                    'description': 'We strive to deliver your furniture in the most efficient manner possible. The typical delivery timeframe is within 2-4 weeks from the date of order confirmation, but this may vary depending on product availability and your location.'
                },
                {
                    'title': 'White Glove Delivery',
                    'description': 'Enjoy peace of mind with our White Glove delivery service. Our professional team will carefully assemble and place your furniture in your chosen room. This service also includes removal of packaging materials for your convenience.'
                },
                {
                    'title': 'Shipping Charges',
                    'description': 'Shipping charges will be calculated at checkout and are based on the size, weight, and destination of your order. Any additional shipping fees, such as for remote or difficult-to-access locations, will be communicated before finalizing your purchase.'
                },
        
            ]
        },
        {
            'title': 'Returns and Exchanges',
            'details': [
                {
                    'title': 'Delivery Timeframe',
                    'description': 'We want you to be completely satisfied with your purchase. If you are not delighted with your furniture, please contact us within 30 days of delivery to initiate a return or exchange.'
                },
                {
                    'title': 'White Glove Delivery',
                    'description': 'To be eligible for a return or exchange, the item must be in its original condition, unused, and in its original packaging. We reserve the right to inspect the item to ensure it meets these criteria.'
                },
                {
                    'title': 'Shipping Charges',
                    'description': 'To initiate a return or exchange, please contact our customer service team. We will guide you through the process, arrange for pickup or return shipping, and process your refund or exchange as quickly as possible.'
                },
                {
                    'title': 'Restocking Fee',
                    'description': 'A restocking fee may apply to certain returns, particularly for custom or made-to-order items. This fee, if applicable, will be communicated during the return process.'
                },
                {
                    'title': 'Damaged or Defective Items',
                    'description': 'If you receive a damaged or defective item, please report it within 7 days of delivery. We will arrange for a replacement or repair at no additional cost.'
                },
                {
                    'title': 'Refund Processing',
                    'description': 'Refunds will be processed within 5-10 business days of receiving the returned item, and the amount will be credited to the original payment method.'
                },
        
            ]
        },
    ]
    
  return (
    <div className={`${policyOpen ? 'visible' : 'invisible'} fixed bg-chocolateOpaque w-full h-full z-[80] py-6 text-sienna`}>
        <div className='policy border-sienna border-[1px] bg-cream w-[45%] mx-auto p-4 overflow-auto max-h-[80vh]'>
            <div className='flex justify-between items-center'>
                <h3 className='text-[22px] uppercase'>Shipping & Return Policy</h3>
                <div onClick={() => setPolicyOpen(false)}>
                    <Cancel/>
                </div>
                
            </div>
            
            {policy.map(pol => {
                return (
                    <div key={pol.title}>
                        <h5 className='my-4'>{pol.title}:</h5>
                        <ol className='list-decimal px-4' type='1'>
                            {pol.details.map(detail => {
                                return <li key={detail.title} className='mt-2 text-[13px] indent-2'>{detail.title}:<br/>{detail.description}</li>
                            })}
                        </ol>
                        
                    </div>
                )
            })}
        
        <p className='mt-5 text-[13px]'>At Sylvan, we are committed to providing you with the highest quality furniture and exceptional service. If you have any questions or need further assistance, please don't hesitate to contact our customer support team.</p>
        </div>
        
    </div>
  )
}

export default ReturnPolicy