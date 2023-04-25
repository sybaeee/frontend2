import { BoardContent, BoardDetailWrap, BoardInfoWrap, BoardTitle } from "@/styles/boards/boardDetail.styles";
import { WriteBtn } from "@/styles/boards/boardList.styles";
import { ArrowBtn, ArrowWrap, Carousel, CarouselContents, CarouselDetail, CarouselItem, CarouselTextWrap, CarouselTitle, JoinBtn, LoginBtn, MainHeader, MainNav, MenuItem, MenuWrap, NavBtnWrap, Pin, PinItem } from "@/styles/boards/boardWrtie.styles";
import { Footer, FooterWrap } from "@/styles/common/footer.styles";
import axios from "axios";
import Image from "next/image";
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
    <>
      <MainHeader>
        <MainNav>
          <Image src={'/logo.svg'} width={200} height={100}/>
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
      <Footer>
        <FooterWrap>
          <p>footer 영역입니다</p>
        </FooterWrap>
      </Footer>
    </>
  );
}

export default BoardDetailPage;