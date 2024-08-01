"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { Temp } from '../../_components/TemplateList'
import Template from '@/app/(data)/Template'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '../../../utils/AImodel'
import { db } from '../../../utils/Db'
import { AIOutput } from '../../../utils/Schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'

import { useRouter } from 'next/router'
// import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { UpdateCuContext } from '@/app/(context)/UpdateCuContext'



interface PROPS {
  params: {
    'template-slug': any,
  }
  
}

const create_content = (props: PROPS) => {


  const { user } = useUser();
  const selectedTemp: Temp | any = Template?.find((item) => item.slug == props.params['template-slug']);


  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  // const { userSubscription, setUserSubscription} = useContext(UserSubscriptionContext);
  const {updateCusage,setUpCusage}= useContext(UpdateCuContext);

  // const router =useRouter();
  
  /**
   * 
   * @param formData 
   * @returns 
   */
  
  const GenerateAicontent = async (formData: any) => {

    setLoading(true);
    const SelectedPrompt = selectedTemp?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + "," + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt);

    setAiOutput(result?.response.text());

    console.log(selectedTemp?.name);
    
    await SaveIndb(formData, selectedTemp?.slug, result?.response.text(), selectedTemp?.name);
    setLoading(false);
    setUpCusage(Date.now())
  }
   
  const value = "default";
  const SaveIndb = async (formData: any, slug: any, aiResp: string, name:string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData ?? value,
      templateSlug: slug,
      aiResponse: aiResp ?? value,
      createdBy: user?.primaryEmailAddress?.emailAddress ?? value,
      createdAT: moment().format('DD/MM/YYYY'),
      name:name ?? value, 
    });
    console.log(result);

  }



  return (

    <div className='p-5 bg-white/10 h-screen '>
      <Link href={"/dashboard"}>
        <Button > <ArrowLeft /> Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        {/* form-section */}
        <FormSection selectedTemp={selectedTemp} userformInput={(v: any) => GenerateAicontent(v)
        } loading={loading} />
        {/* output-section */}
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />

        </div>
      </div>
    </div>
  )
}

export default create_content