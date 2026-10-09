import { Outlet, useLoaderData } from 'react-router'
import './App.css'
import Header from "./componets/Header";
import Footer from "./componets/footer";

export default function App() {
  const cards = useLoaderData();

  return (
    <main className="app">
      <Header cards={cards} />
      <Outlet />
      <Footer />
    </main>
  )
}
