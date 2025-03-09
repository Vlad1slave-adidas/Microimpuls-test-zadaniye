import { Link } from 'react-router'
import { SliderDataItem } from '../sliders/hero_slider/HeroSlider'
import ButtonWatchMovie from '../ui/buttons/ButtonWatchMovie'
import ButtonFavorites from '../ui/buttons/ButtonFavorites'
import { getSeasonsText } from '../../utils/getSeasonsText'
import { formatDuration } from '../../utils/formatDuration'

function Hero({
	id,
	name,
	fileId,
	type,
	kinopoiskRating,
	year,
	genre,
	seasons,
	backgroundImage,
	isMoviePage,
	ageRating,
	imdbRating,
	thumbnail,
	provider,
	description,
}: SliderDataItem) {
	return (
		<section className='relative flex h-[76vh] w-full items-center justify-between shadow-[inset_80px_0_60px_-3px_rgba(6,9,25,1)] transition-transform duration-75'>
			{isMoviePage && (
				<div className='absolute top-2 left-0 flex gap-x-2 text-lg max-lg:text-base'>
					<span className='hover-text cursor-pointer'>
						{type === 'movie' ? 'Фильмы' : 'Сериалы'}
					</span>
					<span>/</span>
					<span className='hover-text cursor-pointer'>
						{genre.split(',').slice(0, 1)}
					</span>
					<span>/</span>
					<span className='hover-text cursor-pointer'>{name}</span>
				</div>
			)}

			<div
				className={`text-text-default-active flex flex-col gap-6 text-center text-xl max-xl:gap-5 max-lg:gap-4 ${
					isMoviePage ? 'items-start' : 'items-center px-16'
				}`}
			>
				<h1
					className={`max-w-[450px] text-6xl max-xl:text-5xl max-md:text-4xl ${isMoviePage ? 'text-left' : ''}`}
				>
					{name}
				</h1>
				<div className='flex items-center gap-4 max-xl:gap-3 max-xl:text-lg max-md:text-base'>
					<div className='flex items-center gap-2'>
						<img src='/icons/kinopoisk-logo.svg' alt='kinopoisk-logo' />
						<div>{kinopoiskRating}</div>
					</div>
					{isMoviePage && (
						<div className='flex items-center gap-2'>
							<img src='/icons/IMDB-logo.svg' alt='kinopoisk-logo' />
							<div>{imdbRating}</div>
						</div>
					)}

					<div>{year}</div>
					<div>{genre.split(',').slice(0, 1)}</div>
					<div>{`${type === 'movie' ? 'Фильм' : 'Сериал'}`}</div>
					{isMoviePage && type === 'serial' ? (
						<div className='text-[20px]'>
							{seasons && getSeasonsText(seasons)}
						</div>
					) : (
						<div className='text-[20px]'>
							{seasons && formatDuration(seasons)}
						</div>
					)}
					<div>{ageRating}+</div>
				</div>

				{isMoviePage && (
					<div className='flex max-w-[55%] flex-col gap-6 text-start max-lg:text-base'>
						<p>{description}</p>
						<Link className='text-text-pink -mb-2' to='/'>
							Тариф Много кино — 7 дней за 1 ₽
						</Link>
					</div>
				)}

				<div className='flex items-center gap-3'>
					{isMoviePage ? (
						<ButtonWatchMovie
							text={`Смотреть ${type === 'serial' ? 'сериал' : 'фильм'}`}
							style='py-[10px] max-xl:text-lg  text-xl px-16 max-lg:px-12 max-lg:py-2'
							link={`/player/${fileId}`}
						/>
					) : (
						<ButtonWatchMovie
							text='Смотреть сериал'
							style='py-[10px] max-xl:text-lg  max-lg:px-12 max-lg:py-2 text-xl px-16'
							link={`/movie/${id}`}
						/>
					)}

					{isMoviePage && (
						<ButtonFavorites
							id={id}
							name={name}
							image={thumbnail}
							rating={imdbRating}
							year={year}
							provider={provider}
						/>
					)}
				</div>
			</div>
			<div
				className='hero-effects absolute right-0 -z-10 ml-auto h-full w-4/5 bg-cover bg-center'
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
