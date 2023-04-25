import BoardListUI from "./boardList.presenter";
import axios from "axios";
import { useEffect, useState } from "react";

const BoardList = ()=>{
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    axios.get('http://koreanjson.com/posts')
    .then(res=>setPosts(res.data))
    .catch((err)=>{console.log(err)});
  }, []);

  return(<BoardListUI posts={posts}/>);
}

export default BoardList;