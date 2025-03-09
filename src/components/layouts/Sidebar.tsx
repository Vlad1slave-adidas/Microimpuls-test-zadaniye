import { BookHeart, Download, UserCircle2, X } from 'lucide-react'
import ButtonNav from '../ui/buttons/ButtonNav'
import ButtonPrimary from '../ui/buttons/ButtonPrimary'
import ButtonSecondary from '../ui/buttons/ButtonSecondary'

interface SidebarProps {
	isOpen: boolean
	onClose: () => void
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
	return (
		<div
			className={`bg-most-dark-purple fixed top-0 right-0 z-50 h-full w-52 transform shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<button onClick={onClose} className='absolute top-4 right-4 p-2'>
				<X width={20} height={20} />
			</button>
			<div className='mt-10 flex flex-col gap-4 p-8'>
				<ButtonSecondary
					text='Войти'
					icon={<UserCircle2 width={20} height={20} />}
				/>
				<ButtonNav
					text='Избранное'
					icon={<BookHeart width={20} height={20} />}
					link='/favorites'
				/>

				<ButtonSecondary
					text='Установить'
					icon={<Download width={20} height={20} />}
				/>
				<ButtonPrimary text='7 дней за 1 ₽' />
			</div>
		</div>
	)
}

export default Sidebar
