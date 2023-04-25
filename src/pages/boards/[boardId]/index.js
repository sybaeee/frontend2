import { BoardContent, BoardDetailWrap, BoardInfoWrap, BoardTitle } from "@/styles/boards/boardDetail.styles";
import { WriteBtn } from "@/styles/boards/boardList.styles";
import { ArrowBtn, ArrowWrap, Carousel, CarouselContents, CarouselDetail, CarouselItem, CarouselTextWrap, CarouselTitle, JoinBtn, LoginBtn, MainHeader, MainNav, MenuItem, MenuWrap, NavBtnWrap, Pin, PinItem } from "@/styles/boards/boardWrtie.styles";
import { Footer, FooterWrap } from "@/styles/common/footer.styles";
import Image from "next/image";

const BoardDetailPage = ()=>{
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
          게시글 제목입니다
        </BoardTitle>
        <BoardInfoWrap>
          <p>작성자id</p>
          <p>1</p>
          <p>게시글id</p>
          <p>13</p>
        </BoardInfoWrap>
        <BoardInfoWrap>
          <p>작성일자</p>
          <p>2023-04-04</p>
          <p>수정일자</p>
          <p>2023-04-06</p>
        </BoardInfoWrap>
        <BoardContent>
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
          게시글내용입니다
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