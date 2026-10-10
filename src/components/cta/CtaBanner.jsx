import Button from '../common/Button'
import adventureMap from '../../assets/adventure-map.png'
import adventurePath from '../../assets/adventure-path.svg'

export default function CtaBanner() {
  return (
    <section className="pt-[79px] pb-20 2xl:pb-[292px]">
      <div className="page-container">
        <div className="relative overflow-hidden rounded-[20px] border border-brand bg-linear-to-r from-[#0C3E4B] to-[#2D2958] px-8 pt-10 pb-10 text-white lg:h-[293px] lg:px-16 lg:pt-[50px] lg:pb-0 2xl:px-[107px]">
          <p className="text-lg leading-[1.2] font-medium xl:text-xl 2xl:text-2xl">Need Help?</p>
          <h2 className="mt-2 text-[28px] leading-[1.2] font-bold xl:text-[32px] 2xl:text-4xl">
            Stuck Planning Your Trip?
          </h2>
          <p className="mt-2.5 text-lg leading-[1.2] xl:text-xl 2xl:text-2xl">
            We’ve got it covered. Our travel experts design it all for you.
          </p>
          <Button className="mt-6 h-[51px] w-[200px] rounded-[10px] border border-brand text-xl font-bold! hover:-translate-y-0.5">
            Get Started
          </Button>

          <div className="pointer-events-none absolute top-3 right-8 hidden w-[240px] lg:block xl:w-[290px] 2xl:right-[72px] 2xl:w-[334.14px]">
            <img src={adventureMap} alt="" className="w-full" />
            <img src={adventurePath} alt="" className="absolute inset-0 size-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
