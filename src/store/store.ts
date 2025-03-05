import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './slices/favoritesSlice'
import { movieApi } from '../services/movieApi'

export const store = configureStore({
	reducer: {
		favorites: favoritesReducer,
		[movieApi.reducerPath]: movieApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(movieApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
