import ButtonPrimary from '../../ui/buttons/ButtonPrimary'

function HeroPromo() {
	return (
		<section className='w-full h-[90vh] flex items-center blue-gradient-radial'>
			<div className='h-full  w-full flex flex-col gap-2 items-center justify-center text-white text-center'>
				<h3 className='text-2xl font-medium'>Тариф оптимальный</h3>
				<h1 className='text-[40px] font-medium max-w-1/2'>
					Телевидение, онлайн-кинотеатры START и PREMIER, записи ТВ-передач
				</h1>
				<p className='text-text-pink text-[20px]'>
					7 дней за 0 ₽, далее 349 ₽ в месяц
				</p>
				<ButtonPrimary
					text='Попробовать бесплатно'
					style='text-[20px] px-9 py-2 mt-2'
				/>
			</div>
		</section>
	)
}

export default HeroPromo
