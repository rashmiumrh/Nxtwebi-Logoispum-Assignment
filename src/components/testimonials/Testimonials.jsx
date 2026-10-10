import { useEffect, useState } from 'react'
import TestimonialCard from './TestimonialCard'
import { testimonials } from '../../data/testimonials'

const positions = {
  '-1': { left: 'calc(50% - 950.78px)', top: 200, width: 597.33, height: 325.04, opacity: 1 },
  0: { left: 'calc(50% - 337.45px)', top: 105, width: 674.91, height: 291.1, opacity: 1 },
  1: { left: 'calc(50% + 353.45px)', top: 200, width: 597.33, height: 325.04, opacity: 1 },
  '-2': { left: 'calc(50% - 1564px)', top: 200, width: 597.33, height: 325.04, opacity: 0 },
  2: { left: 'calc(50% + 966.78px)', top: 200, width: 597.33, height: 325.04, opacity: 0 },
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = testimonials.length

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setActive((current) => (current + 1) % count), 5000)
    return () => clearInterval(timer)
  }, [paused, count])

  function offsetOf(index) {
    let offset = index - active
    if (offset > count / 2) offset -= count
    if (offset < -count / 2) offset += count
    return Math.max(-2, Math.min(2, offset))
  }

  return (
    <section className="overflow-x-clip pt-20 2xl:pt-[57px]">
      <div
        className="relative mx-auto h-[615px] max-lg:h-[560px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <h2 className="mx-auto h-[72px] w-fit text-center text-[34px] leading-[72px] font-bold text-[#181E4B] 2xl:w-[277px] 2xl:text-[40px]">
          Testimonials
        </h2>

        {testimonials.map((item, index) => {
          const offset = offsetOf(index)
          const isActive = offset === 0
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`absolute transition-all duration-500 ease-out max-lg:top-[100px]! max-lg:left-5! max-lg:h-auto! max-lg:w-[calc(100%-40px)]! ${
                isActive
                  ? 'z-10 rounded-[23.27px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]'
                  : 'cursor-pointer rounded-[23.27px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] max-lg:pointer-events-none max-lg:opacity-0!'
              }`}
              style={positions[offset]}
              aria-hidden={Math.abs(offset) > 1}
            >
              <TestimonialCard {...item} active={isActive} />
            </div>
          )
        })}

        <div className="absolute top-[598.74px] left-1/2 max-lg:top-[530px] flex -translate-x-1/2 gap-[29.2px]">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => setActive(index)}
              className={`size-[15.52px] rounded-full border-[0.97px] transition-colors duration-300 ${
                index === active
                  ? 'border-brand-ink bg-brand-ink'
                  : 'border-[#111111] hover:bg-brand/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
