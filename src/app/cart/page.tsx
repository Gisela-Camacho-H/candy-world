import { getCart } from "@/lib/db/cart"
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/format";

export const metadata = {
    title: "Your Cart - Candy World"
}

export default async function name() {

    const cart = await getCart();
    return(
        <div>
            <h1 className="my-6 text-center text-2xl font-bold text-warning">Shopping Cart</h1>
            {cart?.items.map((cartItem) => (
                <CartEntry 
                cartItem={cartItem} 
                key={cartItem.id} 
                setProductQuantity={setProductQuantity}
                />
            ))}
            {!cart?.items.length && <p>Your cart is empty</p>}
            <div className="flex flex-col items-end sm:items-center">
                <p className="mb-3 font-bold">
                    Total: {formatPrice(cart?.subtotal || 0)}
                </p>
                <button className="btn btn-success sm:w-[200px]">Checkout</button>
            </div>
        </div>
    )
    
}