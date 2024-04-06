import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HandHelping } from 'lucide-react';
import * as Select from '@radix-ui/react-select';

const options = ['Dropset','Isometrica','ResPause'];



export function Drop() {

  
  const [itemSelecionado,setItemSelecionado] = useState('')

  if(itemSelecionado === ''){
    setItemSelecionado('Padrão')
  }

  return (
  
  <Select.Root>
    <Select.Trigger value='default' className='flex justify-between w-[170px] h-10 bg-slate-900 text-10 outline-none rounded-sm p-2 placeholder: text-white'>{itemSelecionado} <ChevronDown className='text-white'/></Select.Trigger>
    <Select.Portal>
      <Select.Content className='overflow-hidden fixed inset-auto right-[606px] top-[410px] -translate-x-1/2 -translate-y-1/2  max-w-[170px] w-full bg-slate-900 rounded-md outline-none' >
        
        <Select.Viewport className='absolute bg-slate-900  rounded-md p-2 space-y-2 h-10 w-full'>
          {options.map((ex)=>(
            <Select.Item onClick={()=>{
              console.log(ex)
            }} className='cursor-pointer hover:bg-slate-800/50 '  value={ex}>{ex}</Select.Item>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
    );
}


