import Header from './components/Header'
import Footer from './components/Footer'
import ItemList from './components/Itemlist'
import './App.css'

function App() {
  const items = [
    { id: 1, name: 'React Book', price: 29.99, inStock: true },
    { id: 2, name: 'Vite Sticker', price: 2.99, inStock: false },
    { id: 3, name: 'Netlify Hat', price: 19.99, inStock: true },
  ]

  const showItems = items.length > 0

  return (
    <div className="App">
      <Header />
      {showItems ? <ItemList items={items} /> : <p>No items available.</p>}
      <Footer />
    </div>
  )
}
export default App
