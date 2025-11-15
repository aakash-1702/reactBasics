import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'


function App() {
  return (
    <> 
       <h1> Movie Rating App</h1>
       <Card title="Singham"/>
       <Card title="Avengers"/>
       <Card title="Housefull"/>
       <Card title="RRR"/>
       <Card title="Thugs of Hindustan" />
    </>
  );
}

export default App
