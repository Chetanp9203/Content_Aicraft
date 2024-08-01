"use client"
import React, { useState } from 'react'
import SearchSec from './_components/SearchSec'
import TemplateList from './_components/TemplateList'

const page = () => {
  const [userSearch, setuserSearch] = useState<string>();
  return (
    <div>
      {/* search section */}
    <SearchSec onSearchInput  ={(value:string)=>setuserSearch(value)
    }/>

      {/* template section */}
    <TemplateList userSearch={userSearch}/>

    </div>
  )
}

export default page