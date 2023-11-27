import React, { useState, useEffect} from "react";
import "./SinglePlayer.css";
import { Link, useParams } from "react-router-dom";
import data from "../../questions.json";
import easyQ from "../../easy_questions.json";
import mediumQ from "../../medium_questions.json";
import hardQ from "../../hard_questions.json";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import Cookies from 'js-cookie';

const Modal = ({text, onClick, visible, setVisible}) =>{
  let home = false, error = false, correct=false;
  if(text.includes('Home')){
    home = true;
  }
  if(text.includes('Wrong!.')){
    error = true;
  }
  if(text.includes('Correct')){
    // const queryParams = new URLSearchParams(location.search);
    // const qType = queryParams.get('qType');
    // const cookie = Cookies.get(`cookie${(qType.substring(0,1)).toUpperCase() + qType.substring(0,1)}`)
    // Cookies.set(`cookie${(qType.substring(0,1)).toUpperCase() + qType.substring(1)}`,cookie)
    // console.log(cookieEasy);
    correct = true;
  }


  return (
    <div className="bg_modal" style={{display: visible? "":"none" }}>
      <div className="modal">
          <div className="modal_text">
            <p style={{fontSize:'16px'}}>{correct? "Congratulations, You have gained a points for completing the code!.":text}</p>
          </div>
          <div className="modal_btn" >
            { !correct && <div className="buttonModal noBtn" onClick={()=> setVisible(false) } style={{ opacity: error? 0:1 }} >No</div>}
            { home && !correct && <Link to={'/'} > <div className="buttonModal yesBtn">Yes</div> </Link>}
            { !home && !correct && <div className="buttonModal yesBtn" onClick={()=> setVisible(false) }>OKAY</div> }
            { correct && <div className="buttonModal yesBtn" onClick={()=> setVisible(false) } style={{width:'20em', textAlign:'center'}}>OKAY</div> }
          </div>
      </div>
     </div>

  )
}



export default function SinglePlayer() {
  const [ countQuestion, setCountQuestion ] = useState()
  const [ isCodeCorrect, setIsCodeCorrect ] = useState(false)
  const [ count , setCount ] = useState(1)
  const [ initialQ , setQ] = useState([])
  const [ question, setQuestion ] = useState('')
  const [ template , setTemplate ] = useState('')
  const [ awitTemplate , setAwitTemplate ] = useState('')
  const [ inputs, setInputs ] = useState([])
  const [ outputs, setOutputs ] = useState([])
  const [ userOutput , setUserOutput ] = useState('')
  const [ visible , setVisible] = useState(false)
  const [ text, setText ] = useState('')

  const Toast = (str) => toast(str);
  const queryParams = new URLSearchParams(location.search);
  const qType = queryParams.get('qType');
  useEffect(()=>{
    initialQ.length = 0;
    let questionData ;
    if(qType=='easy'){
      questionData = easyQ
    }else if(qType=='medium'){
      questionData = mediumQ
    }else if(qType=='hard'){
      questionData = hardQ
    }
    let tempCount = 0
    questionData.map(item=>{
        initialQ.push(item)
        tempCount++ 
    })
    setCountQuestion(tempCount)
    updateProblem(count)
  },[qType])
  
  function goHome(){
    setVisible(true)
    setText('You Wanna Go Home?')
    console.log('You Wanna Go Home')
  }
  function submitCode(){
    setVisible(true)
    if(isCodeCorrect){
      setText("Code Correct")
    }else{
      setText("Code Wrong!. You must complete the Code First")
    }
  }
  function updateProblem(count){
    setCount(count)
    setQuestion(initialQ[count].question)
    setAwitTemplate(initialQ[count].template)
    setTemplate(initialQ[count].template)
    const testcases = initialQ[count].testCases;
    setInputs(testcases.map(item => item.exe.substring(item.exe.indexOf('(') + 1, item.exe.indexOf(')') + 1)));
    setOutputs(testcases.map(item => item.answer));
    setIsCodeCorrect(!isCodeCorrect)
    setUserOutput("")
  }
  function handleTemplate(text){
    setTemplate(text)
     if(template.length == awitTemplate.length-1){
      setTemplate(awitTemplate)
    }
  }
  function checkOutput(array1, array2) {
    if (array1.length === array2.length) {
      for (let i = 0; i < array1.length; i++) {
        if (String(array1[i]) !== String(array2[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  function checkCode(){
    axios.post('http://localhost:3003/single', {code :template})
          .then(response=>{
            const message = response.data.message
            if(message.includes('error')){
              Toast("Code Error")
            }else{
             setUserOutput(message) 
             
             let tempOutput = message.split(/\r?\n/)
             if(tempOutput.length>2){
                tempOutput.pop()
             }
              const checkArrays = checkOutput(outputs, tempOutput)
              if(checkArrays){
                Toast("Code Correct")
              }else{
                Toast("Code Error")
              }
              setIsCodeCorrect(checkArrays)
              console.log(tempOutput, outputs)
            }
          })
          .catch(error=>{
            console.log(error)
          })
  }

  return (
     <>
    <div className="containerSingle">
      <div className="solution">
        <h1>SOLUTION</h1>
        <div className="code">
          <textarea
            spellCheck="false"
            name="code"
            id="code"
            cols="54"
            rows="14"
            value={template}
            onChange={(e)=> handleTemplate(e.target.value)}
          ></textarea>
        </div>
        <h3>OUTPUT</h3>
        <div className="contentOutput">
          <div className="output" style={{overflow:'auto'}}>
            <pre id="outputText">{userOutput}</pre>
          </div>
          <div className="topbuttons">
            <input type="button" id="check" value="Check" onClick={checkCode} />
            <input type="button" id="submit" value="Submit" onClick={submitCode}  />
          </div>
        </div>
      </div>
      <div className="side">
        <div className="sidePane">
          <div className="problem">
            <div className="problemContent">
              <h1>{qType.toUpperCase()} {count}</h1>
            </div>

            <div className="content">
            <div className="outer_pane">
            <h3>QUESTION</h3>
              <div className="pane">
                <p id="questionProblem">
                  {question}
                </p>
              </div>  
            </div>

             <div className="outer_pane">
             <h3>INPUTS</h3>
              <div className="pane">
                <p>{inputs[0]}</p>
                <p>{inputs[1]}</p>
                <p>{inputs[2]}</p>
              </div>
             </div>

              <div className="outer_pane">
              <h3>OUTPUT</h3>
              <div className="pane">
                <p>{outputs[0]}</p>
                <p>{outputs[1]}</p>
                <p>{outputs[2]}</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonsBtn" style={{display:'flex', alignItems:'baseline', marginTop:'.5em'}}>
          <input type="button" id="next" className="btnCtrl" value="prev" onClick={()=> updateProblem(count-1)} />
          <input type="button" id="prev" className="btnCtrl" value="next" onClick={()=> updateProblem(count+1)} />
          <input type="button" id="home" className="btnCtrl" value="home" onClick={goHome} />
        </div>
      </div>

      
    </div>
     <Modal setVisible={setVisible} text={text} visible={visible}/>
     <ToastContainer />
    </>

  );
}
