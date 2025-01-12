import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import QuestionMark from '@/assets/question.svg'

export function StartContestDialog() {
    return (

        <Dialog>

            <DialogTrigger asChild>
                {/* <Button variant="outline">Share</Button> */}
                <Badge className="cursor-pointer bg-yellow-500 flex justify-center items-center">Start</Badge>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md dark:bg-[#303030]">

                <DialogHeader>

                    <DialogTitle className="mb-1 flex gap-4">
                        <img width={48} height={48} className="text-green-500 my-auto bg-green-500 rounded-full" src={QuestionMark} />
                        <label className="my-auto">Would you like to start a Virtual Contest?</label>
                    </DialogTitle>

                    <DialogDescription>
                        Virtual Contests are a way to take part in previous contests. The experience is as close as it gets to real participation, but your rank is not affected.
                    </DialogDescription>

                </DialogHeader>



                <div className="flex justify-end gap-3 w-full mt-3">

                    <DialogClose asChild>
                        <Button className='dark:bg-[#3E3E3E] dark:text-white hover:dark:bg-[#3E3E3E]'>Cancel</Button>
                    </DialogClose>

                    <Button className='dark:bg-[#2DB55D] dark:text-white hover:dark:bg-[#2DB55D]'>Start Virtual Contest</Button>

                </div>

            </DialogContent>

        </Dialog>
    )
}
