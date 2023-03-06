import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent'
import { IProduct } from '../types/productTypes';

const resolverObject = {
  encode: JSON.stringify,
  decode: JSON.parse,
};

interface Product extends IProduct {
  quantity?: number;
}

export const shoppingCart = persistentAtom<Product[]>('cart', [], resolverObject);

export const total = persistentAtom<number>('total', 0, resolverObject);

export const isCartOpen = atom(false);

shoppingCart.listen((cart) => {
  total.set(cart.reduce((acc, product) => acc + (product.price * product.quantity), 0));
})

export function addProduct(product: Product) {
  const oldProduct = shoppingCart.get();
  if (oldProduct.find(item => item.id === product.id)) {
    shoppingCart.set(oldProduct.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
  } else {
    shoppingCart.set([...oldProduct, { ...product, quantity: 1 }]);
  }
}

export const removeProduct = (id: number) => {
  console.log(id);
  
  shoppingCart.set(shoppingCart.get().filter((item) => item.id !== id));
}

export const clearCart = () => {
  shoppingCart.set([]);
}

export const toggleCart = () => {
  isCartOpen.set(!isCartOpen.get());
}

export const closeCart = () => {
  isCartOpen.set(false);
}
