import { BookHeart, Download, Menu, Search, UserCircle2 } from 'lucide-react'
import ButtonNav from '../ui/buttons/ButtonNav'
import ButtonPrimary from '../ui/buttons/ButtonPrimary'
import ButtonSecondary from '../ui/buttons/ButtonSecondary'
import { NavigationData } from '../../constants'
import { useState } from 'react'
import Sidebar from './Sidebar'

function Header() {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<header className='flex w-full items-center justify-between py-4'>
			<nav className='flex items-center gap-6 max-2xl:gap-4 max-xl:gap-3'>
				<img
					className='mr-4 max-xl:w-24'
					src='/images/logo.png'
					alt='logo'
					height={32}
					width={116}
				/>
				<div className='flex items-center gap-6 max-2xl:gap-4 max-xl:gap-3'>
					{NavigationData.map((item, index) => (
						<ButtonNav key={index} text={item.text} link={item.link} />
					))}
					<Search
						className='hover-text max-xl:h-[18px] max-xl:w-[18px]'
						width={22}
						height={22}
					/>
				</div>
			</nav>
			<div className='flex items-center gap-5 max-2xl:gap-4 max-xl:gap-3 max-lg:hidden'>
				<ButtonNav
					icon={
						<BookHeart
							width={30}
							height={30}
							className='max-xl:h-6 max-xl:w-6'
						/>
					}
					link='/favorites'
				/>
				<ButtonPrimary text='7 дней за 1 ₽' />
				<ButtonSecondary
					text='Установить'
					icon={
						<Download
							width={20}
							height={20}
							className='max-xl:h-[18px] max-xl:w-[18px]'
						/>
					}
				/>
				<ButtonSecondary
					text='Войти'
					icon={
						<UserCircle2
							width={20}
							height={20}
							className='max-xl:h-[18px] max-xl:w-[18px]'
						/>
					}
				/>
			</div>
			<Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
			<button onClick={toggleSidebar} className='hover-text lg:hidden'>
				<Menu className='hover-text h-6 w-6' />
			</button>
		</header>
	)
}

export default Header
