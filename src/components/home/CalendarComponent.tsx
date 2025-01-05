import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"



const CalendarFooterComponent = () => {
    return (
        <div className="flex w-full flex-col mt-5">
            
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <img className="size-5 my-auto" src="https://leetcode.com/_next/static/images/ttt-a2c700529300981c5d372d69bb9bbdaa.png" />
                    <label className="text-sm my-auto text-yellow-500 font-semibold">100300 <span className="text-xs text-green-400 ml-2">Coins</span></label>
                </div>
                <label className="text-xs my-auto text-gray-500 font-bold hover:cursor-pointer hover:underline">Rules</label>
            </div>
            
            <Separator className="mt-3" />

            <div className="flex mb-4 flex-col w-full">
                <label className="text-sm mt-5 text-white font-bold ">24-Hour Code Arena</label>

                <div className="mt-3 w-full flex flex-row">
                    <img className="size-[50px] my-auto rounded-md" src="https://assets.leetcode.com/study_plan_v2/dynamic-programming/cover" />
                    <div className="flex flex-col my-auto w-full px-2 ml-2 gap-2">
                        <label className="text-xs">Weekly blitz-coding contest</label>
                        <div className="w-full flex gap-2">
                            <Progress className="my-auto"  value={33} />
                            <label className="text-xs my-auto ">28%</label>
                        </div>
                        <label className="text-xs mt-[-5px] text-gray-400">position : 5 / 50000</label>

                    </div>
                </div>

            </div>

            {/* <Separator className="mt-3" /> */}

        </div>
    )
}


function CalendarComponent() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className="flex justify-center w-full">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow 
                           bg-white text-gray-900 
                           dark:bg-[#282828] dark:text-gray-100 dark:border-gray-700"
                footer={<CalendarFooterComponent />}
            />
        </div>
    )
}

export default CalendarComponent