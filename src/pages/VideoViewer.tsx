import { useParams } from 'react-router'
import Header from '../components/layouts/Header'
import VideoPlayer from '../components/video_player/VideoPlayer'

function VideoViewer() {
	const { id } = useParams()
	return (
		<div className='px-px-default max-xl:px-px-xl max-lg:px-px-lg flex h-screen w-full flex-col'>
			<Header />
			<VideoPlayer id={id as string} />
		</div>
	)
}

export default VideoViewer
