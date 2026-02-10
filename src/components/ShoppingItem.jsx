export default function ShoppingItem({title, quantity, id, setShoppingList}) {
    const handleClick = () =>{
     setShoppingList((prev) => prev.filter(item => item.id !== id))  
     console.log(id) 
    }
    return(
        <article>
            <h3>{title}</h3>
            <p>{quantity}</p>
        </article>
    )
}