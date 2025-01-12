import Player from 'lottie-react';
import classicCupAnimationData from '@/assets/animations/classic-cup.json';
import ContestCard from '@/components/classic/ContestCard';


function ClassicBlitz() {
  return (
    <div className=" w-full flex flex-col">

      <div className="bg-[#252A32] min-h-[300px] flex w-full justify-center overflow-hidden pb-12">
        <div className='flex flex-col justify-center items-center '>
          <Player
            autoplay
            loop
            animationData={classicCupAnimationData}
            style={{ height: '200px', width: '250px', marginBottom: 0 }}
          />
          <label className='text-xl font-semibold font-mono'>BLITZ CLASSIC CONTEST</label>
        </div>
      </div>

      <div className='flex-col w-full flex lg:flex-row items-center justify-center gap-5 relative top-[-25px]'>
        <ContestCard />
        <ContestCard />
      </div>

    </div>
  )
}

export default ClassicBlitz