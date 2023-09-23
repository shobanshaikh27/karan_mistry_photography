
const FlipCard = ({ flipimg }) => {

  const { photo, pack, description } = flipimg

  return (
    <div>
      <div className="flex  flex-col justify-center">
        <div className="group h-96 w-96 [perspective:1000px] ">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
            <div className="absolute inset-0">
              <img src={photo} className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">{pack}</h1>
                <p className="text-lg">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
