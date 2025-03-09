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
		<div className='absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 opacity-0 transition-all duration-200 ease-linear group-hover:opacity-100'>
			<button
				onClick={() => {
					if (currentSlide === 0) {
						sliderRef.current?.slickGoTo(slider.length - 1)
					} else {
						sliderRef?.current?.slickPrev()
					}
				}}
				className='cursor-pointer text-white opacity-0 transition-all duration-200 ease-linear group-hover:opacity-100'
			>
				<ChevronLeft size={22} />
			</button>

			<div className='flex gap-3'>
				{slider.map((_, index) => (
					<button
						key={index}
						onClick={() => sliderRef.current?.slickGoTo(index)}
						className={`bg-paging h-[5px] rounded-lg transition-all duration-250 ${
							currentSlide === index
								? 'w-[81px] max-lg:w-[70px]'
								: 'w-[32px] max-lg:w-[20px]'
						}`}
					>
						{currentSlide === index && (
							<div
								className={`h-full rounded-lg bg-white transition-all ${
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
				className='cursor-pointer text-white opacity-0 transition-all duration-200 ease-linear group-hover:opacity-100'
			>
				<ChevronRight size={22} />
			</button>
		</div>
	)
}

export default Paging
