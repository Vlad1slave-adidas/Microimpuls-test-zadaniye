import { Link } from 'react-router'

interface ButtonDownloadProps {
	image: string
	link: string
}

function ButtonDownload({ image, link }: ButtonDownloadProps) {
	return (
		<Link to={link}>
			<img
				src={image}
				className='max-xl:w-[150px]'
				alt='download-icon'
				width={180}
			/>
		</Link>
	)
}

export default ButtonDownload
