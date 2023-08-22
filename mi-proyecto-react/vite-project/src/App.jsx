import { useState } from 'react'
/* import './App.css' */
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar/navbar';
import ItemListContainer from './components/Navbar/Navbar/itemListContainer/itemListContainer';

function App() {

  return (
    <>
      <Navbar />
      <div>
        <ItemListContainer></ItemListContainer>
      </div>
    </>
  )
}

export default App