import "./index.css"
import { useNavigate} from "react-router-dom"

const Home=()=>{
  
  const History=useNavigate()

  const func=()=>{  
    History("/Javalevel1");  
  }

  const func1=()=>{   
    History("/Pythonlevel1"); 
  }

  const func2=()=>{ 
    History("/JavaScriptlevel1");
  }
  
  return(
    
        <div className="bg-container">
          <h1 className="home_head" align="center">Welcome<br />Test your programming abilities</h1>
            <div className="home_container">  
                <img src="/images/javaimage.png" alt="javaimg" className="imgE1" onClick={func} path="/Javalevel1" />
                <img src="/images/py.png" alt="pythomimg" className="imgE" onClick={func1} path="/Pythonlevel1"/>
                <img src="/images/javaS.jpg" alt="javasriptimg" className="imgE" onClick={func2} path="/JavaScriptlevel1"/>
            </div>
        </div>
    )
}

export default Home
