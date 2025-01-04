import Header from "@/components/global/Header"
import GameCardSection from "@/components/home/GameCardSection"

function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
        <Header />
        <div className="flex justify-center  mt-10">
            <div className="flex  gap-5 max-w-[1200px] ">
                <GameCardSection />
                <div className="w-[270px] bg-red-500">
                    asd
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home