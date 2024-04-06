import * as Dialog from "@radix-ui/react-dialog";
import { Trash, Pencil, Plus  } from 'lucide-react';
interface exercicioProps{
    nome: string
}


export function Exercicio({nome}: exercicioProps){

    return (
        <Dialog.Root >
            <Dialog.Trigger className=" w-full" >
                <div className="flex h-14 bg-slate-500 justify-between py-4 px-3 align-middle rounded-md hover:ring-2 hover:ring-white focus-visible:ring-2  focus-visible:ring-lime-400 group">
                    <h1 className="text-white flex">{nome}</h1> 
                    <div className="flex mx-2 gap-5">
                        <Pencil className="hover:text-sky-400"/>
                        <Trash className="hover:text-red-400"/>       
                    </div>
                </div>
            </Dialog.Trigger>
        </Dialog.Root>
    )
}