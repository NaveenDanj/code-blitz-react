
function GameCardSection() {
  return (
    <div className="flex flex-grow">
        <div className="w-full grid grid-cols-3 flex-grow gap-8">
            <div className="max-w-[270px]">
                <img className="rounded-md" src={'https://assets.leetcode.com/users/images/93ad444a-6425-413b-9094-8a613d7be5ab_1734667147.858678.png'} />
            </div>

            <div className="max-w-[270px]">
                <img className="rounded-md" src={'https://assets.leetcode.com/users/images/49479bba-73b3-45d2-9272-99e773d784b2_1687290663.3168745.jpeg'} />
            </div>

            <div className="max-w-[270px]">
                <img className="rounded-md" src={'https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png'} />
            </div>
        </div>
    </div>
  )
}

export default GameCardSection