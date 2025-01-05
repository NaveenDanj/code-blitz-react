import Header from "@/components/global/Header"
import CalendarComponent from "@/components/home/CalendarComponent"
import GameCardSection from "@/components/home/GameCardSection"
import WeeklyRanking from "@/components/home/WeeklyRanking"

function Home() {
  return (
    <div className="flex flex-col h-[100vh] w-screen overflow-auto">
      <Header />
      
      <div className="flex justify-center mt-12 px-4">
        
        <div className="flex flex-col  gap-7 flex-grow w-full lg:max-w-[1200px]">
          
          <div className="flex gap-7 flex-col lg:flex-row  w-full">
            
            <GameCardSection />

            <div className="flex flex-col gap-6 lg:w-[270px] w-full">
              <CalendarComponent />
              <WeeklyRanking />
            </div>
          
          </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Home