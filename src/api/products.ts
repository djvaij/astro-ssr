import { IProduct, IGetProductsResponse } from '../types/productTypes';

const URL = 'https://dummyjson.com/products';
// const URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  const response = await fetch(URL);
  const data: IGetProductsResponse = await response.json();
  return data;
}

export const getProductById = async (id: string) => {
  const response = await fetch(`${URL}/${id}`);
  const data: IProduct = await response.json();
  return data;
}