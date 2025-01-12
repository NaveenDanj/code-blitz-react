import { Button } from "@/components/ui/button"
import ContestItem from '@/components/classic/ContestItem';

function OldContestList() {
    return (
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
    )
}

export default OldContestList