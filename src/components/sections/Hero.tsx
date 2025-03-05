import { Link } from 'react-router'
import { SliderDataItem } from '../sliders/hero_slider/HeroSlider'
import ButtonWatchMovie from '../ui/buttons/ButtonWatchMovie'
import ButtonFavorites from '../ui/buttons/ButtonFavorites'

function Hero({
	id,
	name,
	kinopoiskRating,
	year,
	genre,
	backgroundImage,
	isMoviePage,
	description,
}: SliderDataItem) {
	return (
		<section className='transition-transform duration-75 relative w-full h-[75vh] flex justify-between items-center '>
			<div
				className={`text-text-default-active flex flex-col  text-center text-xl gap-6 ${
					isMoviePage ? 'items-start' : 'items-center px-16'
				}`}
			>
				<h1
					className={`text-6xl max-w-[450px] ${isMoviePage ? 'text-left' : ''}`}
				>
					{name}
				</h1>
				<div className='flex items-center gap-4 '>
					<div className='flex items-center gap-2'>
						<img
							src='/icons/kinopoisk-logo.svg'
							alt='kinopoisk-logo'
							width={22}
						/>
						<div>{kinopoiskRating}</div>
					</div>
					<div>{year}</div>
					<div>{genre.split(',').slice(0, 1)}</div>
					{/* Здесь я не нашел данные по запросу в тз ( */}
					<div>Сериал</div>
					<div>6+</div>
				</div>

				{isMoviePage && (
					<div className='max-w-[55%] text-start flex flex-col gap-6'>
						<p>{description}</p>
						<Link className='-mb-2 text-text-pink' to='/'>
							Тариф Много кино — 7 дней за 1 ₽
						</Link>
					</div>
				)}

				<div className='flex items-center gap-3'>
					<ButtonWatchMovie
						id={id}
						text='Смотреть сериал'
						style='py-[10px] text-xl px-16'
					/>

					{isMoviePage && <ButtonFavorites />}
				</div>
			</div>
			<div
				className='absolute right-0 -z-10 w-4/5 h-full ml-auto hero-effects bg-cover bg-center'
				style={
					{
						'--bg-img': `url(${backgroundImage})`,
					} as React.CSSProperties
				}
			></div>
		</section>
	)
}

export default Hero
