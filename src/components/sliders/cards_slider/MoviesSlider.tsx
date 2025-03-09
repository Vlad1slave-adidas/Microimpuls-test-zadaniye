import { useRef, useState, useEffect, useCallback } from 'react'
import MovieCard from '../../ui/cards/MovieCard'
import ButtonSlider from '../../ui/buttons/ButtonSlider'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MovieCardProps } from '../../../types'

interface CardsSliderProps {
	slider: MovieCardProps[]
	text: string
	additionalText: string
}

function MoviesSlider({ slider, text, additionalText }: CardsSliderProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const articleRef = useRef<HTMLElement | null>(null)
	const [scrollAmount, setScrollAmount] = useState(300)
	const [showPrevButton, setShowPrevButton] = useState(false)
	const [showNextButton, setShowNextButton] = useState(true)
	const [isHovered, setIsHovered] = useState(false)

	useEffect(() => {
		if (containerRef.current) {
			setScrollAmount(containerRef.current.offsetWidth / 1.5)
			checkScroll()
		}
	}, [])

	const checkScroll = useCallback(() => {
		if (containerRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
			setShowPrevButton(scrollLeft > 0)
			setShowNextButton(scrollLeft + clientWidth < scrollWidth)
		}
	}, [])

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.addEventListener('scroll', checkScroll)
			checkScroll()
		}

		return () => {
			if (containerRef.current) {
				containerRef.current.removeEventListener('scroll', checkScroll)
			}
		}
	}, [slider])

	const easeInOutCubic = (t: number): number => {
		return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
	}

	const smoothScroll = (
		element: HTMLDivElement,
		target: number,
		duration: number,
	) => {
		const start = element.scrollLeft
		const startTime = performance.now()

		const animateScroll = (currentTime: number) => {
			const elapsedTime = currentTime - startTime
			const progress = Math.min(elapsedTime / duration, 1) // Нормализация прогресса от 0 до 1
			const easedProgress = easeInOutCubic(progress) // Применяем функцию плавности
			element.scrollLeft = start + (target - start) * easedProgress

			if (progress < 1) {
				requestAnimationFrame(animateScroll)
			}
		}

		requestAnimationFrame(animateScroll)
	}

	const prevSlide = useCallback(() => {
		if (containerRef.current) {
			const target = containerRef.current.scrollLeft - scrollAmount
			smoothScroll(containerRef.current, target, 300)
		}
	}, [scrollAmount])

	const nextSlide = useCallback(() => {
		if (containerRef.current) {
			const target = containerRef.current.scrollLeft + scrollAmount
			smoothScroll(containerRef.current, target, 300)
		}
	}, [scrollAmount])

	return (
		<section
			className='group/section relative'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<ButtonSlider text={text} additionalText={additionalText} />

			<div
				className='relative'
				style={{ height: `${articleRef.current?.offsetHeight}px` }}
			>
				<div
					className={`shadow-cards-slider-left pointer-events-none absolute z-10 h-[110%] w-full transition-opacity duration-300 ease-in-out ${
						showPrevButton && showNextButton
							? 'opacity-100'
							: showPrevButton && isHovered
								? 'opacity-100'
								: 'opacity-0'
					}`}
				></div>

				<button
					onClick={prevSlide}
					className={`bg-blue absolute top-1/2 left-3 z-20 -translate-y-1/2 cursor-pointer rounded-full p-3 text-white transition-opacity duration-300 ease-in-out ${
						showPrevButton && showNextButton
							? 'opacity-100'
							: showPrevButton && isHovered
								? 'opacity-100'
								: 'pointer-events-none opacity-0'
					}`}
				>
					<ChevronLeft size={22} />
				</button>

				<div
					className={`shadow-cards-slider-right pointer-events-none absolute z-10 h-[110%] w-full transition-opacity duration-300 ease-in-out ${
						showPrevButton && showNextButton
							? 'opacity-100'
							: showNextButton && isHovered
								? 'opacity-100'
								: 'opacity-0'
					}`}
				></div>

				<button
					onClick={nextSlide}
					className={`bg-blue absolute top-1/2 right-3 z-20 -translate-y-1/2 cursor-pointer rounded-full p-3 text-white transition-opacity duration-300 ease-in-out ${
						showPrevButton && showNextButton
							? 'opacity-100'
							: showNextButton && isHovered
								? 'opacity-100'
								: 'pointer-events-none opacity-0'
					}`}
				>
					<ChevronRight size={22} />
				</button>

				<div className='relative w-full overflow-hidden'>
					<div
						ref={containerRef}
						className='px-px-default max-xl:px-px-xl flex w-full gap-x-10 overflow-x-hidden py-6'
					>
						{slider.map(item => (
							<div key={item.id}>
								<MovieCard
									id={item.id}
									name={item.name}
									image={item.image}
									rating={item.rating}
									year={item.year}
									provider={item.provider}
									ref={articleRef}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoviesSlider
