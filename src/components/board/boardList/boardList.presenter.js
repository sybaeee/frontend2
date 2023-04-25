import Layout from "@/components/common/layout";
import { BoardHeader, BoardListWrap, BoardSearch, BoardTableHeader, BoardTableRow, Line, SearchBtn, SearchWrap, WriteBtn } from "@/styles/boards/boardList.styles";

const BoardListUI = (props)=>{
  return(
    <Layout>
      <BoardListWrap>
        <h1>게시글 목록</h1>
        <Line/>
        <BoardHeader>
          <p>게시글</p>
          <SearchWrap>
            <BoardSearch/>
            <SearchBtn>검색</SearchBtn>
          </SearchWrap>
        </BoardHeader>
        <BoardTableHeader>
          <p>NO</p>
          <p>제목</p>
          <p>작성자id</p>
          <p>작성일자</p>
          <p>수정일자</p>
        </BoardTableHeader>
        {
          props.posts.map(
            (v, index)=>
            <BoardTableRow key={v.id}>
              <p>{index + 1}</p>
              <p>{v.title}</p>
              <p>{v.UserId}</p>
              <p>{v.createdAt}</p>
              <p>{v.updatedAt}</p>
            </BoardTableRow>
          )
        }
        <WriteBtn>글쓰기</WriteBtn>
      </BoardListWrap>
    </Layout>
  );
}

export default BoardListUI;