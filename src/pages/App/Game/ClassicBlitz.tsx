import Player from 'lottie-react';
import classicCupAnimationData from '@/assets/animations/classic-cup.json';
import ContestCard from '@/components/classic/ContestCard';
import { Button } from "@/components/ui/button"
import ContestItem from '@/components/classic/ContestItem';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import OldContestList from '@/components/classic/OldContestList';

const RankingItem = ({ rank }: { rank: number }) => {
  return (
    <div className="flex gap-2">
      <label className="flex flex-[0_0_28px] justify-center text-center font-['TypoRound'] text-xl font-normal italic">{rank}</label>
      <Avatar className='my-auto size-10 ml-2 cursor-pointer'>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="my-auto flex flex-col">
        <label className="text-sm font-semibold hover:cursor-pointer hover:underline">Naveen Dhananjaya</label>
        <label className="text-xs text-gray-400">1523 Blitz Points </label>
      </div>
    </div>
  )
}


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

          <div className='rounded-lg p-4 w-full lg:w-[300px] bg-[#282828] flex flex-col'>
            <div className='flex w-full gap-2'>
              <EmojiEventsIcon />
              <label className='text-sm font-semibold font-mono my-auto'>Global Ranking</label>
            </div>

            <div className='flex flex-col gap-8 mt-8'>
              {[1, 2, 3, 4, 5, 6].map((item) => (<RankingItem rank={item} />))}
            </div>

            <div className='w-full flex justify-center mt-8'>
              <label className='text-blue-500 text-xs cursor-pointer'>View More</label>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default ClassicBlitz