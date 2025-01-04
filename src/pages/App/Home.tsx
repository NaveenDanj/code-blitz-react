import Header from "@/components/global/Header"
import CalendarComponent from "@/components/home/CalendarComponent"
import GameCardSection from "@/components/home/GameCardSection"

function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
        <Header />
        <div className="flex justify-center mt-10 px-2">
            <div className="flex flex-col lg:flex-row gap-7 flex-grow w-full lg:max-w-[1200px]">
                <GameCardSection />
                <div className="lg:w-[270px] w-full">
                    <CalendarComponent />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home