import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Movie from '../pages/Movie'
import VideoViewer from '../pages/VideoViewer'
import Favorites from '../pages/Favorites'

function Root() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/favorites' element={<Favorites />} />
			<Route path='/movie/:id' element={<Movie />} />
			<Route path='/player/:id' element={<VideoViewer />} />
		</Routes>
	)
}

export default Root
