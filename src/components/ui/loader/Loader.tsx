import { Loader2 } from 'lucide-react'

function Loader() {
	return (
		<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 animate-spin'>
			<Loader2 />
		</div>
	)
}

export default Loader
