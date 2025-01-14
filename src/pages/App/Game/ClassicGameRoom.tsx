import { Button } from '@/components/ui/button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Player from 'lottie-react';
import classicCupAnimationData from '@/assets/animations/classic-cup.json';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import { Progress } from '@/components/ui/progress';

function ClassicGameRoom() {
    return (
        <div className=" w-full flex flex-col">

            <div className="bg-[#252A32] min-h-[300px] flex w-full justify-center">
                <div className='flex flex-col lg:max-w-[1100px] flex-grow'>
                    {/* header */}
                    <div className="flex flex-row justify-between mt-8 px-4">

                        <div>
                            <Button className='px-[8px] bg-[#313D3A] flex justify-center items-center'>
                                <ArrowBackIosIcon className='relative left-[3px]' />
                            </Button>
                        </div>

                        <div className='flex gap-5'>
                            <Button className='px-[8px] bg-[#313D3A] flex justify-center items-center'>
                                <IosShareIcon className='relative' />
                            </Button>

                            <Button className='px-[8px] bg-[#313D3A] flex justify-center items-center'>
                                <MoreHorizIcon className='relative' />
                            </Button>
                        </div>

                    </div>

                    {/* content */}
                    <div className='flex w-full mt-10 md:mt-2 gap-5'>
                        <Player
                            className='hidden md:flex pl-5 my-auto'
                            autoplay
                            loop
                            animationData={classicCupAnimationData}
                            style={{ height: '250px', width: '250px', marginBottom: 0 }}
                        />

                        <div className='my-auto flex  justify-center lg:justify-start w-full h-full'>

                            <div className='flex flex-col just gap-3 my-auto'>

                                <label className='truncate md:text-3xl text-2xl font-bold '>Weekly Classic blitz 100</label>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <ModeStandbyIcon />
                                        <label className='text-xs font-medium'>Classic Blitz | Created by code-blitz.com</label>
                                        {/* <label className='truncate text-xs font-medium'>10 Essential DP Patterns <span className=' underline cursor-pointer'>Learn More</span></label> */}

                                    </div>
                                </div>

                                <div className='flex flex-col gap-0'>
                                    <label className='text-xs font-medium'>Starts in</label>
                                    <label className='text-2xl font-bold'>01:23:45</label>
                                </div>

                                <div className='flex flex-col gap-1 mt-3'>
                                    <Progress className="my-auto" value={33} />
                                </div>

                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ClassicGameRoom