import React from 'react'

function Drawer({ color, setColor }) {

    return (
        <div className='w-[50%] md:w-[24%] xl:w-[20%] right-0 absolute z-50 backdrop-blur-3xl border-l px-2 md:px-10 transition overflow-y-scroll'>
            <div className='h-[100vh] justify-center items-center space-y-3 md:space-y-4 py-2 md:pt-6'>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("slate")}>
                    <div className='w-6 h-6 rounded-full bg-slate-500 border' />
                    <p className='font-serif text-lg text-white'>Slate</p>
                    {color === "slate" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("stone")}>
                    <div className='w-6 h-6 rounded-full bg-stone-500 border' />
                    <p className='font-serif text-lg text-white'>Stone</p>
                    {color === "stone" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("red")}>
                    <div className='w-6 h-6 rounded-full bg-red-500 border' />
                    <p className='font-serif text-lg text-white'>Red</p>
                    {color === "red" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("orange")}>
                    <div className='w-6 h-6 rounded-full bg-orange-500 border' />
                    <p className='font-serif text-lg text-white'>Orange</p>
                    {color === "orange" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("amber")}>
                    <div className='w-6 h-6 rounded-full bg-amber-500 border' />
                    <p className='font-serif text-lg text-white'>Amber</p>
                    {color === "amber" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("yellow")}>
                    <div className='w-6 h-6 rounded-full bg-yellow-500 border' />
                    <p className='font-serif text-lg text-white'>Yellow</p>
                    {color === "yellow" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("lime")}>
                    <div className='w-6 h-6 rounded-full bg-lime-500 border' />
                    <p className='font-serif text-lg text-white'>Lime</p>
                    {color === "lime" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("green")}>
                    <div className='w-6 h-6 rounded-full bg-green-500 border' />
                    <p className='font-serif text-lg text-white'>Green</p>
                    {color === "green" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("emerald")}>
                    <div className='w-6 h-6 rounded-full bg-emerald-500 border' />
                    <p className='font-serif text-lg text-white'>Emerald</p>
                    {color === "emerald" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("teal")}>
                    <div className='w-6 h-6 rounded-full bg-teal-500 border' />
                    <p className='font-serif text-lg text-white'>Teal</p>
                    {color === "teal" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("blue")}>
                    <div className='w-6 h-6 rounded-full bg-blue-500 border' />
                    <p className='font-serif text-lg text-white'>Blue</p>
                    {color === "blue" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("violet")}>
                    <div className='w-6 h-6 rounded-full bg-violet-500 border' />
                    <p className='font-serif text-lg text-white'>Violet</p>
                    {color === "violet" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("fuchsia")}>
                    <div className='w-6 h-6 rounded-full bg-fuchsia-500 border' />
                    <p className='font-serif text-lg text-white'>Fuchsia</p>
                    {color === "fuchsia" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
                <div className='grid-cols-1 flex items-center rounded-lg px-2 py-1 space-x-4'
                    onClick={() => setColor("pink")}>
                    <div className='w-6 h-6 rounded-full bg-pink-500 border' />
                    <p className='font-serif text-lg text-white'>Pink</p>
                    {color === "pink" &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>
            </div>
        </div>
    )
}


export default Drawer