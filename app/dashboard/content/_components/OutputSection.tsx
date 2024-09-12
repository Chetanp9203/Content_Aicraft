import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

import {Editor} from './QuillEditor'

export interface PROPS {
  aiOutput: string;
}

const OutputSection: React.FC<PROPS> = ({ aiOutput }) => {
  const [editorState, setEditorState] = useState(aiOutput);

  useEffect(() => {
    setEditorState(aiOutput);
  }, [aiOutput]);



  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button onClick={() => navigator.clipboard.writeText(editorState)} className="flex gap-2">
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <hr className="mx-5 border-black" />
      <div  className="mt-4 border border-gray-800 p-3">
        <Editor aiOutput={aiOutput}/>
      </div>
    </div>
  );
};

export default OutputSection;
