import Header from "@/components/global/Header"
import CalendarComponent from "@/components/home/CalendarComponent"
import GameCardSection from "@/components/home/GameCardSection"

function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      
      <div className="flex justify-center mt-12 px-2">
        
        <div className="flex flex-col  gap-7 flex-grow w-full lg:max-w-[1200px]">
          
          <div className="flex gap-7 flex-col lg:flex-row flex-grow w-full">
            
            <GameCardSection />

            <div className="flex flex-col lg:w-[270px] w-full">
              <CalendarComponent />
            </div>
          
          </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Home