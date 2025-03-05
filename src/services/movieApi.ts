import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = import.meta.env.VITE_API_URL
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const API_KEY = import.meta.env.VITE_API_KEY

export const movieApi = createApi({
	reducerPath: 'movie',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: builder => ({
		getMovies: builder.query<any, void>({
			query: () => ({
				url: `/tvmiddleware/api/noauth/selection/detail/`,
				params: {
					selection_id: 124661,
					compact: 1,
					device: 'browser',
					client_id: CLIENT_ID,
					api_key: API_KEY,
				},
			}),
		}),
		getMovie: builder.query<any, any>({
			query: ({ movie_id }) => ({
				url: `/tvmiddleware/api/noauth/video/detail/`,
				params: {
					vid: movie_id,
					device: 'browser',
					client_id: CLIENT_ID,
					api_key: API_KEY,
				},
			}),
		}),
		watchMovie: builder.query<any, any>({
			query: ({ movie_id }) => ({
				url: `/tvmiddleware/api/noauth/video/url/`,
				params: {
					vfid: movie_id,
					device: 'browser',
					client_id: CLIENT_ID,
					api_key: API_KEY,
				},
			}),
		}),
	}),
})

export const { useGetMoviesQuery, useGetMovieQuery, useWatchMovieQuery } =
	movieApi
