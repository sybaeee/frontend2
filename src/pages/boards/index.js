import { BoardHeader, BoardListWrap, BoardSearch, BoardTableHeader, BoardTableRow, Line, SearchBtn, SearchWrap, WriteBtn } from "@/styles/boards/boardList.styles";
import { ArrowBtn, ArrowWrap, Carousel, CarouselContents, CarouselDetail, CarouselItem, CarouselTextWrap, CarouselTitle, JoinBtn, LoginBtn, MainHeader, MainNav, MenuItem, MenuWrap, NavBtnWrap, Pin, PinItem } from "@/styles/boards/boardWrtie.styles";
import { Footer, FooterWrap } from "@/styles/common/footer.styles";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const BoardsListPage = ()=>{
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    axios.get('http://koreanjson.com/posts')
    .then(res=>setPosts(res.data))
    .catch((err)=>{console.log(err)});
  }, []);
  return(
    <>
    <MainHeader>
        <MainNav>
          <Image src={'/logo.svg'} width={200} height={100} alt="logo image"/>
          <NavBtnWrap>
            <LoginBtn>로그인</LoginBtn>
            <JoinBtn>회원가입</JoinBtn>
          </NavBtnWrap>
        </MainNav>
        <Carousel>
          <CarouselContents>
            <CarouselItem>
              <CarouselTextWrap>
                <CarouselTitle>내가 만드는 사이트</CarouselTitle>
                <CarouselDetail>이곳은 Carousel 메뉴가 적용되는 곳입니다</CarouselDetail>
              </CarouselTextWrap>
            </CarouselItem>
          </CarouselContents>

          <ArrowWrap>
            <ArrowBtn>{'<'}</ArrowBtn>
            <ArrowBtn>{'>'}</ArrowBtn>
          </ArrowWrap>

          <Pin>
            <PinItem current/>
            <PinItem/>
            <PinItem/>
          </Pin>

        </Carousel>

        <MenuWrap>
          <MenuItem current>게시판</MenuItem>
          <MenuItem>할일 목록</MenuItem>
          <MenuItem>내정보보기</MenuItem>
        </MenuWrap>
      </MainHeader>

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
        posts.map(
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
    <Footer>
      <FooterWrap>
        <p>푸터영역입니다</p>
      </FooterWrap>
    </Footer>
    </>
  );
}

export default BoardsListPage;