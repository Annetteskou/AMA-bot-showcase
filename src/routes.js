import { index, route } from '@react-router/dev/routes'

export default [
  index('componets/Cardlist.jsx'),
  route('cards/:id', 'componets/SingleCard.jsx'),
]
