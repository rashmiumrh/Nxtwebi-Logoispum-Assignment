import { useRef } from 'react'
import SliderArrows from '../common/SliderArrows'
import { trendingTours } from '../../data/trendingTours'

function TourCard({ title, price, image, imagePosition, framed }) {
  return (
    <a
      href="#"
      className="@container group relative block aspect-[280/549] overflow-hidden rounded-[20px] bg-[#9FB4C7]"
    >
      {framed ? (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 size-full scale-110 object-cover blur-md"
          />
          <img
            src={image}
            alt={title}
            className="absolute top-[17.85%] left-1/2 h-[84.9%] w-auto max-w-none -translate-x-1/2 transition-transform duration-500 [mask-image:linear-gradient(to_bottom,transparent,black_22%)] group-hover:scale-105"
          />
        </>
      ) : (
        <img
          src={image}
          alt={title}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: imagePosition }}
        />
      )}

      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-black/75 via-black/35 to-transparent" />

      <div className="absolute top-[81.6%] left-[4.64cqw] text-white 2xl:top-[448px] 2xl:left-[13px]">
        <h3 className="text-[10.71cqw] leading-[13.57cqw] font-medium whitespace-nowrap 2xl:text-[30px] 2xl:leading-[38px]">
          {title}
        </h3>
        <p className="mt-[0.71cqw] h-[13.57cqw] leading-[13.57cqw] font-medium whitespace-nowrap 2xl:mt-[2px] 2xl:h-[38px] 2xl:leading-[38px]">
          <span className="text-[5.71cqw] 2xl:text-[16px]">from</span>
          <span className="text-[11.43cqw] 2xl:text-[32px]"> </span>
          <span className="text-[8.57cqw] 2xl:text-[24px]">{price}</span>
        </p>
      </div>
    </a>
  )
}

export default function TrendingTours() {
  const sliderRef = useRef(null)

  function slide(direction) {
    const slider = sliderRef.current
    const step = slider.firstElementChild.offsetWidth + 30
    slider.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <section className="pt-[11px] pb-[29px]">
      <div className="page-container">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-[30px] leading-[48px] font-bold text-[#111111] xl:text-[34px] 2xl:text-[40px]">
            Trending Tours
          </h2>
          <SliderArrows onPrev={() => slide(-1)} onNext={() => slide(1)} />
        </div>

        <ul
          ref={sliderRef}
          className="mt-[22px] flex gap-[30px] overflow-x-auto max-sm:gap-4 [scrollbar-width:none]"
        >
          {trendingTours.map((tour) => (
            <li key={tour.title} className="w-[240px] shrink-0 lg:w-[calc((100%-120px)/5)]">
              <TourCard {...tour} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
