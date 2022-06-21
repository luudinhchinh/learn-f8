import {useEffect,useState} from "react"

 //1 useEffect(callback)
 //-> gọi callback mỗi khi component re-render
 //-> gọi callback sau khi component thêm element vào dom
 //2 useEffect(callback,[])
 //-> chỉ gọi callback 1 lần khi combonent mount
 //3 useEffect(callback,[deps])

// 1.callback luôn được gọi sau khi component mount
// function Content(){
//     const [title,setTitle]=useState("")
//     const [posts,setPosts]=useState([])
//    useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//      .then(e=>{
//         return e.json()
//      })
//      .then(posts=>{
//         setPosts(posts)
//      })
//    },[])
//     return (
//         <div>
//             <input value={title} onChange={e=>{
//                 setTitle(e.target.value)
//             }} />
//             <ul>
//                 {posts.map((post)=>(
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

function Content(){
   const [title,setTitle]=useState('')
   const [posts,setPosts]=useState([])
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(posts=>setPosts(posts))
   },[])
    return (
        <div>
            <input value={title} onChange={e=>{
                setTitle(e.target.value)
            }} />
            <ul>
                {
                    posts.map((post)=>(
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

// function Content(){
   
//     return (
//         <div>
//             <h1>hello anh em</h1>
//         </div>
//     )
// }
export default Content