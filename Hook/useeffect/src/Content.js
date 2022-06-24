import {useEffect,useState} from "react"

 //1 useEffect(callback)
 //-> gọi callback mỗi khi component re-render
 //-> gọi callback sau khi component thêm element vào dom
 //2 useEffect(callback,[])
 //-> chỉ gọi callback 1 lần khi combonent mount
 //3 useEffect(callback,[deps])
 //-> callback sẽ được gọi mỗi khi deps(giiongs như biến prop) thay dổi

// 1.callback luôn được gọi sau khi component mount
// clearn up function lun được gọi trước khi component unmount
// clearn up function luôn được gọi trước khi callback được gọi (trừ lần mount)

// function Content(){      //1
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

// function Content(){      //2
//    const [title,setTitle]=useState('')
//    const [posts,setPosts]=useState([])
//    useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res=> res.json())
//     .then(posts=>setPosts(posts))
//    },[])
//     return (
//         <div>
//             <input value={title} onChange={e=>{
//                 setTitle(e.target.value)
//             }} />
//             <ul>
//                 {
//                     posts.map((post)=>(
//                         <li key={post.id}>{post.title}</li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

// const codes = ['posts','comments','albums']
// function Content(){       //3
//     const [title,setTitle]=useState('')
//    const [posts,setPosts]=useState([])
//    const [type,setType]=useState('posts')
//    const [showScroll,setShowScroll]=useState(false)
//    useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//     .then(res=>{
//         return res.json()
//     })
//     .then(post=>{
//         setPosts(post)
//     })
//    },[type])

//    useEffect(()=>{
//    const handleScroll=()=>{
//        if(window.scrollY>=200){
//         setShowScroll(true)
//        }else {
//         setShowScroll(false)
//        }
//     }
//     window.addEventListener('scroll',handleScroll)

//     // clearn up function
//     return ()=>{
//         window.removeEventListener('scroll',handleScroll)
//     }
//    },[])
//     return (
//         <div>
//             {codes.map((code)=>(
//                 <button key={code} onClick={()=>{setType(code)}} style={type===code?{color:'#fff',backgroundColor:'#333'}:{}}>{code}</button>
//             ))}
//             <input value={title} onChange={e=>{
//                 setTitle(e.target.value)
//             }} />
//             <ul>
//                 {posts.map(post=>(
//                     <li key={post.id}>{post.title || post.name}</li>
//                 ))}
//             </ul>
//             {showScroll&&<button style={{position:'fixed', right:20,bottom:20}}>call me</button>}
//         </div>
//     )
// }


//  resize
// function Content(){
//     const [width,setWidth]=useState(window.innerWidth)
//     useEffect(()=>{
//         const handleWidth = ()=>{
//             setWidth(window.innerWidth)
//         }
//       window.addEventListener('resize',handleWidth) 
//       return ()=>{
//         window.removeEventListener('resize',handleWidth)
//       }
//     },[])
//     return(
//         <div>{width}</div>
//     )
// }



// timer tạo ứng dụng đếm ngược
// function Content(){
//     const [times,setTimes]=useState(180)
//     useEffect(()=>{
//        const time = setInterval(()=>{
//             setTimes(prevState => prevState-1)
//         },1000)
//         return ()=>{
//             clearInterval(time)
//         } 
//     },[])
//     return (
//         <div>
//             <h1>{times}</h1>
//         </div>
//     )
// }

// tạo ứng dụng chọn nhiều ảnh 
// function Content(){
//     const [avatar,setAvatar]=useState()
//     useEffect(()=>{
//         return ()=>{
//             avatar && URL.revokeObjectURL(avatar.preView)
//         }
//     },[avatar])
//     const handleFile= (e)=>{
//         const file=e.target.files[0]
//         file.preView = URL.createObjectURL(file)
//         setAvatar(file)
//     }
//     return(
//         <div>
//             <input type='file' onChange={handleFile} />
//             {avatar && (<img src={avatar.preView} alt="" width="80%" />)}
//         </div>
//     )
// }
const tag = ['posts','albums','comments']
function Content(){
    const [titles,setTitle]=useState([])
    const [text,setText]=useState('')
    const [but,setBut]=useState('posts')
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${but}`)
        .then(res=>{
            return res.json()
        })
        .then(post=>{
            return setTitle(post)
        })
    },[but])
    return(
        <div>
            {tag.map(ta=>(
                <button key={ta} onClick={()=>{setBut(ta)}} >{ta}</button>
            ))}
            <input  value={text} onChange={(e)=>{
                setText(e.target.value)
            }} />
            <ul>
                {titles.map((title)=>(
                    <li key={title.id}>{title.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Content