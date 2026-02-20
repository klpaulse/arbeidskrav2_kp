export default function ShoppingItem({item, setShoppingList}) {
   
    function toggleSelected (){
        setShoppingList(prev => 
            prev.map(i =>
                i.id === item.id ? { ...i, selected: !i.selected} : i
            )
        )
    }

    function updateQuantity(newQuantity) {
        setShoppingList(prev =>
            prev.map(i=>
                i.id === item.id? { ...i, quantity: Math.max(1, newQuantity)}
                :i
            )
        )
    }
    return(
    <article className ="vare">

        <input
        name="title"
        type="checkbox"
        checked={item.selected}
        onChange={toggleSelected} />
         <h3>{item.title}</h3>
        
        <input className="right"
        name="quantity"
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) => updateQuantity (Number(e.target.value))} />

    </article>
)

}