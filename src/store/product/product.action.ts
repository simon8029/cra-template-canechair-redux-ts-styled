import {
	Product,
	AddProductAction,
	DeleteProductAction,
	GetProductByIdAction,
	GetProductsAction,
	UpdateProductAction,
	ADD_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT,
	GET_PRODUCT_BY_ID,
	GET_PRODUCTS,
} from './product.types';

// export function addProduct(newProduct: Product): AddProductAction {
// 	return {
// 		type: ADD_PRODUCT,
// 		payload: newProduct,
// 	};
// }

// export function updateProduct(newProduct: Product): UpdateProductAction {
// 	return {
// 		type: UPDATE_PRODUCT,
// 		payload: newProduct,
// 	};
// }

// export function deleteProduct(productId: string): DeleteProductAction {
// 	return {
// 		type: DELETE_PRODUCT,
// 		payload: productId,
// 	};
// }

// export function getProductById(productId: string): GetProductByIdAction {
// 	return {
// 		type: GET_PRODUCT_BY_ID,
// 		payload: productId,
// 	};
// }

// export function getProducts(productId: string): GetProductsAction {
// 	return {
// 		type: GET_PRODUCTS,
// 	};
// }

import axios from 'axios';

export function getAllProductsStart(newProduct) {
	return (dispatch) => {
		axios.get(`${process.env.REACT_APP_END_POINT_BASEURL}/Products`).then(
			(res) => {
				if (res.status === 200) {
					dispatch(getAllProductsSuccess(res.data));
				}
			},
			(err) => {
				dispatch(getAllProductsFailure(err));
			},
		);
	};
}

const getAllProductsSuccess = (data) => {
	return {
		type: ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS,
		payload: data,
	};
};
const getAllProductsFailure = (error) => {
	return {
		type: ProductActionTypes.GET_ALL_PRODUCTS_FAILURE,
		payload: error,
	};
};

export function addNewProductStart(newProduct) {
	return (dispatch) => {
		axios.post(`${BaseUrl}/Products`, newProduct).then(
			(res) => {
				if (res.status === 201) {
					dispatch(addNewProductSuccess(res.data));
				}
			},
			(err) => {
				dispatch(addNewProductFailure(err));
			},
		);
	};
}

const addNewProductSuccess = (data) => {
	return {
		type: ProductActionTypes.ADD_NEW_PRODUCT_SUCCESS,
		payload: data,
	};
};
const addNewProductFailure = (error) => {
	return {
		type: ProductActionTypes.ADD_NEW_PRODUCT_FAILURE,
		payload: error,
	};
};

export function deleteProductStart(id) {
	return (dispatch) => {
		axios.delete(`${BaseUrl}/Products/${id}/`).then(
			(res) => {
				if (res.status === 200) {
					dispatch(deleteProductSuccess(id));
				}
			},
			(err) => {
				dispatch(deleteProductFailure(err));
			},
		);
	};
}

const deleteProductSuccess = (data) => {
	return {
		type: ProductActionTypes.DELETE_PRODUCT_SUCCESS,
		payload: data,
	};
};
const deleteProductFailure = (error) => {
	return {
		type: ProductActionTypes.DELETE_PRODUCT_FAILURE,
		payload: error,
	};
};

export function updateProductStart(id, newProduct) {
	return (dispatch) => {
		axios.put(`${BaseUrl}/Products/${id}/`, newProduct).then(
			(res) => {
				if (res.status === 200) {
					dispatch(updateProductSuccess(res.data));
				}
			},
			(err) => {
				dispatch(updateProductFailure(err));
			},
		);
	};
}

const updateProductSuccess = (newProduct) => {
	return {
		type: ProductActionTypes.UPDATE_PRODUCT_SUCCESS,
		payload: newProduct,
	};
};
const updateProductFailure = (error) => {
	return {
		type: ProductActionTypes.UPDATE_PRODUCT_FAILURE,
		payload: error,
	};
};

export default {
	getAllProductsStart,
	addNewProductStart,
	deleteProductStart,
	updateProductStart,
};

import axios from 'axios';
import * as TodoActionTypes from './todoActionTypes';

export function getAllTodosStart() {
	return (dispatch) => {
		axios.get(`${process.env.REACT_APP_END_POINT_BASEURL}/Todos`).then(
			(res) => {
				if (res.status === 200) {
					dispatch(getAllTodosSuccess(res.data));
				}
			},
			(err) => {
				dispatch(getAllTodosFailure(err));
			},
		);
	};
}

const getAllTodosSuccess = (data) => {
	return {
		type: TodoActionTypes.GET_ALL_TODOS_SUCCESS,
		payload: data,
	};
};
const getAllTodosFailure = (error) => {
	return {
		type: TodoActionTypes.GET_ALL_TODOS_FAILURE,
		payload: error,
	};
};

export function addNewTodoStart(newTodo) {
	return (dispatch) => {
		axios
			.post(`${process.env.REACT_APP_END_POINT_BASEURL}/Todos`, newTodo)
			.then(
				(res) => {
					if (res.status === 201) {
						dispatch(addNewTodoSuccess(res.data));
					}
				},
				(err) => {
					dispatch(addNewTodoFailure(err));
				},
			);
	};
}

const addNewTodoSuccess = (data) => {
	return {
		type: TodoActionTypes.ADD_NEW_TODO_SUCCESS,
		payload: data,
	};
};
const addNewTodoFailure = (error) => {
	return {
		type: TodoActionTypes.ADD_NEW_TODO_FAILURE,
		payload: error,
	};
};

export function deleteTodoStart(id) {
	return (dispatch) => {
		axios
			.delete(`${process.env.REACT_APP_END_POINT_BASEURL}/Todos/${id}/`)
			.then(
				(res) => {
					if (res.status === 200) {
						dispatch(deleteTodoSuccess(id));
					}
				},
				(err) => {
					dispatch(deleteTodoFailure(err));
				},
			);
	};
}

const deleteTodoSuccess = (data) => {
	return {
		type: TodoActionTypes.DELETE_TODO_SUCCESS,
		payload: data,
	};
};
const deleteTodoFailure = (error) => {
	return {
		type: TodoActionTypes.DELETE_TODO_FAILURE,
		payload: error,
	};
};

export function updateTodoStart(id, newTodo) {
	return (dispatch) => {
		axios
			.put(`${process.env.REACT_APP_END_POINT_BASEURL}/Todos/${id}/`, newTodo)
			.then(
				(res) => {
					if (res.status === 200) {
						dispatch(updateTodoSuccess(res.data));
					}
				},
				(err) => {
					dispatch(updateTodoFailure(err));
				},
			);
	};
}

const updateTodoSuccess = (newTodo) => {
	return {
		type: TodoActionTypes.UPDATE_TODO_SUCCESS,
		payload: newTodo,
	};
};
const updateTodoFailure = (error) => {
	return {
		type: TodoActionTypes.UPDATE_TODO_FAILURE,
		payload: error,
	};
};

export default {
	getAllTodosStart,
	addNewTodoStart,
	deleteTodoStart,
	updateTodoStart,
};
