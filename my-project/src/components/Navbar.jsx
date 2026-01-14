import { useState } from 'react'

function Navbar() {
    const [activeNavItem, setActiveNavItem] = useState('home')

    return (
        <nav className="relative z-50 sticky top-0 bg-white backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2 text-2xl font-bold">
                    <img src="/src/assets/images/stanley-logo.svg" className="w-32 mt-3 brightness-110"></img>
                </div>

                <div className="hidden md:flex gap-8">
                    {['Home', 'Cups', 'Collection', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveNavItem(item.toLowerCase())}
                            className={`relative py-2 text-sm font-semibold transition-all duration-300 ${activeNavItem === item.toLowerCase()
                                ? 'text-blue-400'
                                : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {item}
                            {activeNavItem === item.toLowerCase() && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 animate-width"></div>
                            )}
                        </button>
                    ))}
                </div>

                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                    Shop
                </button>
            </div>
        </nav>
    )
}

export default Navbar
