import Logo from '../../assets/logo.png'

function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
        <div className="flex justify-center bg-[#282828] p-0 border-b border-b-solid border-b-white/10">
            <div className="flex max-w-[1200px] flex-grow gap-8"> 
                <img src={Logo} width={50} height={50} />
                <div className='flex gap-8 my-auto'>
                    <label className='text-white cursor-pointer font-semibold'>Problems</label>
                    <label className='cursor-pointer text-gray-500 font-semibold'>Contest</label>
                    <label className='cursor-pointer text-gray-500 font-semibold'>Challenges</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home