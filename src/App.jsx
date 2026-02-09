import AddForm from "./components/AddForm"

function App() {
 
  const shoppingItems = [
    {
      id: 0, 
      title: "Melk",
      quantity: 2
    },
    {
      id: 1,
      title: "Egg", 
      quantity: 1
    }
  ]

  const [addForm, setShoppingItem] = useState()

  return (
    <main>
    <h1>Handleliste</h1>
    <AddForm shoppingItems={shoppingItems} setShoppingItem={setShoppingItem} setShoppingList={setShoppingList} />
     
    </main>
  )
}

export default App
