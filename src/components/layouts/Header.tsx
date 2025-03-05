import { Download, Search, UserCircle2 } from 'lucide-react'
import ButtonNav from '../ui/buttons/ButtonNav'
import ButtonPrimary from '../ui/buttons/ButtonPrimary'
import ButtonSecondary from '../ui/buttons/ButtonSecondary'
import { NavigationData } from '../../constants'

function Header() {
	return (
		<header className='flex w-full py-4 justify-between items-center'>
			<nav className='flex items-center gap-6'>
				<img
					className='mr-4'
					src='/images/logo.png'
					alt='logo'
					height={32}
					width={116}
				/>
				{NavigationData.map((item, index) => (
					<ButtonNav key={index} text={item.text} link={item.link} />
				))}
				<Search className='hover-text' width={22} height={22} />
			</nav>
			<div className='flex items-center gap-5'>
				<ButtonPrimary text='7 дней за 1 ₽' />
				<ButtonSecondary
					text='Установить'
					icon={<Download width={20} height={20} />}
				/>
				<ButtonSecondary
					text='Войти'
					icon={<UserCircle2 width={20} height={20} />}
				/>
			</div>
		</header>
	)
}

export default Header
