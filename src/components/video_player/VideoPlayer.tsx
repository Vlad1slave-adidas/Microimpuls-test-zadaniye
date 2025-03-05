import '@vidstack/react/player/styles/base.css'
import {
	MediaPlayer,
	MediaPlayerInstance,
	MediaProvider,
} from '@vidstack/react'
import { useRef } from 'react'

interface VideoPlayerProps {
	id: any
}

function VideoPlayer({ id }: VideoPlayerProps) {
	const ref = useRef<MediaPlayerInstance>(null)

	console.log(id)

	// const { data, isLoading, isError } = useWatchMovieQuery({ movie_id: id })

	// console.log('🚀 ~ VideoPlayer ~ data:', data)

	// if (isLoading) return <Loader />
	// if (isError) return <div>Error fetching movies</div>

	return (
		<MediaPlayer ref={ref} title='Sprite Fight' autoPlay src={id}>
			<MediaProvider />
		</MediaPlayer>
	)
}

export default VideoPlayer

// import {
// 	MediaPlayer,
// 	MediaProvider,
// 	MediaPoster,
// 	MediaControls,
// 	MediaPlayButton,
// 	MediaMuteButton,
// 	MediaTime,
// 	MediaVolume,
// 	MediaProgress,
// 	MediaFullscreenButton,
// } from '@vidstack/react'

// interface VideoPlayerProps {
// 	src: string
// 	poster?: string
// }

// export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
// 	return (
// 		<div className='w-full max-w-3xl mx-auto p-4'>
// 			<MediaPlayer className='relative w-full aspect-video bg-black rounded-lg overflow-hidden'>
// 				<MediaProvider>
// 					<video slot='media' src={src} className='w-full h-full' />
// 				</MediaProvider>
// 				{poster && <MediaPoster className='absolute inset-0' src={poster} />}
// 				<MediaControls className='absolute bottom-0 w-full p-3 bg-black/50 flex items-center gap-3'>
// 					<MediaPlayButton className='text-white' />
// 					<MediaMuteButton className='text-white' />
// 					<MediaTime type='current' className='text-white text-sm' />
// 					<MediaProgress className='flex-1' />
// 					<MediaTime type='duration' className='text-white text-sm' />
// 					<MediaVolume className='w-20' />
// 					<MediaFullscreenButton className='text-white' />
// 				</MediaControls>
// 			</MediaPlayer>
// 		</div>
// 	)
// }
