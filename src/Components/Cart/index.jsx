import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context';
import AsideMenu from '../AsideMenu';
import OrderItem from '../OrderItem';

const Cart = () => {
  const { cartProducts, isCartOpen, closeCart, discount } =
    useContext(AppContext);

  const totalPrice = parseFloat(
    cartProducts
      .reduce((total, product) => total + parseFloat(product.precio), 0)
      .toFixed(2)
  );

  const applyDiscount = (discount, price) => {
    let finalPrice = null;
    if (discount !== 0) {
      finalPrice = (price - price * discount).toFixed(2);
    }
    return finalPrice;
  };

  return (
    <AsideMenu
      isOpen={isCartOpen}
      closeMenu={closeCart}
      title={'Carrito de Compras'}
    >
      <div className='px-6 overflow-y-scroll flex-1'>
        {cartProducts.map((product) => (
          <OrderItem
            key={product.id}
            product={product}
            // handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='p-6'>
        <p className={discount ? 'text-red-500 font-medium' : 'hidden'}>
          Tienes un cupón de descuento aplicado ¡Disfrútalo!
        </p>
        <p className='flex justify-between items-center gap-4 mb-2'>
          <span className='font-light grow'>Total:</span>
          <span
            className={
              (discount ? 'line-through text-red-700 ' : 'font-medium ') +
              'text-2xl'
            }
          >
            ${totalPrice}
          </span>
          <span className={discount ? 'font-medium text-2xl' : 'hidden'}>
            ${applyDiscount(discount, totalPrice)}
          </span>
        </p>
        <Link to='/my-orders/last'>
          <button
            className='bg-black py-3 text-white w-full rounded-lg'
            // onClick={() => {
            //   if (!signOut) handleCheckout();
            //   closeCheckoutSideMenu();
            // }}
          >
            Comprar
          </button>
        </Link>
      </div>
    </AsideMenu>
  );
};

export default Cart;
