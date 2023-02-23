import { IProduct, IGetProductsResponse } from './productTypes';

const URL = 'https://dummyjson.com/products';
// const URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  const response = await fetch(URL);
  const data: IGetProductsResponse = await response.json();
  return data;
}