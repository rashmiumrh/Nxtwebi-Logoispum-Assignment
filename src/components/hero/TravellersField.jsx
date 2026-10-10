import { useRef, useState } from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import Button from '../common/Button'
import clockIcon from '../../assets/icons/clock.svg'

const counterButton =
  'grid size-8 place-items-center rounded-full border border-gray-300 text-lg leading-none text-[#111111] transition-colors hover:border-brand hover:bg-brand/15 disabled:cursor-not-allowed disabled:opacity-40'

function Counter({ label, hint, value, min, onChange }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <div>
        <p className="text-base font-bold text-[#111111]">{label}</p>
        <p className="text-xs text-gray-500">{hint}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(value - 1)}
          disabled={value <= min}
          className={counterButton}
        >
          −
        </button>
        <span className="w-5 text-center text-base font-bold">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          disabled={value >= 9}
          className={counterButton}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default function TravellersField() {
  const [open, setOpen] = useState(false)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(1)
  const fieldRef = useRef(null)

  useClickOutside(fieldRef, () => setOpen(false))

  return (
    <div ref={fieldRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-[53px] w-full items-center gap-3 rounded-[10px] bg-field px-3 text-left text-sm text-[#111111] xl:pl-[22px] xl:text-[17px] 2xl:text-xl"
      >
        <img src={clockIcon} alt="" className="size-[18px]" />
        <span className="truncate">
          {adults} Adult - {children} Children
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-20 mt-2 w-full min-w-[270px] animate-dropdown rounded-xl border border-gray-100 bg-white px-5 py-3 shadow-lg">
          <Counter
            label="Adult"
            hint="12 years and above"
            value={adults}
            min={1}
            onChange={setAdults}
          />
          <div className="border-t border-gray-100" />
          <Counter
            label="Children"
            hint="2 – 11 years"
            value={children}
            min={0}
            onChange={setChildren}
          />
          <Button className="mt-2 h-10 w-full rounded-lg text-base" onClick={() => setOpen(false)}>
            Done
          </Button>
        </div>
      )}
    </div>
  )
}
