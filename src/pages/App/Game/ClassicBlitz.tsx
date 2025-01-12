import Player from 'lottie-react';
import classicCupAnimationData from '@/assets/animations/classic-cup.json';
import ContestCard from '@/components/classic/ContestCard';
import OldContestList from '@/components/classic/OldContestList';
import ClassicRanking from '@/components/classic/ClassicRanking';



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
        <ContestCard name='Weekly Classic Blitz' img='https://leetcode.com/_next/static/images/weekly-default-553ede7bcc8e1b4a44c28a9e4a32068c.png' />
        <ContestCard name='Daily Unranked Blitz' img='https://leetcode.com/_next/static/images/biweekly-default-f5a8fc3be85b6c9175207fd8fd855d47.png' />
      </div>

      <div className='flex justify-center mt-5'>
        <div className='gap-5 flex-col lg:flex-row px-4 flex flex-grow w-full lg:max-w-[1100px] mb-5'>
          <OldContestList />
          <ClassicRanking />
        </div>
      </div>

    </div>
  )
}

export default ClassicBlitz