import React, { useEffect, useRef } from 'react'

import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

export interface PROPS {
  aiOutput: string | any;
}
const OutputSection = ({ aiOutput }: PROPS) => {
  // const editorRef: any = useRef();

  // useEffect(() => {
  //   const editorInstance = editorRef.current.getInstance();
  //   editorInstance.setMarkdown(aiOutput);
  // }, [aiOutput])
 

   {/* <Editor
        ref={editorRef}
        initialValue="Your result will display here!"
        // previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())
        }
      /> */}


  return (
    <div className='p-5 shadow-md  border rounded-lg bg-white'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button onClick={() => navigator.clipboard.writeText(aiOutput)} className='flex gap-2'><Copy className='w-4 h-4' /> Copy </Button>
      </div>
       <hr className='mx-5 border-black ' />
      <div contentEditable="true" className='py-5 px-3 m-5 border border-gray-500'>
          {aiOutput}
      </div>
    </div>
  )
}

export default OutputSection