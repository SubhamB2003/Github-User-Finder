import React from 'react'

function BackgroundStones({ color }) {
    return (
        <div>
            <div className={`bg-${color}-500 w-[100px] h-[200px] xl:w-[200px] xl:h-[400px] absolute z-0 left-0 top-10 rounded-r-full`} />
            <div className={`bg-${color}-500 w-[150px] h-[150px] xl:w-[300px] xl:h-[300px] absolute z-0 xl:left-72 left-10 xl:bottom-20 bottom-16 rounded-3xl rotate-45`} />
            <div className={`bg-${color}-500 w-[150px] h-[250px] xl:w-[250px] xl:h-[350px] absolute z-0 xl:right-80 right-8 top-10 rounded-3xl rotate-12`} />
            <div className={`bg-${color}-500 w-[100px] h-[200px] xl:w-[200px] xl:h-[400px] absolute z-0 right-0 bottom-0 rounded-l-full `} />
        </div>
    )
}

export default BackgroundStones