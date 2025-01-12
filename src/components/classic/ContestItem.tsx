import { StartContestDialog } from "./StartContestDialog"

function ContestItem({ name, img }: { name: string, img: string }) {
    return (
        <div className="flex flex-row w-full justify-between">

            <div className="flex flex-row">
                <img width={120} height={60} className="rounded-md cursor-pointer" src={img} />

                <div className='flex flex-col px-4 my-auto'>
                    <label className="text-sm hover:text-blue-500 hover:cursor-pointer text-gray-500 font-bold">{name}</label>
                    <label className="text-xs  text-gray-500">Sunday 8:00 AM GMT+5:30</label>
                </div>
            </div>

            <div className="my-auto">
                <center>
                    <StartContestDialog />
                </center>
            </div>

        </div>
    )
}

export default ContestItem