import ButtonPrimary from '../../ui/buttons/ButtonPrimary'

function MoviePromo({ name }: { name: string }) {
	return (
		<section className='blue-gradient-radial my-6 flex h-[90vh] w-full items-center max-lg:my-2'>
			<div className='relative flex h-full w-full flex-col items-center justify-center gap-2 text-center text-white'>
				<h1 className='max-w-1/2 text-[40px] font-medium max-xl:text-[36px] max-lg:text-[32px]'>
					Смотрите «{name}» на других устройствах
				</h1>

				<ButtonPrimary
					text='Доступные устройства'
					style='text-[20px] px-9 py-2 mt-2 max-xl:text-lg max-lg:text-[16px]'
				/>
				<img src='/icons/finger.svg' alt='finger' className='-mt-2 ml-16' />
			</div>
		</section>
	)
}

export default MoviePromo
