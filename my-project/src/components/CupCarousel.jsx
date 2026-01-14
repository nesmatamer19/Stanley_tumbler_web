import { useState } from 'react'

function CupCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const cups = [
        {
            id: 1,
            bgimage: './images/pink_bgg.jpg',
            image: './images/pink.png',
        },
        {
            id: 2,
            bgimage: './images/galaxy_bg.jpg',
            image: './images/galaxy.png',
        },
        {
            id: 3,
            bgimage: './images/bg.png',
            image: './images/black.png',
        },
    ]

    const nextCup = () => {
        setCurrentIndex((num) => (num + 1) % cups.length)
    }

    const prevCup = () => {
        setCurrentIndex((num) => (num - 1 + cups.length) % cups.length)
    }

    return (
        <div className="w-full h-screen overflow-hidden">
            <img src={cups[currentIndex].bgimage} className='absolute inset-0 flex items-center justify-center'/>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="cup-rotator">
                    <img
                        src={cups[currentIndex].image}
                        alt={cups[currentIndex].name}
                        className="h-[650px] w-auto mt-20 drop-shadow-2xl"
                    />
                </div>
            </div>

            <button
                onClick={prevCup}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 z-40 group"
                aria-label="Previous cup"
            >
                <div className="arrow-button left-arrow">
                    <svg
                        className="w-12 h-12 text-white group-hover:text-blue-300 transition-all duration-300 group-hover:scale-125"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </div>
            </button>

            <button
                onClick={nextCup}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 z-40 group"
                aria-label="Next cup"
            >
                <div className="arrow-button right-arrow">
                    <svg
                        className="w-12 h-12 text-white group-hover:text-blue-300 transition-all duration-300 group-hover:scale-125"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default CupCarousel
