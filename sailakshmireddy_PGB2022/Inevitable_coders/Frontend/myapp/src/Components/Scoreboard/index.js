import "./index.css"
import { useNavigate} from "react-router-dom"
const Scorebaord=(props)=>{
    const{count,subject,address,marks}=props
    const History=useNavigate()
    const a=count<marks ? "spanE":"spanE1"
    
    const renderlevel=()=>{
        if(subject==="java"){
            History("/Javalevel2")
            window.location.reload()
        }else if(subject==="javascript"){
            History("/JavaScriptlevel2")
            window.location.reload()
        }else{
            History("/Pythonlevel2")
            window.location.reload()
        }       
    }
    
    const postingData=async()=>{
        const url="http://localhost:5000/relate"
        const data={
            level:"In Home Page"
        }
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
    
        const sendoptions= await fetch(url,options)
        const data1= await sendoptions.json()
        console.log(data1)
    }

    const renderBackHome=()=>{
        History("/")
        postingData()
    }

    return(
        <div className="score-main-container">
            <div className="score-container">
                <h1 className="score-head">Score is : <span className={a}>{count}</span></h1>
                {count<marks?(
                    <>
                    <span className="emojiE">&#128528;</span>
                    <div className="back-container">
                        <p className="score-para">Better Luck Next Time!</p>
                        <img src="/images/home.png" alt="back to home" className="home-image" onClick={renderBackHome}/>
                    </div>
                    </>):
                    (address==="/Javalevel1" || address==="/Pythonlevel1" || address=== "/JavaScriptlevel1")? (
                    <>
                    <img src="https://www.livelimitless.net/wp-content/uploads/2011/01/congrats.jpg" alt="congratulations" className="imageE"/>
                    <button type="button" className="level-button" onClick={renderlevel}>Click for next level</button>
                    </>
                ):
                (
                <>
                <img src="https://thumbs.gfycat.com/PalatableFoolishDormouse-small.gif" alt="congratulations" className="imageE"/>
                <h3 className="score-bottom">Successfully Completed The Levels</h3>
                </>
                )
                }
            </div>
        </div>
    )
}

export default Scorebaord;
