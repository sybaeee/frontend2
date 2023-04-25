import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BoardDetail = ()=>{
  const [post, setPost] = useState(null);
  const router = useRouter(); // router.query.boardId 에는 사용자가 주소에 입력한 값이문자열로 들어있음

  // 최초 렌더링 할 때 해당 게시글에 대한 데이터 요청
  useEffect(()=>{
    axios.get(`https://koreanjson.com/posts/${router.query.boardId}`)
    .then((res)=>{setPost(res.data)})
    .catch((err)=>{console.log(err)});
  }, []);

  return (
    <BoardDetailUI post={post}/>
  );
}

export default BoardDetail;