import { Star } from 'lucide-react'
import { useState } from 'react'

function ButtonFavorites() {
	const [isFilled, setIsFilled] = useState<boolean>(false)

	const handleAddToFavorites = () => {
		setIsFilled(!isFilled)
	}

	return (
		<button
			onClick={handleAddToFavorites}
			className='bg-blue rounded-full p-3 cursor-pointer'
		>
			<Star fill={isFilled ? '#fff' : ''} />
		</button>
	)
}

export default ButtonFavorites
