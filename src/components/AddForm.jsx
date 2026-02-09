export default function AddForm({ShoppingItem, setShoppingItem, setShoppingList }) {
    
    const handleChange = (e) => {
        const {name, value } = e.target
        setShoppingItem((prev) => ({
            ...prev,
            [name]: value
        }))
    }


const handleClick = (e)=> {
    e.preventDefault()
    const uniqId = crypto.randomUUID()
    setShoppingList((prev) => ([...prev, {id:uniqId,...ShoppingItem}]))
    console.log(ShoppingItem)
}


return (
    <form onSubmit={handleClick}>
        <label htmlFor="formtitle">Vare</label>
        <input name="title"
        type="text"
        id="formtitle"
        placeholder="Egg.."
        onChange={handleChange}
        />

        <label htmlFor = "formantall">Antall</label>
        <input name="quantity"
        type="number"
        id="formantall"
        placeholder="2"
        onChange={handleChange}
        />
        <button>Legg til vare</button>

    </form>
)
}