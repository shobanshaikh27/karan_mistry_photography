import FlipCard from './FlipCard'
import { flipimgs } from '../assets/data/flipImages'

const FlipCardList = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-[40px] mt-[20px] lg:mt-[60px]">
                {flipimgs.map((flipimg) =><FlipCard key={flipimg.id} flipimg={flipimg} />)}
            </div>
        </div>
    )
}

export default FlipCardList
