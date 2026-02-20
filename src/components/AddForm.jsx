import { useState} from "react"
export default function AddForm({shoppingList, setShoppingList}) {
 
const [name, setName] = useState("")
const[quantity, setQuantity] = useState("")
const [error, setError] = useState("")

    const handleClick = (e) => {
        e.preventDefault()

       if (!name || !quantity){
        setError("Fyll inn vare og antall")
        return
       }

       const newItem = {
        id: crypto.randomUUID(),
        title: name, 
        quantity: Number(quantity),
        selected: false
       }

       setShoppingList(prev => [newItem, ...prev])
       setName("")
       setQuantity("")
        
    }




return (
    <>
    <form className="addform" onSubmit={handleClick}>
        <label htmlFor="formtitle">Vare</label>
        <input name="title"
        type="text"
        id="formtitle"
        value={name}
        placeholder="Egg.."
        onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor = "formantall">Antall</label>
        <input name="quantity"
        type="number"
        id="formantall"
        placeholder="2"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(e.target.value)}
        />
        <button className="leggtil">Legg til vare</button>

    </form>
    {error && <p style={{ color: "red" }}>{error}</p>}
    </>
)
}