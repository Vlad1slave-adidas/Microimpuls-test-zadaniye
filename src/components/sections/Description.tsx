import { formatDuration } from '../../utils/formatDuration'
import { getSeasonsText } from '../../utils/getSeasonsText'

interface DescriptionProps {
	title: string
	type: 'movie' | 'serial'
	description: string
	genres: string
	year: number
	countries: string
	seasons: number
	kinopoiskRating: number
	ageRating: number
	imdbRating: number
}

function Description({
	title,
	description,
	genres,
	year,
	countries,
	seasons,
	kinopoiskRating,
	ageRating,
	imdbRating,
	type,
}: DescriptionProps) {
	return (
		<section className='text-text-default-active flex w-full items-center justify-between pr-12 max-xl:pr-8 max-lg:pr-2 max-md:pr-0'>
			<div className='max-w-1/2'>
				<h1 className='mb-3 text-[40px] font-semibold max-xl:text-[36px] max-lg:text-[32px]'>
					{title}
				</h1>
				<p className='text-[22px] max-xl:text-xl max-lg:text-lg max-md:text-base'>
					{description}
				</p>
			</div>

			<div className='flex flex-col gap-3 text-[20px] max-xl:gap-2 max-xl:text-lg max-lg:text-[16px]'>
				<div>
					<p className='additional-text'>Жанры</p>
					<p className=''>{genres}</p>
				</div>

				<div>
					<p className='additional-text'>Производство</p>
					<p>
						<span>{year}, </span>
						<span>{countries}</span>
					</p>
				</div>

				<div className='grid grid-cols-2 gap-x-16 gap-y-3 max-xl:gap-x-12 max-lg:gap-x-8'>
					<div>
						<p className='additional-text'>Длительность</p>
						{type === 'serial' ? (
							<p>{getSeasonsText(seasons)}</p>
						) : (
							<p>{formatDuration(seasons)}</p>
						)}
					</div>

					<div>
						<p className='additional-text'>Рейтинг Кинопоиск</p>
						<div className='flex gap-2'>
							<img src='/icons/kinopoisk-logo.svg' alt='kinopoisk-logo' />
							<p>{Number(kinopoiskRating).toFixed(1)}</p>
						</div>
					</div>

					<div>
						<p className='additional-text'>Возрастной рейтинг</p>
						<p>{ageRating}+</p>
					</div>

					<div>
						<p className='additional-text'>Рейтинг Кинориум</p>
						<div className='flex gap-2'>
							<img src='/icons/kinorium-logo.svg' />
							<p className='text-[20px]'>{Number(imdbRating).toFixed(1)}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Description
