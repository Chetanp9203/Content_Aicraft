import Template from '@/app/(data)/Template'
import React, { useEffect, useState } from 'react'
import TempCard from './TempCard'


export interface Temp {
  name: string | any,
  desc: string | any,
  icon: string | any,
  category: string |any,
  slug: string |any,
  aiPrompt: string |any,
  form?: FORM[],
}

export interface FORM {
  label: string,
  field: string,
  name: string,
  required?: boolean,
}
const TemplateList = ({ userSearch }: any) => {

  const [Templist, setTemplist] = useState(Template)
  useEffect(() => {
    if (userSearch) {
      const filterData = Template.filter(item =>item.name.toLowerCase().includes(userSearch.toLowerCase()));
      setTemplist(filterData);
    }   
    else {
      setTemplist(Template);
    }
  }, [userSearch])

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 bg-white'>
      {Templist.map((item: Temp, index:number) => (
        <TempCard {...item} key={index} />
      ))}
    </div>
  )
}

export default TemplateList