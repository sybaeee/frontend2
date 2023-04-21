import { BoardHeader, BoardListWrap, BoardSearch, BoardTableHeader, BoardTableRow, Line, SearchBtn, SearchWrap, WriteBtn } from "@/styles/boards/boardList.styles";
import { ArrowBtn, ArrowWrap, Carousel, CarouselContents, CarouselDetail, CarouselItem, CarouselTextWrap, CarouselTitle, JoinBtn, LoginBtn, MainHeader, MainNav, MenuItem, MenuWrap, NavBtnWrap, Pin, PinItem } from "@/styles/boards/boardWrtie.styles";
import Image from "next/image";

const BoardsListPage = ()=>{
  return(
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
      <BoardTableRow>
        <p>1</p>
        <p>정당</p>
        <p>1</p>
        <p>2019-02-24</p>
        <p>2019-02-24</p>
      </BoardTableRow>
      <BoardTableRow>
        <p>2</p>
        <p>정당의 목적</p>
        <p>1</p>
        <p>2019-02-24</p>
        <p>2019-02-24</p>
      </BoardTableRow>
      <BoardTableRow>
        <p>3</p>
        <p>정당의 목적이나 해산을 제소</p>
        <p>1</p>
        <p>2019-02-24</p>
        <p>2019-02-24</p>
      </BoardTableRow>
      <BoardTableRow>
        <p>4</p>
        <p> 헌법재판소</p>
        <p>1</p>
        <p>2019-02-24</p>
        <p>2019-02-24</p>
      </BoardTableRow>
      <BoardTableRow>
        <p>5</p>
        <p>정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.</p>
        <p>1</p>
        <p>2019-02-24</p>
        <p>2019-02-24</p>
      </BoardTableRow>
      <WriteBtn>글쓰기</WriteBtn>
    </BoardListWrap>
    </>
  );
}

export default BoardsListPage;