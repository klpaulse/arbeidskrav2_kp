import AddForm from "./components/AddForm"

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
    <AddForm shoppingItems={shoppingList} 
    setShoppingItem={setShoppingList} setShoppingList={setShoppingList} />
     
    </main>
  )
}

export default App
