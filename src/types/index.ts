export interface MovieCardProps {
	id: number
	name: string
	year: number
	image: string
	rating: number
	provider?: 'start' | 'premier'
	ref?: React.RefObject<HTMLElement | null>
}

export interface ActorCardProps {
	id: number
	name: string
	photo: string
	ref?: React.RefObject<HTMLElement | null>
}
