import Logo from '../../assets/logo.png'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

function Header() {
  return (
    <div className="px-3 flex justify-center bg-[#282828] p-0 border-b border-b-solid border-b-white/10">
        <div className="flex max-w-[1200px] flex-grow gap-8"> 
            <img src={Logo} width={50} height={50} />
            <div className='flex gap-8 my-auto'>
                <label className='text-white cursor-pointer font-semibold'>Problems</label>
                <label className='cursor-pointer text-gray-500 font-semibold'>Contest</label>
                <label className='cursor-pointer text-gray-500 font-semibold'>Challenges</label>
            </div>
        </div>
        
        <div className='flex gap-3'>
            
            <Button className='bg-[#282828] hover:bg-[#282828] my-auto px-2' variant="ghost">
                <NotificationsOutlinedIcon sx={{ fontSize: 15 }} />
            </Button>
            
            <Button className='bg-[#282828] hover:bg-[#282828] my-auto px-2 text-orange-400' variant="ghost">
                <LocalFireDepartmentOutlinedIcon sx={{ fontSize: 15 }} />
            </Button>

            <Avatar className='my-auto size-8 ml-2 cursor-pointer'>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>

    </div>
  )
}

export default Header