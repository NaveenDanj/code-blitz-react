import AccessTimeIcon from '@mui/icons-material/AccessTime';

function ContestCard() {
    return (
        <div className="flex flex-col w-[350px] bg-[#282828] rounded-xl pb-4 shadow-lg">
            <img className="rounded-tl-xl rounded-tr-xl" src={'https://leetcode.com/_next/static/images/weekly-default-553ede7bcc8e1b4a44c28a9e4a32068c.png'} />
            <div className="shadow-2xl shadow-black flex gap-2 px-4 relative  top-[-30px]">
                <AccessTimeIcon sx={{ fontSize: 18 }} className='my-auto' />
                <label className="text-sm shadow-2xl my-auto">Start in 6d 17h 17m 9s</label>
            </div>

            <div className='flex flex-col px-4'>
                <label className="text-xl font-bold shadow-2xl my-auto">Weekly Classic Blitz</label>
                <label className="text-sm font-semibold shadow-2xl my-auto text-gray-500">Sunday 8:00 AM GMT+5:30</label>
            </div>

        </div>
    )
}

export default ContestCard