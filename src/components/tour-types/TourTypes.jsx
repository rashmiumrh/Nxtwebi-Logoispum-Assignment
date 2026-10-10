import { useRef } from 'react'
import SliderArrows from '../common/SliderArrows'
import { tourTypeCards } from '../../data/tourTypes'

export default function TourTypes() {
  const sliderRef = useRef(null)

  function slide(direction) {
    const slider = sliderRef.current
    const step = slider.firstElementChild.offsetWidth + 30
    slider.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <section className="py-20 max-sm:py-12">
      <div className="page-container">
        <div className="relative">
          <h2 className="text-[30px] leading-[1.2] font-bold text-[#111111] max-sm:pr-[115px] max-sm:text-[26px] xl:text-[34px] 2xl:text-[40px]">
            Choose Tour Types
          </h2>
          <p className="mt-0.5 text-lg leading-[30px] text-brand-ink max-sm:mt-3 xl:text-xl 2xl:text-2xl">
            These popular destinations have a lot to offer
          </p>

          <SliderArrows
            onPrev={() => slide(-1)}
            onNext={() => slide(1)}
            className="mt-6 max-sm:absolute max-sm:-top-2 max-sm:right-0 max-sm:mt-0 md:absolute md:top-[29.7px] md:right-0 md:mt-0"
          />
        </div>

        <ul
          ref={sliderRef}
          className="mt-[34px] flex gap-[30px] overflow-x-auto max-sm:mt-6 max-sm:gap-4 [scrollbar-width:none]"
        >
          {tourTypeCards.map((tour) => (
            <li key={tour.name} className="w-[240px] shrink-0 xl:w-[250px] 2xl:w-[280px]">
              <a
                href="#"
                className="group flex h-[203px] flex-col items-center bg-[#F8F5EA] pt-[51px] transition-colors duration-300 hover:bg-[#F1EBD5]"
              >
                <img
                  src={tour.icon}
                  alt=""
                  className="size-[60px] object-contain transition-transform duration-300 group-hover:-translate-y-1"
                />
                <span className="mt-3 text-lg leading-[30px] font-medium text-brand-ink">
                  {tour.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
