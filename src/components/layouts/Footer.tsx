import { Link } from 'react-router'
import { DownloadImages, FooterLinks } from '../../constants'
import FooterLink from '../ui/links/FooterLink'
import ButtonDownload from '../ui/buttons/ButtonDownload'

function Footer() {
	console.log(FooterLinks)

	return (
		<footer className='w-full py-12 border-t-[2px] border-t-gray-600/50'>
			<div className='flex w-full justify-between'>
				<div>
					<img src='/images/logo.png' alt='logo' width={116} />
					<ul className='flex flex-col gap-[10px] mt-8'>
						{FooterLinks.slice(0, 5).map((item, index) => (
							<FooterLink key={index} text={item.text} link={item.link} />
						))}
					</ul>
				</div>

				<div>
					<div className='flex items-center gap-2'>
						<Link className='flex items-end gap-1 hover-text' to='/'>
							<div>Группа в вк</div>
							<img src='/icons/vk-logo.svg' />
						</Link>
						<Link className='flex items-end gap-1 hover-text' to='/'>
							<div>Канал в</div>
							<img src='/icons/tg-logo.svg' />
						</Link>
					</div>

					<ul className='flex flex-col gap-[10px] mt-8'>
						{FooterLinks.slice(5, 10).map((item, index) => (
							<FooterLink key={index} text={item.text} link={item.link} />
						))}
					</ul>
				</div>

				<div>
					<FooterLink text='Техническая поддержка' link={'/'} />
					<Link
						className='text-2xl flex items-end gap-2 mt-2 mb-8 hover-text'
						to='/'
					>
						<img src='/icons/phone-logo.svg' />
						<div>8 800 500 44 18</div>
					</Link>

					<Link className='flex items-end gap-2 mb-5 hover-text' to='/'>
						<img src='/icons/tg-logo.svg' />
						<div>Чат в Телеграм</div>
					</Link>
					<Link className='flex items-end gap-2 hover-text' to='/'>
						<img src='/icons/wa-logo.svg' />
						<div>Чат в WhatsApp</div>
					</Link>
				</div>

				<div>
					<ul className='grid grid-cols-2 gap-3'>
						{DownloadImages.map((item, index) => (
							<ButtonDownload key={index} image={item.image} link={item.link} />
						))}
					</ul>
				</div>
			</div>

			<div className='mt-18 !text-[14px]'>
				<div className='flex items-center gap-10 mb-[3px]'>
					{FooterLinks.slice(-4).map((item, index) => (
						<Link key={index} className='text-[14px] hover-text' to={item.link}>
							{item.text}
						</Link>
					))}
				</div>
				<p className=' text-text-default/60'>
					© Impuls TV. Все права защищены. Все упоминаемые товарные знаки и
					бренды являются собственностью соответствующих владельцев.
				</p>
			</div>
		</footer>
	)
}

export default Footer
