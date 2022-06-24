
import { useState } from 'react'
import './App.css'

// function App() {
//   const [count,setCount]=useState(1)
//   // const handleClick = ()=>{
//   //    setCount(count+1)
//   // }
//   // sử dụng callback để gọi 
//   const handleClick = ()=>{
//        setCount(prevCount=>prevCount+1)
//        setCount(prevCount=>prevCount+1)
//        setCount(prevCount=>prevCount+1)
//     }
//   return (
//     <div className="App" style={{padding:20}}>
//      <h1>{count}</h1>
//      <button onClick={handleClick}>increase</button>
//     </div>
//   );
// }

// trường hợp phức tạp hơn
// const array = [200,300,400]
// function App() {

//   const [count,setCount]=useState(()=>{
//     const total = array.reduce((a,b)=>{
//       return a+b
//     })
//     return total
//   })
//   const handleClick = ()=>{
//        setCount(count+1)

//     }
//   return (
//     <div className="App" style={{padding:20}}>
//      <h1>{count}</h1>
//      <button onClick={handleClick}>increase</button>
//     </div>
//   );
// }

// bài tập random gift
// const gift = ['cpu i9','ram 32gb','keybord']
// function App(){
//   const [name,setName] = useState()
//   const randomGift = ()=>{
//       const index = Math.floor(Math.random()*gift.length)

//       setName(gift[index])
//   }
//   return (
//     <div className="App" style={{padding:20}}>
//       <h1>{name || 'chưa có phần thưởng'}</h1>
//       <button onClick={randomGift}>lấy thưởng</button>
//     </div>
//   )
// }

// two way binding
// function App(){
//   const [name,setName]=useState('')
//   const [email,setEmail]=useState('')
//  const handleClick=()=>{

//     }

//   return (
//     <div>
//       <input
//       value={name}
//       onChange={(e)=>{
//         setName(e.target.value)
//       }} />
//        <input
//       value={email}
//       onChange={(e)=>{
//         setEmail(e.target.value)
//       }} />

//       <button onClick={handleClick}>register</button>
//     </div>
//   )
//     }

// bt todolist

function App() {

  const [job, setJob] = useState("")
  const [jobs, setJobs] = useState(() => {
    const storagejob = JSON.parse(localStorage.getItem('jobs'))
    return storagejob
  })
  const handleAdd = () => {
    setJobs(prev => {
      const newjob = [...prev, job]
      const jsonjob = JSON.stringify(newjob)
      localStorage.setItem("jobs", jsonjob)
      return newjob
    })
    setJob('')
  }
  return (
    <div style={{ padding: 20 }}>
      <input value={job} onChange={e => {
        setJob(e.target.value)
      }} />
      <button onClick={handleAdd}>add</button>
      <ul>
        {jobs.map((job, index) => (
          
          <li key={index} >{job}</li>
         
        ))}

      </ul>
    </div>
  )
}

// function App(){
//   const [job,setJob]=useState('')
//   const [jobs,setJobs]=useState([])
//   const handleClick = ()=>{
//     setJobs(prev=>[...prev,job])
//     setJob('')
//   }
//   return(
//     <div>
//       <input value={job} onChange={e=>{
//         setJob(e.target.value)
//       }} />
//       <button onClick={handleClick}>add</button>
//       <ul>
//         {jobs.map((job,index)=>(
//           <li key={index}>{job}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

export default App;
