import { useEffect, useState } from "react"

const RoundGame = () => {
    // Button clicked 
    let computerButtons = []
    
    let playerButtons = []

    const [start, setStart] = useState(false)
    const [strictMode, setStrictMode] = useState(false)

    //Change color random active
    const [colorRandom, setColorRandom] = useState(0)

    const [mistake, setMistake] = useState(false)

    const [score, setScore]  = useState(0)


    const handleStart = () => {
        setStart(true)
    }

    const handleStrictMode = () => {
        setStrictMode(!strictMode)
    }

    const generateRandomButtonNumber = () => {
        return Math.floor(Math.random() * 4) + 1
    }

    //Start 
    const startGame = () => {
        let random;
        if(computerButtons.length === 0){
            random = generateRandomButtonNumber()
            setColorRandom(random)
            computerButtons.push(random)
            console.log(random)
        }
    }

    const handleRestart = () => {
        setStart(false)
        setMistake(false)
        setScore(0)
        computerButtons.length = 0
    }

    const handlePlayerChoices = (value) => {
        playerButtons.push(value)
    }
    
    useEffect(() => {
        startGame()
        console.log(start)
        console.log(computerButtons)
        console.log(playerButtons)
        
    }, [start, strictMode, mistake, computerButtons, colorRandom, playerButtons])

  return (
    <div className="relative all-buttons ">
        <div className=" flex flex-col ">
            <div className="flex">
                <button onClick={() => handlePlayerChoices(1)} className={`b border-l-t  active:bg-red-400 ${colorRandom === 1 ? "bg-red-400": "bg-red-600"}`}>
                    <audio id="b1" src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"></audio>
                </button>
                <button onClick={() => handlePlayerChoices(2)} className="b border-r-t bg-blue-600 active:bg-blue-400">
                    <audio id="b2" src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></audio>
                </button>
            </div>
           
            <div className="flex">
                <button onClick={() => handlePlayerChoices(3)} id="b3" className="b border-l-b bg-yellow-400 active:bg-yellow-200">
                    <audio src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"></audio>
                </button>
                <button onClick={() => handlePlayerChoices(4)} className="b border-r-b bg-green-600 active:bg-green-400">
                    <audio id="b4" src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"></audio>
                </button>
            </div>
            
        </div>
        <div className=" white-space-command text-center">
            <h1 className=" text-6xl font-bold mt-10">Simon</h1>
            <div className="flex justify-center my-4 space-x-4">
                <div className=" space-y-2 bg-cyan-700 min-w-10 h-12 shadow-2xl border-gray-900 border-2">
                    <h1 className=" text-white text-4xl font-extrabold ">{score}</h1>
                    <h4>Counts</h4>
                </div>
                <div className="">
                    <button onClick={handleStart} className="start-b"></button>
                    <h4>Start</h4>
                </div>
                <div className="">
                    <button onClick={handleRestart} className="restart-b"></button>
                    <h4>Restart</h4>
                </div>
                <div className="">
                    <button onClick={handleStrictMode} className="strict-b"></button>
                    <h4>Strict {strictMode ? <p>On</p> : <p>OFF</p>}</h4>
                </div>
            </div>
            <div>
                {mistake ? <h1 className=" text-center text-4xl my-2 font-extrabold">Wrong!</h1> : <p></p>}
            </div>
        </div>

    </div>
  )
}

export default RoundGame