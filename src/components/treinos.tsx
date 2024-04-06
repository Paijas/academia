import * as Dialog from '@radix-ui/react-dialog'
import { Exercicio } from './exercicio'
import {useState} from 'react'


interface treinosProps{
        nome:string
        
        exercicios: string[]
}
//
export function Treinos({nome, exercicios}: treinosProps){    

    return(
        <Dialog.Root > 
            <Dialog.Trigger className="bg-slate-700 flex flex-col  rounded-md outline-none py-5 px-2 overflow-hidden hover:ring-2 hover:ring-slate-600">
            <span className="font-semibold text-[24px] text-white">{nome}</span>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/50'>
                    <Dialog.Content className='overflow-hidden fixed inset-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  max-w-[640px] h-[68vh] w-full bg-slate-700 rounded-md  outline-none'>
                        <div className='py-5 px-5 '>
                            <h1 className='text-white text-[30px] font-medium '>{nome}</h1>
                            <div className='border-[1px] border-white/10'></div>
                            
                            <div className='space-y-2 my-2'>
                               {exercicios.map(ex =>( 
                               <Exercicio nome={ex}/>
                                ))} 

                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

    
