import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"


const RankingItem = ({rank}:{rank:number}) => {
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


function WeeklyRanking() {
  return (
    <div className="flex flex-col w-full mt-5">
        <label className="text-[18px] font-medium text-lc-text-secondary dark:text-dark-lc-text-secondary">Weekly Ranking</label>

        <div className="flex flex-col gap-4 mt-8">
            {[1,2,3,4,5,6,7,8,9,10].map((item , index) => (
                <>
                    <RankingItem rank={index + 1} />
                    <Separator  />
                </>
            ))}
        </div>

    </div>
  )
}

export default WeeklyRanking