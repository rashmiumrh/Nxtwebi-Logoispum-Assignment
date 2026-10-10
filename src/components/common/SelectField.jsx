import { useRef, useState } from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import selectArrowIcon from '../../assets/icons/select-arrow.svg'
import checkIcon from '../../assets/icons/check.svg'

export default function SelectField({ icon, placeholder, options }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')
  const fieldRef = useRef(null)

  useClickOutside(fieldRef, () => setOpen(false))

  function chooseOption(option) {
    setSelected(option)
    setOpen(false)
  }

  return (
    <div ref={fieldRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-[53px] w-full items-center gap-3 rounded-[10px] bg-field px-3 text-left text-sm text-[#111111] xl:pl-[22px] xl:text-[17px] 2xl:text-xl"
      >
        <img src={icon} alt="" className="size-[18px]" />
        <span className="flex-1 truncate">{selected || placeholder}</span>
        <img
          src={selectArrowIcon}
          alt=""
          className={`h-[6px] w-[12px] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul className="absolute left-0 top-full z-20 mt-2 w-full animate-dropdown overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-lg">
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                onClick={() => chooseOption(option)}
                className={`flex w-full items-center justify-between px-5 py-2.5 text-left text-sm transition-colors xl:text-[15px] 2xl:text-base hover:bg-brand/15 ${
                  option === selected ? 'font-bold text-brand-ink' : 'text-[#111111]'
                }`}
              >
                {option}
                {option === selected && <img src={checkIcon} alt="" className="size-4" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
