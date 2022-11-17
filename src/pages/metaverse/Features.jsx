export default function Features({image,title,desc}) {
    return(
      <div className="w-[440px] h-[560px] border border-[#333] rounded-2xl overflow-hidden text-white">
          <div className="w-full h-4/5 bg-[#333] relative">
              <img src={image} className='absolute inset-x-0 mx-auto bottom-0' alt="" />
          </div>
          <div className="w-full h-1/5 text-center px-[10%] flex flex-col justify-center gap-2">
            <h2 className='text-[1.8rem] font-bold'>{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
    )
  }