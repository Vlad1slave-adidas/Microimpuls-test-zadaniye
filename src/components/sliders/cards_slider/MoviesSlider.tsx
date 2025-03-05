import Slider from 'react-slick'
import MovieCard from '../../ui/cards/MovieCard'
import ButtonSlider from '../../ui/buttons/ButtonSlider'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MovieCardProps } from '../../../types'

interface CardsSliderProps {
	slider: MovieCardProps[]
	text: string
	additionalText: string
}

function MoviesSlider({ slider, text, additionalText }: CardsSliderProps) {
	const [currentSlide, setCurrentSlide] = useState<number>(0)
	const sliderRef = useRef<Slider | null>(null)

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		draggable: false,
		arrows: false,
		initialSlide: 1,
		slidesToScroll: 1,
		centerMode: true,

		beforeChange: (_oldIndex: number, newIndex: number) =>
			setCurrentSlide(newIndex),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<section className='group'>
			<ButtonSlider text={text} additionalText={additionalText} />
			<div className='relative slider-container '>
				<div className='absolute w-full h-full z-10 shadow-cards-slider pointer-events-none'></div>
				<button
					onClick={() => {
						if (currentSlide === 0) {
							sliderRef.current?.slickGoTo(slider.length - 1)
						} else {
							sliderRef?.current?.slickPrev()
						}
					}}
					className='absolute top-1/2 left-3 -translate-y-1/2 z-20 text-white bg-blue p-3 rounded-full  cursor-pointer '
				>
					<ChevronLeft size={22} />
				</button>
				<Slider ref={sliderRef} {...settings}>
					{slider.map(item => (
						<MovieCard
							key={item.id}
							id={item.id}
							name={item.name}
							image={item.image}
							rating={item.rating}
							year={item.year}
							provider={item.provider}
						/>
					))}
				</Slider>
				<button
					onClick={() => {
						sliderRef?.current?.slickNext()
					}}
					className='absolute top-1/2 right-3 -translate-y-1/2 z-20 text-white bg-blue p-3 rounded-full cursor-pointer '
				>
					<ChevronRight size={22} />
				</button>
			</div>
		</section>
	)
}

export default MoviesSlider
