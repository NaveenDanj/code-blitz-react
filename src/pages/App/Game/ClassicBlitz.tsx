import Player from 'lottie-react';
import classicCupAnimationData from '@/assets/animations/classic-cup.json';
import ContestCard from '@/components/classic/ContestCard';
import { Button } from "@/components/ui/button"
import ContestItem from '@/components/classic/ContestItem';


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
        <div className='gap-5 flex-col lg:flex-row px-4 flex flex-grow w-full lg:max-w-[1000px] mb-5'>

          <div className='flex rounded-lg p-4 flex-grow bg-[#282828] flex-col'>

            <div className='flex w-full gap-5'>
              <Button className='dark:bg-[#3E3E3E] dark:text-white hover:dark:bg-[#3E3E3E]'>Past Contests</Button>
              <Button variant={'ghost'} className='dark:bg-[#282828] dark:hover:bg-[#3E3E3E]'>My Contests</Button>
            </div>

            <div className='flex flex-col gap-5 mt-8'>
              <ContestItem img='https://leetcode.com/_next/static/images/weekly-default-553ede7bcc8e1b4a44c28a9e4a32068c.png' name='Weekly Contest 432' />
              <ContestItem img='https://leetcode.com/_next/static/images/biweekly-default-f5a8fc3be85b6c9175207fd8fd855d47.png' name='Weekly Contest 432' />
              <ContestItem img='https://leetcode.com/_next/static/images/biweekly-default-f5a8fc3be85b6c9175207fd8fd855d47.png' name='Weekly Contest 432' />
              <ContestItem img='https://leetcode.com/_next/static/images/weekly-default-553ede7bcc8e1b4a44c28a9e4a32068c.png' name='Weekly Contest 432' />
              <ContestItem img='https://leetcode.com/_next/static/images/biweekly-default-f5a8fc3be85b6c9175207fd8fd855d47.png' name='Weekly Contest 432' />
              <ContestItem img='https://leetcode.com/_next/static/images/weekly-default-553ede7bcc8e1b4a44c28a9e4a32068c.png' name='Weekly Contest 432' />
            </div>

          </div>

          <div className='rounded-lg p-4 w-full lg:w-[300px] bg-blue-500 flex'>
            asd
          </div>

        </div>
      </div>

    </div>
  )
}

export default ClassicBlitz