// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// const store = configureStore({
// 	reducer: rootReducer,
// });

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './rootReducer';

// const store = createStore(
// 	rootReducer,
// 	composeWithDevTools(applyMiddleware(thunk)),
// );

// export default store;

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import rootReducer, { RootState } from './rootReducer';
// import { useDispatch } from 'react-redux';

// export default function configureAppStore(preloadedState: RootState) {
// 	const store = configureStore({
// 		reducer: rootReducer,
// 		middleware: [...getDefaultMiddleware()],
// 		preloadedState,
// 		enhancers: [monitorReducerEnhancer],
// 	});

// 	if (process.env.NODE_ENV !== 'production' && module.hot) {
// 		module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
// 	}
// }

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

// const round = (number: Number) => Math.round(number * 100) / 100;
// const monitorReducerEnhancer = (createStore) => (
// 	reducer,
// 	initialState,
// 	enhancer,
// ) => {
// 	const monitoredReducer = (state, action) => {
// 		const start = performance.now();
// 		const newState = reducer(state, action);
// 		const end = performance.now();
// 		const diff = round(end - start);

// 		console.log(`reducer process time::`, diff);

// 		return newState;
// 	};

// 	return createStore(monitoredReducer, initialState, enhancer);
// };

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from './rootReducer';

const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware()],
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
