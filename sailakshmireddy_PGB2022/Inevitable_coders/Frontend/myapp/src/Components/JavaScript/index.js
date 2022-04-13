import {Component} from "react"
import QuestionItem from "../QuestionItem"
import Scorebaord  from "../Scoreboard";
import {TailSpin} from 'react-loader-spinner';
import "./index.css";

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class JavaScript extends Component{

    state = { questionData: [], count:0, temp:{}, isScoreOpen:false, address:" ", apiStatus:apiStatusConstants.initial}

    componentDidMount(){
        this.getdata()
        this.postingData()
    }

    getdata=async()=>{
        this.setState({
            apiStatus: apiStatusConstants.inProgress,
        })
        const start=this.props.start
        const stop=this.props.stop
        const response=await fetch("http://localhost:5000/javascript")
        if(response.ok===true){
            const data=await response.json()
            const sliceddata=data.slice(start,stop)
            this.setState({
                questionData:sliceddata,
                apiStatus: apiStatusConstants.success,
            })
        }
        else {
            this.setState({
              apiStatus: apiStatusConstants.failure,
            })
        }
    }

    postingData=async()=>{
        const location1=window.location.pathname
        const url="http://localhost:5000/relate"
        const data={
            level:location1   
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

    formsubmit=(event)=>{
        const location1=window.location.pathname
        const{temp}=this.state
        event.preventDefault()
        for (const key in temp) {
            if(key===temp[key]){
                this.setState(prevstate=>({count:prevstate.count+10}))
            }
        }
        this.setState({temp:" ",isScoreOpen:true,address:location1})
    }

    changeradio=(event)=>{
        this.state.temp[event.target.value] = event.target.id;       
    }

    renderQuestionList=()=>{
        const{questionData,count,isScoreOpen,address}=this.state;
        return(
            <div>
                {isScoreOpen?(<Scorebaord count={count} subject="java" address={address} marks={this.props.count}/>):
                (<form className="java-container" onSubmit={this.formsubmit}>    
                    <h1 className="heading" align="center">Choose the correct Answers</h1>
                    {questionData.map((x,i)=>(<QuestionItem questiondata={x} key={x.SNo} serialNum={i+1} changeradio={this.changeradio}/>))}
                    <button type="submit" className="buttonE">Submit</button>
                </form>
                )}
            </div>
        )
    }

    renderFailureView = () => (
        <img
          src="https://www.gauraw.com/wp-content/uploads/2015/02/Steps-to-Fix-internet-connection-problem-on-Windows-8.1-using-winsock-command.jpg"
          alt="failure view"
          className="failure-view"
        />
    )
    
    renderLoadingView = () => (
        <div className="loader-container">
          <TailSpin color="#0b69ff" height="80" width="80" />
        </div>
    )

    render(){   
        const {apiStatus} = this.state
        switch (apiStatus) {
        case apiStatusConstants.success:
            return this.renderQuestionList()
        case apiStatusConstants.failure:
            return this.renderFailureView()
        case apiStatusConstants.inProgress:
            return this.renderLoadingView()
        default:
            return null
        }       
    }
}

export default JavaScript;
