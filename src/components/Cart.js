import { useDispatch, useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import { clearCart } from "../utils/redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return cartItems?.length === 0 ? (
    <div className="text-4xl font-semibold m-auto w-6/12 text-center">
      Cart is Empty
    </div>
  ) : (
    <div className="m-auto w-6/12">
      <div className="text-xl font-bold text-center">Cart</div>
      <div
        className="text-md text-right cursor-pointer"
        onClick={handleClearCart}
      >
        Clear Cart
      </div>
      <div className="m-auto p-4">
        <MenuItems
          itemCards={cartItems}
          page="cart"
        />
      </div>
    </div>
  );
};
export default Cart;
