import './App.css'
import {useState} from "react"
import AddForm from "./components/AddForm"
import ShoppingList from "./components/ShoppingList"



function App() {
 
  const shopItem = [
    {
      id: 0, 
      title: "Melk",
      quantity: 2,
      selected: false

    },
    {
      id: 1,
      title: "Egg", 
      quantity: 1,
      selected: true
    }
  ]

  const [shoppingList, setShoppingList] = useState(shopItem)

  return (
    <main>
    <h1>Handleliste</h1>
    <AddForm shoppingList={shoppingList} setShoppingList={setShoppingList} />
    <ShoppingList shopItem={shoppingList} setShoppingList={setShoppingList} />
    </main>
  )
}

export default App
