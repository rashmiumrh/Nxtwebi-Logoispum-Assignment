import { useRef } from 'react'
import PackageCard from './PackageCard'
import { holidayPackages } from '../../data/packages'
import SliderArrows from '../common/SliderArrows'

export default function HolidayPackages() {
  const sliderRef = useRef(null)

  function slide(direction) {
    const slider = sliderRef.current
    const cardWidth = slider.firstElementChild.offsetWidth + 16
    slider.scrollBy({ left: direction * cardWidth, behavior: 'smooth' })
  }

  return (
    <section className="pt-[108px] pb-[60px]">
      <div className="page-container">
        <div className="relative text-center">
          <h2 className="text-[30px] leading-[1.2] font-bold text-[#111111] xl:text-[34px] 2xl:text-[40px]">
            Christmas &amp; New Year Holidays
          </h2>
          <p className="mt-3 text-base leading-[1.2] text-brand-ink xl:text-[17px] 2xl:text-xl">
            Festive spirit to winter wonderlands, a breathtaking season awaits!
          </p>

          <SliderArrows
            onPrev={() => slide(-1)}
            onNext={() => slide(1)}
            className="mt-6 justify-center md:absolute md:top-[25px] md:right-0 md:mt-0"
          />
        </div>

        <div
          ref={sliderRef}
          className="-mx-2 mt-[45px] flex gap-4 overflow-x-auto px-2 pt-1 pb-4 [scrollbar-width:none] 2xl:pl-3"
        >
          {holidayPackages.map((item) => (
            <PackageCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
