import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'react-router'
import './index.css'
import './App.css'
import Header from "./componets/Header";
import Footer from "./componets/footer";
import cards from './data/cards.json'

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amabot-showcase-gruppe4</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export async function clientLoader() {
  return cards;
}

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
