import ButtonPrimary from '../../ui/buttons/ButtonPrimary'

function HomePromo() {
	return (
		<section className='blue-gradient-radial my-6 flex h-[90vh] w-full items-center max-lg:my-2'>
			<div className='flex h-full w-full flex-col items-center justify-center gap-2 text-center text-white'>
				<h3 className='text-2xl font-medium max-xl:text-[22px] max-lg:text-xl'>
					Тариф оптимальный
				</h3>
				<h1 className='max-w-1/2 text-[40px] font-medium max-xl:text-[36px] max-lg:text-[32px]'>
					Телевидение, онлайн-кинотеатры START и PREMIER, записи ТВ-передач
				</h1>
				<p className='text-text-pink text-[20px] max-xl:text-[18px] max-lg:text-[16px]'>
					7 дней за 0 ₽, далее 349 ₽ в месяц
				</p>
				<ButtonPrimary
					text='Попробовать бесплатно'
					style='text-[20px] px-9 py-2 mt-2 max-xl:text-lg max-lg:text-[16px]'
				/>
			</div>
		</section>
	)
}

export default HomePromo
