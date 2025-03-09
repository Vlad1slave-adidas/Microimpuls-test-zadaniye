import { createSlice } from '@reduxjs/toolkit'
import { MovieCardProps } from '../../types'

export interface FavoritesState {
	movie: MovieCardProps[]
}

const initialState: FavoritesState = {
	movie: [],
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addMovieToFavorites: (state, action) => {
			const isExist = state.movie.some(movie => action.payload.id === movie.id)

			if (!isExist) {
				state.movie.push(action.payload)
			}
		},
		removeMovieFromFavorites: (state, action) => {
			const isExist = state.movie.some(movie => action.payload.id === movie.id)

			if (isExist) {
				const removedMovie = state.movie.findIndex(
					item => item.id === action.payload.id,
				)
				state.movie.splice(removedMovie, 1)
			}
		},
	},
})

export const { addMovieToFavorites, removeMovieFromFavorites } =
	favoritesSlice.actions

export default favoritesSlice.reducer
