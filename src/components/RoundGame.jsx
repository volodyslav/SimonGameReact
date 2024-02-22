import { useEffect, useState } from "react"

const RoundGame = () => {
    const [start, setStart] = useState(false)


    const handleStart = () => {
        setStart(true)
    }


    useEffect(() => {
        console.log(start)
    }, [start])

  return (
    <div className="relative all-buttons ">
        <div className=" flex flex-col ">
            <div className="flex">
                <button className="b border-l-t bg-red-600"></button>
                <button className="b border-r-t bg-blue-600"></button>
            </div>
           
            <div className="flex">
                <button className="b border-l-b bg-yellow-400"></button>
                <button className="b border-r-b bg-green-600 "></button>
            </div>
            
        </div>
        <div className=" white-space-command text-center">
            <h1 className=" text-6xl font-bold mt-10">Simon</h1>
            <div className="">
                <button onClick={handleStart} className="start-b"></button>
                <h4>Start</h4>
            </div>
            
        </div>

    </div>
  )
}

export default RoundGame