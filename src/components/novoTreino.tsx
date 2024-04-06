import * as Dialog from '@radix-ui/react-dialog'
import {Drop} from './dropdowm'
import { useState } from 'react'
import { Exercicio } from './exercicio'
import { Trash, Pencil } from 'lucide-react';

interface exercicio{
    nome:string
    repeticao:string 
}


export function NovoTreino(){
    const [exercicio,setExercicio] = useState('')
    const [treinoNome,setTreinoNome] = useState('')
    const [lista,setLista] = useState([])
    const [rep,setRep] = useState('')

    function criarExercicio(){
        const exArray =[exercicio, ...lista]
        setLista(exArray)
       
    }

    function Repeticoes(event: React.ChangeEvent<HTMLInputElement>){
        setRep(event.target.value)
    }


    if(rep===''){
        setRep('3/12')
    }

    if(treinoNome===''){
        setTreinoNome('Nome do Treino')
    }

    function handleContentChanged(event: React.ChangeEvent<HTMLInputElement>){
        setExercicio(event.target.value)

    }

    function handleChanged(event: React.ChangeEvent<HTMLInputElement>){
        setTreinoNome(event.target.value)
    }



    return(
        <Dialog.Root>
        <Dialog.Trigger className="bg-transparent  flex flex-col border-2 border-dashed rounded-md outline-none py-5 px-2 overflow-hidden hover:ring-2 hover:ring-slate-600">
            <span className="font-semibold text-[24px] text-white">Novo Treino</span>
        </Dialog.Trigger>

        <Dialog.Portal>
            <Dialog.Overlay className='inset-0 fixed bg-black/50'>
                <Dialog.Content className='  fixed inset-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] h-[90vh] w-full bg-slate-800 rounded-md  outline-none'>
                    <form className='max-w-[600px] justify-center py-8 px-8 mx-auto'>
                        <h1 className='font-medium font-sans pb-2'>Nome do treino</h1>
                        <input
                        onChange={handleChanged}
                        className='w-full h-10 bg-slate-900 text-10 outline-none rounded-sm p-2 placeholder:text-slate-400/50  ' 
                        type="text" 
                        placeholder='Ex:Treino de Perna'/>
                    </form>

                    <form className='max-w-[600px] items-center -mt-2 px-8 mx-auto w-full '>
                        <h1 className='font-medium font-sans pb-2'>Adicionar exercicio</h1>
                        <div className='justify-between boder-1px border-1'>
                            <input type="text" onChange={handleContentChanged} placeholder='Ex:Cadeira Extensora' className='float-left w-[350px] mr-4 h-10 bg-slate-900 text-10 outline-none rounded-sm p-2 placeholder:text-slate-400/50 '/>
                            <input type="text" onChange={Repeticoes} className='flex justify-between w-[170px] h-10 bg-slate-900 text-10 outline-none rounded-sm p-2 placeholder:text-slate-400/50' placeholder='Repetições:3/12' />
                        </div>
                        <button type='button' onClick={criarExercicio} className='p-2 mt-3 rounded-sm bg-slate-600'>Adicionar</button>
                        <button className='bg-slate-700 w-full h-12 rounded-sm px-10 absolute bottom-0 left-1/2 -translate-x-1/2 hover:text-green-500'>Criar Treino</button>
                    </form>

                    <div className='max-w-[540px] h-[50vh] m-auto mt-10 rounded-md border-white/50 border-2' >
                        <h1 className='top-2 font-medium p-4 text-[20px] '>{treinoNome}</h1>
                        <div className='border-[1px] border-slate-400/50'/>

                        <div>
                            {lista.map((ex)=><h1 className='border-b-[1px] max-w-[600px] mt-2 mx-4 border-slate-400/50 p-2 flex justify-between'>{ex} <h1>Rep: 3/12</h1><h1 className='font-light hover:underline'>Apagar</h1></h1>)}
                        </div>
                    </div>
                        
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
        </Dialog.Root>
    )
}