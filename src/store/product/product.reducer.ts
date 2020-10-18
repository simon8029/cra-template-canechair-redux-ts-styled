import {
	ADD_PRODUCT,
	DELETE_PRODUCT,
	GET_PRODUCT_BY_ID,
	ProductAction,
	ProductState,
	UPDATE_PRODUCT,
} from './product.types';

const initialState: ProductState = { products: [] };

export function productReducer(
	state = initialState,
	action: ProductAction,
): ProductState {
	switch (action.type) {
		case ADD_PRODUCT: {
			return {
				products: [...state.products, action.payload],
			};
		}

		case DELETE_PRODUCT: {
			return {
				products: state.products.filter(
					(product) => product.id !== action.payload,
				),
			};
		}

		case UPDATE_PRODUCT: {
			return {
				...state,
				products: state.products.map((product) => {
					if (product.id !== action.payload.id) {
						return product;
					}

					return {
						...product,
						...action.payload,
					};
				}),
			};
		}

		case GET_PRODUCT_BY_ID: {
			return { sdfds };
		}

		default:
			return state;
	}
}
