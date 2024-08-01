'use client'
import React, { useContext, useState } from 'react'
import {
  ArrowRight,
  Check,
  Loader2Icon,
  Minus,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import axios from 'axios'
// import { UserSubscription } from '../../utils/Schema'
import { useUser } from '@clerk/nextjs'
import { db } from '../../utils/Db'
import moment from 'moment'
// import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'

const pricingItems = [
  {
    plan: "Free",
    features: [
      {
        text: '1000 Words/Day',
      },
      {
        text: 'Limited Downloads',
      },
      {
        text: '20+ Templates Access',
      },
      {
        text: 'Image Generation Templates ',
        negative: true,
      },
      {
        text: 'Priority support',
        negative: true,
      },
    ],
  },
  {
    plan: 'Pro',
    features: [
      {
        text: '100000 Words/Day',
      },
      {
        text: 'Unlimited Downloads',
      },
      {
        text: '50+ Templates Access',
      },
      {
        text: 'Image Generation Templates',
      },
      {
        text: 'Priority support',
      },
    ],
  },
]



const page = () => {

  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  // const { userSubscription, setUserSubscription} = useContext(UserSubscriptionContext);

  // const OnSubcription=()=>{
  //   setLoading(true);
  //    axios.post('/api/create-subscription',{}).then(resp=>{
  //     console.log(resp.data);
  //     OnPayment(resp.data.id)
  //    },(error=>{
  //     setLoading(false);
  //    }))
  // }

  // const OnPayment=(subId:string)=>{
  //   const options={
  //     "key":process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  //     "subscription_id": subId,
  //     "name":"AICreft Content Gen",
  //     description: "Monthly Subscription",
  //     handler: async(resp:any)=>{
  //       console.log(resp);
  //       if(resp)
  //       {
  //         SaveSubscription(resp?.razorpay_payment_id);
  //       }
  //       setLoading(false);
  //     }
  //   }


  // @ts-ignore
  //   const rzp = new window.Razorpay(options);
  //   rzp.open()
  // }

  // const SaveSubscription= async(paymentId:string)=>{
  //    const result = await db.insert(UserSubscription).values({
  //     email:user?.primaryEmailAddress?.emailAddress,
  //     userName:user?.fullName,
  //     active: true,
  //     paymentId:paymentId,
  //     joinDate:moment().format('DD/MM/YYYY')
  //    });
  //    console.log(result);
  //    if(result)
  //    {
  //      window.location.reload();
  //    } 
  // }
  return (
    <div className='p-8 bg-white/10 '>
      {/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */}
      <div className='flex justify-center items-center'>
        <h2 className='font-bold text-4xl pt-3 pb-0'>Join Pro Version</h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>

        {pricingItems.map(
          ({ plan, features }) => {
            const price = plan === 'Free' ? 0 : 999;
            return (
              <div
                key={plan}
                className=
                'relative rounded-2xl bg-white shadow-lg m-10 px-5 border hover:border-blue-700 '
              >
                {plan === 'Free' && (
                  <Button className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-gray-400 via-black to-gray-600 px-3 py-2 text-sm font-medium text-white items-center cursor-text'>
                    Currently Active
                  </Button>
                )}

                {plan === 'Pro' && (
                  <Button className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-300  via-black to-blue-500 px-3 py-2 text-sm font-medium text-white items-center cursor-text'>
                    Upgrade
                  </Button>
                )}

                <div className='m-8'>
                  <h3 className='my-5 text-center text-3xl font-bold'>
                    {plan}
                  </h3>
                  <p className='font-display text-center text-2xl font-semibold'>
                    ₹{price}
                  </p>
                  <p className='text-gray-500 text-center'>
                    per month
                  </p>
                </div>

                <ul className='my-10 space-y-5 px-8'>
                  {features.map(
                    ({ text, negative }) => (
                      <li
                        key={text}
                        className='flex space-x-5'>
                        <div className='flex-shrink-0 '>
                          {negative ? (
                            <Minus className='h-6 w-6 text-red-600' />
                          ) : (
                            <Check className='h-6 w-6 text-black' />
                          )}
                        </div>

                        <p>
                          {text}
                        </p>
                      </li>
                    )
                  )}
                </ul>
                <div className='border-t border-gray-200' />
                <div className='p-5 flex justify-center items-center'>
                  {plan === 'Free' ? (
                    <Link
                      href={
                        '/dashboard'
                      }
                      className='w-full mx-3'
                    >
                      <Button variant={'btn_f'} className='w-full'>Try Now</Button>
                    </Link>
                  ) : (
                    <Button disabled={loading} variant={'btn_p'} className='w-full mx-3 '> {loading && <Loader2Icon className='animate-spin' />}
                      {/* {userSubscription? 'Active Plan': 'Get Started'} */}
                      Get Started
                    </Button>
                  )
                  }
                </div>
              </div>
            )
          }
        )}

      </div>
    </div>
  )
}

export default page