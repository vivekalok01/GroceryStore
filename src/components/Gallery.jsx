import { useState } from "react";

const Gallery = () => {
    const [stopScroll, setStopScroll] = useState(false);
    const cardData = [
        {
            title: "All your Stationery  needs",
            image: "https://cdn.pixabay.com/photo/2017/08/10/05/07/pens-2618427_1280.jpg",
        },
          {
            title: "All your spices needs",
            image: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?_gl=1*go0dsf*_ga*MjA5NjAxMDg0Ni4xNzQ2ODMwNjcy*_ga_8JE65Q40S6*czE3NTM0NTY4MDckbzYkZzEkdDE3NTM0NTY4MTIkajU1JGwwJGgw",
        },
     
       {
            title: "All your needs",
            image: "https://cdn.pixabay.com/photo/2018/03/01/16/43/toothbrush-3191097_1280.jpg",
        },
        {
            title: "All your kitchen needs",
            image: "https://cdn.pixabay.com/photo/2015/09/09/21/33/kitchen-933503_1280.jpg",
        },
     {
            title: "All your spices needs",
            image: "https://cdn.pixabay.com/photo/2017/08/06/20/08/steel-2595828_1280.jpg",
        },
      {
            title: "All your toys needs",
            image: "https://cdn.pixabay.com/photo/2017/08/11/14/17/bear-2631262_1280.jpg",
        },
    ];

    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="overflow-hidden w-full relative max-w-7xl mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#F5F7FF] to-transparent" />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 2500 + "ms" }}>
                    <div className="flex">
                        {[...cardData, ...cardData].map((card, index) => (
                            <div key={index} className="w-56 mx-4 h-[18rem] relative group hover:scale-90 transition-all duration-300">
                                <img src={card.image} alt="card" className="w-full h-full object-cover" />
                                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                                    <p className="text-white text-lg font-semibold text-center">{card.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#F5F7FF] to-transparent" />
            </div>
        </>
    );
};
export default Gallery