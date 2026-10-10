import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { navLinks } from '../../data/navigation'
import Button from '../common/Button'
import phoneIcon from '../../assets/icons/phone.svg'
import dropdownIcon from '../../assets/icons/dropdown.svg'
import menuIcon from '../../assets/icons/menu.svg'
import closeIcon from '../../assets/icons/close.svg'
import shieldIcon from '../../assets/icons/header/shield.svg'
import headsetIcon from '../../assets/icons/header/headset.svg'

const messages = [
  {
    text: 'Trusted By 5,000+ Travellers',
    icon: shieldIcon,
    duration: 2000,
    wait: 0,
    enter: 'animate-grow-in',
  },
  {
    text: '24×7 Dedicated Support',
    icon: headsetIcon,
    duration: 3000,
    wait: 3000,
    enter: 'animate-shrink-in',
  },
]
const LEAVE_TIME = 250

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const timer = leaving
      ? setTimeout(() => {
          setMessageIndex((index) => (index + 1) % messages.length)
          setLeaving(false)
        }, LEAVE_TIME + messages[messageIndex].wait)
      : setTimeout(() => setLeaving(true), messages[messageIndex].duration - LEAVE_TIME)
    return () => clearTimeout(timer)
  }, [messageIndex, leaving])

  const message = messages[messageIndex]

  return (
    <div className="bg-white">
      <div className="page-container flex h-16 items-center justify-between gap-4 lg:h-[85px]">
        <a href="/">
          <img
            src={logo}
            alt="logoipsum"
            className="h-6 w-auto lg:ml-3 lg:h-[30px] xl:h-[34px] 2xl:h-[37px]"
          />
        </a>

        <div className="flex items-center gap-3 sm:gap-[18px]">
          <p
            key={messageIndex}
            className={`${leaving ? 'animate-shrink-out' : message.enter} mr-[85px] hidden w-[300px] items-center justify-center gap-2.5 text-lg text-[#111111] lg:flex`}
          >
            <img src={message.icon} alt="" className="size-[22px]" />
            {message.text}
          </p>

          <button
            type="button"
            className="group hidden h-[42px] w-[150px] items-center justify-center gap-2.5 rounded-[10px] border border-black bg-black text-[15px] font-medium xl:h-[45px] xl:w-[171px] xl:text-base 2xl:text-lg text-white transition-colors hover:bg-gray-800 sm:flex"
          >
            <img src={phoneIcon} alt="" className="size-3.5" />
            Contact Us
            <img
              src={dropdownIcon}
              alt=""
              className="h-[5px] w-[9px] transition-transform duration-300 group-hover:rotate-180"
            />
          </button>

          <span className="hidden h-[22px] w-0.5 bg-brand sm:block" />

          <Button className="h-10 rounded-[10px] px-4 text-sm lg:h-[46px] lg:w-[170px] lg:text-base xl:h-[51px] xl:w-[185px] xl:text-lg 2xl:w-[200px] 2xl:text-xl">
            Quick Enquire
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 hover:bg-field lg:hidden"
          >
            <img src={menuOpen ? closeIcon : menuIcon} alt="" className="size-6" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="bg-navy lg:hidden">
          <ul className="page-container py-2">
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-white/10 last:border-0">
                <a
                  href="#"
                  className="flex items-center justify-between py-3 font-bold text-white hover:text-brand"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <img src={dropdownIcon} alt="" className="h-[5px] w-[9px]" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
