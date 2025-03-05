import ButtonPrimary from '../../ui/buttons/ButtonPrimary'

function MoviePromo({ name }: { name: string }) {
	return (
		<section className='w-full h-[90vh] flex items-center blue-gradient-radial'>
			<div className='relative h-full w-full flex flex-col gap-2 items-center justify-center text-white text-center'>
				<h1 className='text-[40px] font-medium max-w-1/2'>
					Смотрите «{name}» на других устройствах
				</h1>

				<ButtonPrimary
					text='Доступные устройства'
					style='text-[20px] px-9 py-2 mt-2'
				/>
				<img src='/icons/finger.svg' alt='finger' className='ml-16 -mt-2' />
			</div>
		</section>
	)
}

export default MoviePromo
