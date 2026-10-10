import arrowLeftIcon from '../../assets/icons/arrow-left.svg'
import arrowRightIcon from '../../assets/icons/arrow-right.svg'

const arrowButton =
  'size-[46.29px] rounded-full bg-white shadow-[0_3.09px_1.54px_rgba(0,0,0,0.1)] transition hover:bg-brand/15'

export default function SliderArrows({ onPrev, onNext, className = '' }) {
  return (
    <div className={`flex gap-[15.42px] ${className}`}>
      <button type="button" aria-label="Previous" onClick={onPrev} className={arrowButton}>
        <img src={arrowLeftIcon} alt="" className="size-full" />
      </button>
      <button type="button" aria-label="Next" onClick={onNext} className={arrowButton}>
        <img src={arrowRightIcon} alt="" className="size-full" />
      </button>
    </div>
  )
}
