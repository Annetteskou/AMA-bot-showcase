import { Routes, Route } from 'react-router'
import './App.css'
import Header from "./componets/Header";
import Footer from "./componets/footer";
import Cardlist from "./componets/Cardlist";
import SingleCard from "./componets/SingleCard";
import cards from "./data/cards.json";

export default function App() {

  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Cardlist cards={cards} />} />
        <Route path="/cards/:id" element={<SingleCard cards={cards} />} />
      </Routes>
      <Footer />
    </main>
  )
}
