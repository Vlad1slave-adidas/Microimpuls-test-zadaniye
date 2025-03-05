import Slider from 'react-slick'
import { MainSliderProps } from './HeroSlider'
import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PagingProps extends MainSliderProps {
	sliderRef: React.RefObject<Slider | null>
	currentSlide: number
}

function Paging({ slider, sliderRef, currentSlide }: PagingProps) {
	const [isFilling, setIsFilling] = useState<boolean>(false)

	useEffect(() => {
		setIsFilling(true)
	}, [currentSlide])

	return (
		<div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex duration-200 ease-linear transition-all items-center gap-2 opacity-0 group-hover:opacity-100'>
			<button
				onClick={() => {
					if (currentSlide === 0) {
						sliderRef.current?.slickGoTo(slider.length - 1)
					} else {
						sliderRef?.current?.slickPrev()
					}
				}}
				className='duration-200 ease-linear text-white transition-all cursor-pointer opacity-0 group-hover:opacity-100'
			>
				<ChevronLeft size={22} />
			</button>

			<div className='flex gap-3'>
				{slider.map((_, index) => (
					<button
						key={index}
						onClick={() => sliderRef.current?.slickGoTo(index)}
						className={`h-[5px] rounded-lg bg-paging transition-all duration-250 ${
							currentSlide === index ? 'w-[81px]' : 'w-[32px]'
						}`}
					>
						{currentSlide === index && (
							<div
								className={`bg-white h-full rounded-lg transition-all ${
									isFilling ? 'animate-fill-out-the-slide' : ''
								}`}
							></div>
						)}
					</button>
				))}
			</div>

			<button
				onClick={() => {
					if (currentSlide === slider.length - 1) {
						sliderRef.current?.slickGoTo(0)
					} else {
						sliderRef?.current?.slickNext()
					}
				}}
				className='duration-200 ease-linear text-white transition-all cursor-pointer opacity-0 group-hover:opacity-100'
			>
				<ChevronRight size={22} />
			</button>
		</div>
	)
}

export default Paging
