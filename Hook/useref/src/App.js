//import {useState,useRef,useEffect} from 'react'
import{useState} from 'react'
import Content from './Content';
import './App.css';

// function App() {
//   const [count,setCount]=useState(60)

//  const timerID = useRef()
//  const prevCount = useRef()
//  const h1Ref = useRef()


//  useEffect(()=>{
//   prevCount.current=count
//  },[count])

//  useEffect(()=>{
//   const rect = h1Ref.current.getBoundingClientRect() //lấy tọa độ
//   console.log(rect)
//  })
//   //lưu các giái trị qua 1 tham chiếu bên ngoài
//   //function component
//   const handleStart=()=>{
//      timerID.current=setInterval(()=>{
//       setCount(prevCount=>prevCount-1)
//     },1000)
//     console.log('start -->', timerID.current)
//   }
//   const handleStop=()=>{
//     clearInterval(timerID.current)
//     console.log('stop -->', timerID.current)
//   }
//   console.log(count,prevCount.current)
//   return (
//     <div className="App">
//       <h1 ref={h1Ref}>{count}</h1>
//       <button onClick={handleStart}>start</button>
//       <button onClick={handleStop}>stop</button>
//     </div>
//   );
// }


// react memo  (có nhiều state đôi khi có state render lại mà có những component bên dưới ko cần render dùng state)
//1. memo() => higher order component (HOC)
// useCallBack()

//hook
// hoc
//render props
function App(){
  const [count,setCount]=useState(0)
  const increse=()=>{
    setCount(count+1)
  }
  return(
    <div>
      <Content />
      <h1>{count}</h1>
      <button onClick={increse}>click me</button>
    </div>
  )
}


export default App;
