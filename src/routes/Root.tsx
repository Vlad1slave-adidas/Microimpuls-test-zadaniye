import { Route, Routes, useParams } from 'react-router-dom'
import Home from '../pages/Home'
import Movie from '../pages/Movie'
import VideoPlayer from '../components/video_player/VideoPlayer'

function VideoPlayerWrapper() {
	const params = useParams()
	return <VideoPlayer id={Number(params.id)} />
}

function Root() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/movie/:id' element={<Movie />} />
			<Route path='/watch-movie/:id' element={<VideoPlayerWrapper />} />
		</Routes>
	)
}

export default Root
