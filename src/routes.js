import { index, route } from '@react-router/dev/routes'

export default [
  index('components/Cardlist.jsx'),
  route('cards/:id', 'components/SingleCard.jsx'),
]
