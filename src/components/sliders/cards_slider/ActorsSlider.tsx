import Slider from 'react-slick'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ActorCardProps } from '../../../types'
import ActorCard from '../../ui/cards/ActorCard'

function ActorsSlider({ slider }: { slider: ActorCardProps[] }) {
	const [currentSlide, setCurrentSlide] = useState<number>(0)
	const sliderRef = useRef<Slider | null>(null)

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 7,
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
			<h2 className='text-[32px] font-semibold px-px-default text-text-default-active'>
				Актеры
			</h2>
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
						<ActorCard
							key={item.id}
							id={item.id}
							name={item.name}
							photo={item.photo}
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

export default ActorsSlider
