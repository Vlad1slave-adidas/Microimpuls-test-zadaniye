import { Link } from 'react-router'

interface FooterLinkProps {
	link: string
	text: string
}

function FooterLink({ link, text }: FooterLinkProps) {
	return (
		<Link className='hover-text max-xl:text-[14px]' to={link}>
			{text}
		</Link>
	)
}

export default FooterLink
