import { tourTypes } from '../../data/navigation'
import Button from '../common/Button'
import SelectField from '../common/SelectField'
import TravellersField from './TravellersField'
import locationIcon from '../../assets/icons/location.svg'
import tourTypeIcon from '../../assets/icons/tour-type.svg'
import searchIcon from '../../assets/icons/search.svg'

const radioStyle =
  'size-[18px] cursor-pointer appearance-none rounded-full border border-[#757575] bg-[#F7F7F7] checked:bg-brand checked:shadow-[inset_0_0_0_3px_white]'

export default function SearchCard() {
  return (
    <div
      className="mx-auto max-w-[1044px] animate-fade-up rounded-[14px] border border-gray-200 bg-white px-5 py-6 shadow-md sm:px-7 sm:py-[29px] xl:px-[37px]"
      style={{ animationDelay: '450ms' }}
    >
      <h2 className="text-xl font-bold leading-none text-brand-ink lg:text-[22px] xl:text-2xl 2xl:text-[28px]">
        Search your Dream Holiday
      </h2>

      <div className="mt-[18px] flex gap-7 text-sm font-medium leading-none text-[#111111] xl:text-[15px] 2xl:text-base">
        <label className="flex cursor-pointer items-center gap-2.5">
          <input type="radio" name="region" defaultChecked className={radioStyle} />
          Domestic
        </label>
        <label className="flex cursor-pointer items-center gap-2.5">
          <input type="radio" name="region" className={radioStyle} />
          International
        </label>
      </div>

      <div className="mt-[18px] flex flex-col gap-3 md:gap-4 lg:flex-row lg:gap-4 xl:gap-5">
        <div className="grid flex-1 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-[285fr_225fr_250fr] xl:gap-6">
          <label className="flex h-[53px] items-center gap-3 rounded-[10px] bg-field px-3 text-sm text-[#111111] xl:pl-[22px] xl:text-[17px] 2xl:text-xl">
            <img src={locationIcon} alt="" className="size-[18px]" />
            <input
              type="text"
              placeholder="Destination"
              className="w-full bg-transparent outline-none placeholder:text-[#111111]"
            />
          </label>

          <SelectField icon={tourTypeIcon} placeholder="Tour Type" options={tourTypes} />
          <TravellersField />
        </div>

        <Button className="h-[53px] rounded-[15px] hover:-translate-y-0.5 lg:w-[120px] lg:text-[15px] xl:w-[140px] xl:text-base 2xl:text-lg">
          Search
          <img src={searchIcon} alt="" className="size-4" />
        </Button>
      </div>
    </div>
  )
}
