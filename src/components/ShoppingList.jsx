import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({shopItem, setShoppingList}){

    return(
        <section className="list">
        {shopItem.map ((item =>  <ShoppingItem key= {item.id} item={item} setShoppingList={setShoppingList}
        />
    ))}
    </section>
    )
}