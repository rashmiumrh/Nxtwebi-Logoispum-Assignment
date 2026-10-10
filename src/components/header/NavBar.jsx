import { navLinks } from '../../data/navigation'
import dropdownIcon from '../../assets/icons/dropdown.svg'

export default function NavBar() {
  return (
    <nav className="hidden bg-navy shadow-[0_1px_0_#051036] lg:block">
      <div className="page-container">
        <ul className="flex h-[50px] w-[94.6%] items-start justify-between pt-3 2xl:w-auto 2xl:justify-start 2xl:gap-[105px]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href="#"
                className="group relative flex h-6 items-center gap-[7px] text-[15px] font-bold whitespace-nowrap text-white transition-colors duration-300 hover:text-brand xl:text-lg 2xl:text-xl"
              >
                {link.label}
                {link.hasDropdown && (
                  <img
                    src={dropdownIcon}
                    alt=""
                    className="h-[5px] w-[9px] transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
                <span className="absolute inset-x-0 -bottom-1.5 h-0.5 scale-x-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
