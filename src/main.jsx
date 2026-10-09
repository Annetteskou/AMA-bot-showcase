import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Cardlist from './componets/Cardlist.jsx'
import SingleCard, { NotFound } from './componets/SingleCard.jsx'
import cards from './data/cards.json'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    loader: () => cards,
    children: [
      { index: true, loader: () => cards, Component: Cardlist },
      {
        path: 'cards/:id',
        loader: ({ params }) => {
          const card = cards.find(c => c.id === params.id);
          if (!card) throw new Response('Person blev ikke fundet', { status: 404 });
          return card;
        },
        Component: SingleCard,
        ErrorBoundary: NotFound,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
