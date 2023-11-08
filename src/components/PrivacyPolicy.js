import React from 'react'
import { motion, easeInOut } from 'framer-motion'
import Cancel from './icons/Cancel'

const PrivacyPolicy = ({ setPrivacyOpen, privacyOpen }) => {

    const policy = [
        {
            'title': 'Information We Collect',
            'details': [
                {
                    'description': 'Personal Information: We may collect personal information, including your name, email address, phone number, and shipping address when you make a purchase.'
                },
                {
                    'description': 'Payment Information: For online transactions, we collect payment information, such as credit card details. This information is securely processed by trusted payment processors.'
                },
                {
                    'description': 'Usage Data: We may collect information about your interaction with our website, including your IP address, browser type, and pages visited.'
                },
                {
                    'description': 'We use cookies and similar tracking technologies to enhance your browsing experience and collect data on website usage.'
                },
        
            ]
        },
        {
            'title': 'How We Use Your Information',
            'details': [
                {
                    'description': 'Order Processing: We use your personal information to process and fulfill your orders and provide customer support.'
                },
                {
                    'description': 'Communication: We may use your contact details to send order updates, promotional offers, and newsletters, which you can opt out of.'
                },
                {
                    'description': 'Improve User Experience: We analyze usage data to enhance our website, services, and product offerings.'
                },
                {
                    'description': 'Legal Requirements: We may disclose your information to comply with legal obligations, protect our rights, and ensure the safety and security of our users and the public.'
                },
        
            ]
        },
        {
            'title': 'Data Security',
            'details': [
                {
                    'description': 'We employ industry-standard security measures to protect your information. We use SSL encryption to secure data transmission, and we regularly update our security protocols.'
                }        
            ]
        },
        {
            'title': 'Data Retention',
            'details': [
                {
                    'description': 'We will retain your information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.'
                }        
            ]
        },
        {
            'title': 'Third-Party Links',
            'details': [
                {
                    'description': 'Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these sites. Please review the privacy policies of these third parties.'
                }        
            ]
        },
        {
            'title': 'Your Privacy Choices',
            'details': [
                {
                    'description': 'You may update your personal information, opt out of email communications, or request the deletion of your data by contacting us at [contact information].'
                }        
            ]
        },
        {
            'title': 'Policy Changes',
            'details': [
                {
                    'description': 'We may update this Privacy Policy from time to time to reflect changes in our practices. We will notify you of any significant changes via our website.'
                }
        
            ]
        },
        {
            'title': 'Contact Us',
            'details': [
                {
                    'description': 'If you have any questions or concerns about this Privacy Policy, please contact us at [contact information].'
                }
        
            ]
        }
    ]
  return (
    <div className={`${privacyOpen ? 'visible' : 'invisible'} duration-[.4s] fixed bg-chocolateOpaque w-full h-full z-[80] py-6 text-sienna`}>
        <motion.div initial={{ opacity: privacyOpen ? 0 : 1 }} animate={{ opacity: privacyOpen ? 1 : 0 }} transition={{ duration: .6, ease: easeInOut}}  className='policy border-sienna border-[1px] bg-cream w-[45%] mx-auto p-4 overflow-auto max-h-[80vh]'>
            <div className='flex justify-between items-center'>
                <h3 className='text-[22px] uppercase'>Privacy Policy for Sylvan</h3>
                <div onClick={() => setPrivacyOpen(false)}>
                    <Cancel/>
                </div>
                
            </div>
            <div className='my-3'>
                <h5>Effective Date: November 8th, 2023</h5>
                <p className='text-[13px] mt-3'>At Sylvan, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data. By using our website and our services, you consent to the practices described in this policy.</p>
            </div>
            
            {policy.map(pol => {
                return (
                    <div key={pol.title}>
                        <h5 className='my-4'>{pol.title}:</h5>
                        {pol.details.length > 1 ? 
                        <ol className='list-decimal px-4' type='1'>
                            {pol.details.map(detail => {
                                return <li key={detail.description} className='mt-2 text-[13px] indent-2'>{detail.description}</li>
                            })}
                        </ol>
                        : 
                        pol.details.map(detail => {
                            return <p key={detail.description} className='mt-2 text-[13px]'>{detail.description}</p>
                        })
                        }
                        
                    </div>
                )
            })}
        
        <p className='mt-5 text-[13px]'>Sylvan Home Furniture is committed to safeguarding your privacy and ensuring the security of your personal information. Thank you for choosing us for your furniture needs.</p>
        </motion.div>
        
    </div>
  )
}

export default PrivacyPolicy