import Layout from "@/components/common/layout";
import { BoardContent, BoardDetailWrap, BoardInfoWrap, BoardTitle } from "@/styles/boards/boardDetail.styles";
import { WriteBtn } from "@/styles/boards/boardList.styles";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BoardDetailPage = ()=>{
  const [post, setPost] = useState(null);
  const router = useRouter(); // router.query.boardId 에는 사용자가 주소에 입력한 값이문자열로 들어있음

  // 최초 렌더링 할 때 해당 게시글에 대한 데이터 요청
  useEffect(()=>{
    axios.get(`https://koreanjson.com/posts/${router.query.boardId}`)
    .then((res)=>{setPost(res.data)})
    .catch((err)=>{console.log(err)});
  }, []);

  return (
    <Layout>
      
      <BoardDetailWrap>
        <BoardTitle>
          {post?.title}
        </BoardTitle>
        <BoardInfoWrap>
          <p>작성자id</p>
          <p>{post?.userId}</p>
          <p>게시글id</p>
          <p>{post?.id}</p>
        </BoardInfoWrap>
        <BoardInfoWrap>
          <p>작성일자</p>
          <p>{post?.createdAt}</p>
          <p>수정일자</p>
          <p>{post?.updatedAt}</p>
        </BoardInfoWrap>
        <BoardContent>
          {post?.content}
        </BoardContent>
        <WriteBtn>수정하기</WriteBtn>
      </BoardDetailWrap>

    </Layout>
  );
}

export default BoardDetailPage;