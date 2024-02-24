import { useEffect, useState } from "react"

const RoundGame = () => {
    // Button clicked 
    let [computerButtons, setComputerButtons] = useState([1, 2])
    let [playerButtons, setPlayerButtons] = useState([])
   

    const [start, setStart] = useState(false)
    const [strictMode, setStrictMode] = useState(false)

    //Change color random active
    const [colorRandom, setColorRandom] = useState(0)

    const [mistake, setMistake] = useState(false)

    const [score, setScore]  = useState(0)

    const [roundStop, setRoundStop] = useState(false)

    //Player round
    const [playerStart, setPlayerStart] = useState(false)
    //Amount for 1 round
    const [round, setRound] = useState(0)


    const handleStart = () => {
        setStart(true)
    }

    const handleStrictMode = () => {
        setStrictMode(!strictMode)
    }

    const generateRandomButtonNumber = () => {
        return Math.floor(Math.random() * 4) + 1
    }

    const playButtons = (randomValue) => {
        const sound1 = document.querySelector("#b1");
        const sound2 = document.querySelector("#b2");
        const sound3 = document.querySelector("#b3");
        const sound4 = document.querySelector("#b4");
        switch(randomValue){
            case 1:
                sound1.play()
                break
            case 2:
                sound2.play()
                break
            case 3:
                sound3.play()
                break
            case 4:
                sound4.play()
                break
        }
    }

    //Play computer random array
    const playRandom = () => {
        if(round < computerButtons.length){
            
            setTimeout(() => {
                setColorRandom(computerButtons[round]) 
                playButtons(computerButtons[round])
                setRound(r => r + 1)
            }, 1000)   
        }else if(round === computerButtons.length){
            setTimeout(() => {
                setColorRandom(0)
            }, 1000)
            setPlayerStart(true)
           
            setRound(0)
        }
        
    }

    //Start 
    const startRandom = () => {
        let random = generateRandomButtonNumber();
        if(start && !roundStop){
            setComputerButtons([...computerButtons, random])
            setRoundStop(true)
            
            console.log(random)
        }
        
    }

    const handleRestart = () => {
        setStart(false)
        setRoundStop(false)
        setMistake(false)
        setScore(0)
        setRound(0)
        setComputerButtons([])
        setPlayerButtons([])
    }

    const handlePlayerChoices = (value) => {
        if(start && playerStart){
            setPlayerButtons([...playerButtons, value])
            playButtons(value)
            
        }
        if(playerButtons.length === computerButtons.length - 1){
            setRoundStop(false)
            setPlayerStart(false)
            setPlayerButtons([])
        }
        
    }
    
    useEffect(() => {
        startRandom()
        if(roundStop && !playerStart){
            playRandom()
        }
        
        
        console.log("Start", start)
        console.log(computerButtons)
        console.log(playerButtons)
        console.log("Round stop", roundStop)
        console.log("Round", round)
        console.log("Player start", playerStart)
    }, [start, strictMode, mistake, roundStop, computerButtons, round, playerButtons, playerStart])

  return (
    <div className="relative all-buttons ">
        <div className=" flex flex-col ">
            <div className="flex">
                <button onClick={() => handlePlayerChoices(1)} className={`b border-l-t  ${playerStart && start ? "active:bg-red-400 cursor-pointer" : " cursor-default"} ${colorRandom === 1 ? "bg-red-400": "bg-red-600"}`}>
                    <audio id="b1" src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"></audio>
                </button>
                <button onClick={() => handlePlayerChoices(2)} className={`b border-r-t  ${playerStart && start ? "active:bg-blue-400 cursor-pointer" : " cursor-default"}  ${colorRandom === 2 ? "bg-blue-400": "bg-blue-600"}`}>
                    <audio id="b2" src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></audio>
                </button>
            </div>
           
            <div className="flex">
                <button onClick={() => handlePlayerChoices(3)} className={`b border-l-b   ${playerStart && start ? "active:bg-yellow-200 cursor-pointer" : " cursor-default"} ${colorRandom === 3 ? "bg-yellow-400" : "bg-yellow-600"}`}>
                    <audio id="b3" src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"></audio>
                </button>
                <button onClick={() => handlePlayerChoices(4)} className={`b border-r-b  ${playerStart && start ? "active:bg-green-400 cursor-pointer" : " cursor-default"} ${colorRandom === 4 ? "bg-green-400" : "bg-green-600"}`}>
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