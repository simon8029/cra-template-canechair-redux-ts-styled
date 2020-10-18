import { productReducer } from './product/product.reducer';
import { shoppingCartReducer } from './shoppingCart/reducer';
import { orderReducer } from './order/reducer';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	product: productReducer,
	order: orderReducer,
	shoppingCart: shoppingCartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
