import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

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



function ClassicRanking() {
    return (
        <div className='rounded-lg p-4 w-full lg:w-[300px] bg-[#282828] flex flex-col'>
            <div className='flex w-full gap-2'>
                <EmojiEventsIcon />
                <label className='text-sm font-semibold font-mono my-auto'>Global Ranking</label>
            </div>

            <div className='flex flex-col gap-8 mt-8'>
                {[1, 2, 3, 4, 5, 6].map((item) => (<RankingItem key={item} rank={item} />))}
            </div>

            <div className='w-full flex justify-center mt-8'>
                <label className='text-blue-500 text-xs cursor-pointer'>View More</label>
            </div>

        </div>
    )
}

export default ClassicRanking