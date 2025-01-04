
const GameModeItem = () => {
    return (
        <div className="flex flex-row p-2 bg-[#282828] hover:bg-[#363636] hover:cursor-pointer rounded-lg">
            <img src="https://assets.leetcode.com/study_plan_v2/leetcode-75/cover" alt="1v1" className="rounded-[4px] mr-3.5 h-[72px] w-[72px]" />
            <div className="my-auto flex flex-col">
                <label className="text-sm font-semibold hover:cursor-pointer hover:underline">24-Hour Code Arena</label>
                <label className="text-xs text-gray-300 hover:cursor-pointer hover:underline">Weekly blitz-coding contest</label>
            </div>
        </div>
    )
}


function GameModeSection() {
  return (
    <div className="mt-8 flex flex-col">
        <label className="text-[20px] font-medium text-lc-text-secondary dark:text-dark-lc-text-secondary">Game Modes</label>

        <div className="grid grid-cols-3 mt-5 gap-4">
            <GameModeItem />
            <GameModeItem />
            <GameModeItem />

            <GameModeItem />
            <GameModeItem />
            <GameModeItem />
        </div>

    </div>
  )
}

export default GameModeSection