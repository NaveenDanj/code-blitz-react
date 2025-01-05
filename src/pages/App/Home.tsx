import CalendarComponent from "@/components/home/CalendarComponent"
import GameCardSection from "@/components/home/GameCardSection"
import WeeklyRanking from "@/components/home/WeeklyRanking"

function Home() {
  return (
    
    <div className="flex flex-col  gap-7 flex-grow w-full lg:max-w-[1200px]">
      
      <div className="flex gap-7 flex-col lg:flex-row  w-full">
        
        <GameCardSection />

        <div className="flex flex-col gap-6 lg:w-[270px] w-full">
          <CalendarComponent />
          <WeeklyRanking />
        </div>
      
      </div>
      
    </div>
  )
}

export default Home