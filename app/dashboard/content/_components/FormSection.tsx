'use client'
import React, { useContext, useState } from 'react'
import { Temp } from '../../_components/TemplateList'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast";
import Link from 'next/link';

interface PROPS {
  selectedTemp?: Temp ;
  userformInput: any;
  loading: boolean,
}
const FormSection = ({ selectedTemp, userformInput, loading }: PROPS) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    if(totalUsage > 10000)
    {
       return;
    }
    userformInput(formData);
  }
  const [formData, setformData] = useState<any>();
  const handleInput = (event: any) => {
    const { name, value } = event.target;
    setformData({ ...formData, [name]: value })
  }

  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  const { toast } = useToast()

  return (
    <div className='p-5 shadow-md  border rounded-lg bg-white'>
      <Image src={selectedTemp?.icon} alt='image' width={70} height={70} />
      <h2 className='font-bold text-2xl mb-2 text-cyan-800'>{selectedTemp?.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemp?.desc}</p>

      <form action="" className='mt-6' onSubmit={onSubmit}>
        {selectedTemp?.form?.map((item, index) => (

          <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
            <label htmlFor="" className='font-medium'>{item.label}</label>
            {
              item.field == 'input' ?
                <Input name={item.name} required={item.required} onChange={handleInput} />
                : item.field == 'textarea' ?
                  <Textarea name={item.name} required={item.required} onChange={handleInput} /> : null
            }
          </div>
        ))}
        <Button type='submit' className='w-full py-3' disabled={loading}  onClick={() => {
          if(totalUsage > 10000)
          {
            toast({
              title: "Credit Usage Limit Reached!.",
              description:"You've exceeded your Credits. Please upgrade your plan to continue.",
              action: <ToastAction altText="Try again" ><Link href={'/dashboard/billing'}>Upgrade</Link></ToastAction>,
            })
          }
        }}
        >
          {loading && <Loader2Icon className='animate-spin' />}
          Generate Content</Button>
      </form>
    </div>
  )
}

export default FormSection






