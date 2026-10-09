import { useState } from 'react'
import './App.css'
import Header from "./componets/Header";

export default function App() {

  return (
    <main className="app">
      <header>
        <h1>AMA-bot showcase</h1>
        <p>Meet the people behind the project</p>
      </header>
      <Routes>
        <Route path="/" element={<Cardlist cards={cards} />} />
        <Route path="/cards/:id" element={<SingleCard cards={cards} />} />
      </Routes>
    </main>
  )
}
