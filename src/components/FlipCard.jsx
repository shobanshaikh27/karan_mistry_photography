const FlipCard = ({ image }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="group h-80 w-80 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img 
                src={image.imageUrl} 
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/20" 
                alt={image.title} 
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/70 px-2 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col  justify-center">
                <h1 className="text-3xl font-bold capitalize">{image.title}</h1>
                <p className="text-lg capitalize">{image.description}</p>
                {/* <p className="text-lg">{image.tags}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard