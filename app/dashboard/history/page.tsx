//   'use client'
import { useEffect, useState } from 'react';
import Template from '@/app/(data)/Template';
import { db } from '../../utils/Db';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import Image from 'next/image';
import { AIOutput } from '../../utils/Schema';
import { Temp } from '../_components/TemplateList';
import { Button } from '@/components/ui/button';



export interface HISTORY {
  id: Number;
  formData: string | null;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAT: string | null;
  name: string | null;
}

// const GetIcon = (slug : string) => {
//   const template: Temp | any = Template?.find((item)=>item.icon== item.slug)
//   return template;
// }

const GetIcon = (slug: string) => {
  const template: Temp | any = Template?.find((item) => item.slug === slug);
  return template;
};

import React from 'react'


const page = async () => {

  const user = await currentUser();
  const emailAddress = user?.primaryEmailAddress?.emailAddress ?? 'default@example.com';

  const Historylist: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, emailAddress))
    .orderBy(desc(AIOutput.id));



  return (
    <div className='p-5 border rounded-lg bg-white '>
      <h2 className='font-bold text-3xl'>History</h2>
      <p className='text-gray-500'> Search your previously generated content</p>
      <div className='grid grid-cols-7 font-bold bg-secondary py-5 my-3 px-0.5'>
        <h2 className='col-span-2'>Template</h2>
        <h2 className='col-span-2'>AI Resp</h2>
        <h2 className='hidden md:block'>Date</h2>
        <h2 className='col-span-1'>Words</h2>
        <h2 className='md:col-auto'>Copy</h2>
      </div>
      <div>

        {Historylist.map((item: HISTORY, index: number) => (
          <>
            <div key={index} className='grid grid-cols-7 my-3 py-3 px-0.5 text-sm items-center'>
              <h2 className='col-span-2  flex gap-2 p-3'>
                <Image className='' src={GetIcon(item?.templateSlug)?.icon} width={30} height={30} alt={GetIcon(item.templateSlug)?.name}></Image>
                <p className='text-center font-medium hidden md:block'>{GetIcon(item?.templateSlug)?.name}</p>
              </h2>
              <h2 className='col-span-2 line-clamp-1 text-gray-500'>  <span className={`hidden md:block`}>{item?.aiResponse}</span>
                  <span className={`block md:hidden`}>
                    {item?.aiResponse}
                  </span> </h2>
              <h2 className='hidden md:block px-1'>{item?.createdAT}</h2>
              <h2>{item.aiResponse?.length}</h2>
              <h2>
                <Button variant={"outline"} className='text-black ' > Copy</Button>
              </h2>

            </div>
            <hr />
          </>

        ))}
      </div>


    </div>
  )
}

export default page




