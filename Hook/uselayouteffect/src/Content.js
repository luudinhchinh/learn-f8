import {useLayoutEffect,useEffect,useState} from 'react'

//   useEffect
//1 cập nhật lại state
//2 cập nhật lại dom
//3 render lại ui
//4 gọi clearn up nếu dep thay đổi
//5 gọi useEffect callback

// useLayoutEffect > sự khác nhau là render ui cuối cùng
//1 cập nhật lại state
//2 cập nhật lại dom
//3 gọi clearn up nếu dep thay đổi(sync)
//4 gọi useLayoutEffect callback(sync)
//5 render lại ui

function Content(){
    const [count,setCount]=useState(0)
    useLayoutEffect(()=>{
        if(count>3){
            setCount(0)
        }
    },[count])
    const handleRun=()=>{
        setCount(count+1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>run</button>
        </div>
    )
}
export default Content