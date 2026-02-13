export default function ShoppingItem({item, setShoppingList}) {
   
    function toggleSelected (){
        setShoppingList(prev => 
            prev.map(i =>
                i.id === item.id ? { ...i, selected: !i.selected} : i
            )
        )
    }

    
    return(
        <article>
            <input
            name="title"
            type="checkbox"
            
            checked={item.selected}
            onChange={toggleSelected} />
            <h3>{item.title}</h3>
            <p>{item.quantity}</p>
            
        </article>
    )
}