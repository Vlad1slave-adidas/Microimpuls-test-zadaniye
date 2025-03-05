import { Link } from 'react-router'

interface FooterLinkProps {
	link: string
	text: string
}

function FooterLink({ link, text }: FooterLinkProps) {
	return (
		<Link className='text-[16px] hover-text' to={link}>
			{text}
		</Link>
	)
}

export default FooterLink
