interface DescriptionProps {
	title: string
	description: string
	genres: string
	year: number
	countries: string
	seasons: string
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
}: DescriptionProps) {
	return (
		<section className='w-full flex justify-between items-center text-text-default-active pr-12'>
			<div className='max-w-1/2'>
				<h1 className='text-[40px] font-semibold mb-3'>{title}</h1>
				<p className='text-[22px]'>{description}</p>
			</div>

			<div className='flex flex-col gap-3'>
				<div>
					<p className='additional-text'>Жанры</p>
					<p className='text-[20px]'>{genres}</p>
				</div>

				<div>
					<p className='additional-text'>Производство</p>
					<p className='text-[20px]'>
						<span>{year}, </span>
						<span>{countries}</span>
					</p>
				</div>

				<div className='grid grid-cols-2 gap-x-16 gap-y-3'>
					<div>
						<p className='additional-text'>Длительность</p>
						<p className='text-[20px]'>{seasons}</p>
					</div>

					<div>
						<p className='additional-text'>Рейтинг Кинопоиск</p>
						<div className='flex gap-2'>
							<img src='/icons/kinopoisk-logo.svg' alt='kinopoisk-logo' />
							<p className='text-[20px]'>{kinopoiskRating}</p>
						</div>
					</div>

					<div>
						<p className='additional-text'>Возрастной рейтинг</p>
						<p className='text-[20px]'>{ageRating}+</p>
					</div>

					<div>
						<p className='additional-text'>Рейтинг Кинориум</p>
						<div className='flex gap-2'>
							<img src='/icons/kinorium-logo.svg' />
							<p className='text-[20px]'>{imdbRating}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Description
