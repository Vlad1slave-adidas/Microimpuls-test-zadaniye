import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/audio.css'
import '@vidstack/react/player/styles/default/layouts/video.css'

import { useRef } from 'react'
import {
	MediaPlayer,
	MediaPlayerInstance,
	MediaProvider,
	Poster,
} from '@vidstack/react'
import {
	DefaultVideoLayout,
	defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default'
import { RUSSIAN } from './TranslationRussia'

const API_URL = import.meta.env.VITE_API_URL
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const API_KEY = import.meta.env.VITE_API_KEY

interface VideoPlayerProps {
	id: string
	name?: string
	poster?: string
}

function VideoPlayer({ id, name, poster }: VideoPlayerProps) {
	const videoUrl = `${API_URL}/tvmiddleware/api/noauth/video/url/?vfid=${id}&device=browser&client_id=${CLIENT_ID}&api_key=${API_KEY}`

	const ref = useRef<MediaPlayerInstance>(null)

	return (
		<div className='flex flex-1 items-center justify-center'>
			<div className='aspect-video w-[80%]'>
				<MediaPlayer
					ref={ref}
					src={videoUrl}
					viewType='video'
					streamType='on-demand'
					logLevel='warn'
					crossOrigin
					autoPlay
					playsInline
					title={name}
					className='h-full w-full rounded-lg shadow-lg'
				>
					<MediaProvider />
					<Poster className='vds-poster' src={poster} alt={`${name} poster`} />
					<DefaultVideoLayout
						colorScheme='system'
						translations={RUSSIAN}
						icons={defaultLayoutIcons}
					/>
				</MediaPlayer>
			</div>
		</div>
	)
}

export default VideoPlayer
