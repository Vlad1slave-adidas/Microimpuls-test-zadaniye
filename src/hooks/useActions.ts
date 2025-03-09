import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import {
	addMovieToFavorites,
	removeMovieFromFavorites,
} from '../store/slices/favoritesSlice'

const rootActions = {
	addMovieToFavorites,
	removeMovieFromFavorites,
}

function useActions() {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions
