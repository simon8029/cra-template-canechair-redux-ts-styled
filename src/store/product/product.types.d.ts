export const GET_ALL_PRODUCTS_START = 'GET_ALL_PRODUCTS_START';
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
export const GET_ALL_PRODUCTS_FAILURE = 'GET_ALL_PRODUCTS_FAILURE';
export const ADD_NEW_PRODUCT_START = 'ADD_NEW_PRODUCT_START';
export const ADD_NEW_PRODUCT_SUCCESS = 'ADD_NEW_PRODUCT_SUCCESS';
export const ADD_NEW_PRODUCT_FAILURE = 'ADD_NEW_PRODUCT_FAILURE';
export const DELETE_PRODUCT_START = 'DELETE_PRODUCT_START';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
export const UPDATE_PRODUCT_START = 'UPDATE_PRODUCT_START';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

export interface Product {
	id: string;
	name: string;
	price: number;
	description: string;
}

export interface ProductState {
	products: Product[];
}

export interface AddNewProductAction {
	type: typeof ADD_NEW_PRODUCT_SUCCESS;
	payload: Product;
}
export interface UpdateProductAction {
	type: typeof UPDATE_PRODUCT;
	payload: Product;
}

export interface DeleteProductAction {
	type: typeof DELETE_PRODUCT;
	payload: string;
}

export interface GetProductByIdAction {
	type: typeof GET_PRODUCT_BY_ID;
	payload: string;
}

export interface GetProductsAction {
	type: typeof GET_PRODUCTS;
}

export type ProductAction =
	| AddProductAction
	| UpdateProductAction
	| DeleteProductAction
	| GetProductByIdAction
	| GetProductsAction;
