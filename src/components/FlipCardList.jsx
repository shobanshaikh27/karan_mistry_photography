import FlipCard from './FlipCard'
import { flipimgs } from '../assets/data/flipImages'

const FlipCardList = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[80px] p-4 sm:p-8 md:p-6 ">
                {flipimgs.map((flipimg) =><FlipCard key={flipimg.id} flipimg={flipimg} />)}
            </div>
        </div>
    )
}

export default FlipCardList
