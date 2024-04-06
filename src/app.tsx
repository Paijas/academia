import { NovoTreino } from "./components/novoTreino";

import {Treinos } from './components/treinos'

const treinoPeito={
  nome: 'Peito e Triceps',
  ficha:[
    "Peito",
    "Supino Vert",
    "Voador",
    "Tríceps Corda",
    "Tríceps Testa Alta",
    "Elevação Lateral",
    "Desenvolvimento",
    "Ombro Polia",
  ],
}
const treinoPerna={
  nome:'Perna ',
  ficha:["Agachamento",
  "Leg Press",
  "Cadeira Extensora",
  "Mesa Flexora",
  "Leg Curl",
  "Elevação de Gêmeos",
  "Cadeira Flexora Isométrica",
  "Panturrilha em Pé",]
}
const treinoCostas={
  nome:'Costas e Biceps',
  ficha:["Levantamento Terra",
  "Remada Curvada com Barra",
  "Remada Invertida",
  "Puxada Alta Frontal",
  "Puxada Alta Traseira",
  "Rosca Bíceps Barra",
  "Rosca Bíceps Halteres",
  "Rosca Martelo"]
}


export function App() {
  return (
    <div className='mx-auto max-w-3xl bg my-12 space-y-6'>
  

      <form className='w-full'>
        <input 
        
        type="text"   
        placeholder='Busque seus treinos...' 
        className='w-full bg-transparent text-3xl font-semibold tracking-tigh placeholder: outline-none placeholder: text-white'
        />
      </form>

      <div className='h-px bg-white'/>

      <div className='grid grid-cols-3   auto-rows-[300px] gap-6'>
        <NovoTreino/>
        <Treinos nome={treinoPeito.nome} exercicios={treinoPeito.ficha}/> 
        <Treinos nome={treinoPerna.nome} exercicios={treinoPerna.ficha}/> 
        <Treinos nome={treinoCostas.nome} exercicios={treinoCostas.ficha}/> 
      </div>
    </div>
  )
}