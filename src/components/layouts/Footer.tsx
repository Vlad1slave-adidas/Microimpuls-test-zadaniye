import { Link } from 'react-router'
import { DownloadImages, FooterLinks } from '../../constants'
import FooterLink from '../ui/links/FooterLink'
import ButtonDownload from '../ui/buttons/ButtonDownload'
import { FaPhoneAlt, FaVk, FaWhatsapp } from 'react-icons/fa'
import { RiTelegram2Fill } from 'react-icons/ri'

function Footer() {
	return (
		<footer className='w-full border-t-[2px] border-t-gray-600/50 pt-12 pb-6 max-xl:pt-10 max-lg:pt-8'>
			<div className='flex w-full flex-wrap justify-between max-xl:text-[14px]'>
				<div>
					<img
						src='/images/logo.png'
						alt='logo'
						width={116}
						className='max-xl:w-[105px]'
					/>
					<ul className='mt-8 flex flex-col gap-[10px] max-lg:gap-2'>
						{FooterLinks.slice(0, 5).map((item, index) => (
							<FooterLink key={index} text={item.text} link={item.link} />
						))}
					</ul>
				</div>

				<div>
					<div className='flex items-center gap-10 max-xl:gap-6'>
						<Link className='hover-text flex items-end gap-1' to='/'>
							<div>Группа в вк</div>
							<FaVk size={27} className='max-xl:w-6' />
						</Link>
						<Link className='hover-text flex items-end gap-1' to='/'>
							<div>Канал в</div>
							<RiTelegram2Fill size={27} className='max-xl:w-6' />
						</Link>
					</div>

					<ul className='mt-8 flex flex-col gap-[10px] max-lg:gap-2'>
						{FooterLinks.slice(5, 10).map((item, index) => (
							<FooterLink key={index} text={item.text} link={item.link} />
						))}
					</ul>
				</div>

				<div>
					<FooterLink text='Техническая поддержка' link={'/'} />
					<Link
						className='hover-text mt-2 mb-8 flex items-center gap-3 text-2xl max-xl:text-xl'
						to='/'
					>
						<FaPhoneAlt size={24} className='max-xl:w-5' />
						<div>8 800 500 44 18</div>
					</Link>

					<Link className='hover-text mb-5 flex items-end gap-2' to='/'>
						<RiTelegram2Fill size={30} className='max-xl:w-6' />
						<div>Чат в Телеграм</div>
					</Link>
					<Link className='hover-text flex items-end gap-2' to='/'>
						<FaWhatsapp size={30} className='max-xl:w-6' />
						<div>Чат в WhatsApp</div>
					</Link>
				</div>

				<div className='max-lg:mt-7 max-lg:w-full'>
					<ul className='grid w-fit grid-cols-2 gap-3'>
						{DownloadImages.map((item, index) => (
							<ButtonDownload key={index} image={item.image} link={item.link} />
						))}
					</ul>
				</div>
			</div>

			<div className='mt-18 !text-[14px] max-xl:mt-15 max-xl:!text-[12px] max-lg:mt-8'>
				<div className='mb-[3px] flex items-center gap-10'>
					{FooterLinks.slice(-4).map((item, index) => (
						<Link
							key={index}
							className='hover-text text-[14px] max-xl:!text-[12px]'
							to={item.link}
						>
							{item.text}
						</Link>
					))}
				</div>
				<p className='text-text-default/60'>
					© Impuls TV. Все права защищены. Все упоминаемые товарные знаки и
					бренды являются собственностью соответствующих владельцев.
				</p>
			</div>
		</footer>
	)
}

export default Footer
