import Slider from 'react-slick'
import { useState, useRef } from 'react'
import Paging from './Paging'
import Hero from '../../sections/Hero'

export interface SliderDataItem {
	id: number
	name: string
	backgroundImage: string
	kinopoiskRating: number
	year: number
	genre: string
	description?: string
	isMoviePage?: boolean
}

export interface MainSliderProps {
	slider: SliderDataItem[]
}

function HeroSlider({ slider }: MainSliderProps) {
	const [currentSlide, setCurrentSlide] = useState<number>(0)
	const sliderRef = useRef<Slider | null>(null)

	const settings = {
		infinite: true,
		speed: 350,
		draggable: false,
		slidesToScroll: 1,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		arrows: false,
		dots: false,
		beforeChange: (_oldIndex: number, newIndex: number) =>
			setCurrentSlide(newIndex),
	}

	return (
		<div className='slider-container relative group'>
			<Slider ref={sliderRef} {...settings}>
				{slider.map(item => (
					<Hero
						key={item.id}
						id={item.id}
						name={item.name}
						backgroundImage={item.backgroundImage}
						kinopoiskRating={item.kinopoiskRating}
						year={item.year}
						genre={item.genre}
					/>
				))}
			</Slider>

			<Paging
				slider={slider}
				sliderRef={sliderRef}
				currentSlide={currentSlide}
			/>
		</div>
	)
}

export default HeroSlider
