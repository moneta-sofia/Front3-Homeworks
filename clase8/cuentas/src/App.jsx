import { useState } from 'react'
import './App.css'
import { Disponibles } from './Components/Disponibles'
import { Seguidos } from './Components/seguidos'

const usuarios = [
  { id: "1", nombre: "john", edad: 25, email: "john@egbert.com"},
  { id: "2", nombre: "rose", edad: 27, email: "rose@lalonde.com"},
  { id: "3", nombre: "dave", edad: 25, email: "dave@strider.com"},
  { id: "4", nombre: "jade", edad: 28, email: "jade@harley.com"},
  { id: "5", nombre: "karkat", edad: 29, email: "karkat@vantas.com"},
  { id: "6", nombre: "tavros", edad: 31, email: "tavros@nitram.com"},
  { id: "7", nombre: "sollux", edad: 35, email: "sollux@captor.com"},
  { id: "8", nombre: "nepeta", edad: 32, email: "nepeta@leijon.com"},
  { id: "9", nombre: "kanaya", edad: 45, email: "kanaya@maryam.com"},
  { id: "10", nombre: "terezi", edad: 52, email: "terezi@pyrope.com"},
  { id: "11", nombre: "tavros", edad: 21, email: "vriska@serket.com"},
  { id: "12", nombre: "equius", edad: 18, email: "equius@zahhak.com"},
  { id: "13", nombre: "gamzee", edad: 18, email: "gamzee@makara.com"},
  { id: "14", nombre: "eridan", edad: 32, email: "eridan@ampora.com"},
  { id: "15", nombre: "feferi", edad: 34, email: "feferi@peixes.com"},
  { id: "16", nombre: "aradia", edad: 33, email: "aradia@medigo.com"},
]

function App() {

const [seguidos, setSeguidos] = useState([])
const [sugeridos, setSugeridos] = useState(usuarios)

function handleFollow(id){

  if(!seguidos.includes(seguidos.id)){
    setSeguidos([...seguidos,...sugeridos.filter(s => s.id === id)])
    setSugeridos(sugeridos.filter(sugerido => sugerido.id !== id))
  }

}

function handleUnfollow(id){
  if(!sugeridos.includes(sugeridos.id)){
    setSugeridos([...sugeridos, ...seguidos.filter(s => s.id === id)])
    setSeguidos(seguidos.filter(seguido => seguido.id !== id))
  }
}

  return (
    <>

    <Disponibles usuarios={sugeridos} functionFollow={handleFollow}/>
    <Seguidos seguidos ={seguidos} functionUnfollow={handleUnfollow}/>
    </>
  )
}

export default App
