import { ArrowBtn, ArrowWrap, BoardMain, BoardWriteContentInput, BoardWriteInput, BoardWriteInputFlexContainer, BoardWriteInputLabel, BoardWriteInputWrap, BoardWriteTitle, BoardWriteWrap, Carousel, CarouselContents, CarouselDetail, CarouselItem, CarouselTextWrap, CarouselTitle, ErrMsg, JoinBtn, LoginBtn, LogoImg, MainHeader, MainNav, MenuItem, MenuWrap, NavBtnWrap, Pin, PinItem, PostBtn, RequiredMark, ZipBtn } from "@/styles/boards/boardWrtie.styles";
import Image from "next/image";
import { useRef, useState } from "react";

const BoardWritePage = ()=>{
  const [writerErrMsg, setWriterErrMsg] = useState('');
  const [passwordErrMsg, setPasswordErrMsg] = useState('');
  const [titleErrMsg, setTitleErrMsg] = useState('');
  const [contentErrMsg, setContentErrMsg] = useState('');

  const writerInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const titleInputRef = useRef(null);
  const contentInputRef = useRef(null);

  const onWriteBtnClick = ()=>{
    const writer = writerInputRef.current.value; // 사용자가 입력한 작성자
    const title = titleInputRef.current.value; // 사용자가 입력한 제목
    const password = passwordInputRef.current.value; // 사용자가 입력한 비밀번호
    const content = contentInputRef.current.value; // 사용자가 입력한 게시글 내용

    let check = false;

    if(!writer){
      setWriterErrMsg('작성자는 필수 입력 값입니다');
      check=true;
      writerInputRef.current.focus();
    }else{
      setWriterErrMsg('');
    }

    if(!title){
      setTitleErrMsg('제목은 필수 입력 값입니다');
      check=true;
      titleInputRef.current.focus();
    }else{
      setTitleErrMsg('');
    }

    if(!content){
      setContentErrMsg('내용은 필수 입력 값입니다');
      check=true;
      contentInputRef.current.focus();
    }else{
      setContentErrMsg('');
    }

    const pwRegExp = /^\d{4}$/;
    if(password && !pwRegExp.test(password)){
      setPasswordErrMsg('비밀번호는 숫자 네 자리만 입력가능합니다');
      check=true;
      passwordInputRef.current.value = '';
      passwordInputRef.current.focus();
    }else{
      setPasswordErrMsg('');
    }

    if(!check){
      // 작성 성공했다는 의미
    }

  }

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

      <BoardMain>
        <BoardWriteWrap>
          <BoardWriteTitle>게시물 등록</BoardWriteTitle>
          <BoardWriteInputFlexContainer>
            <BoardWriteInputWrap id="writer-input">
              <BoardWriteInputLabel  htmlFor='writer'>작성자<RequiredMark>*</RequiredMark></BoardWriteInputLabel>
              <BoardWriteInput ref={writerInputRef} type='text' id="writer" placeholder='작성자를입력하시오'/>
              <ErrMsg>{writerErrMsg}</ErrMsg>
            </BoardWriteInputWrap>
            <BoardWriteInputWrap id="pw-input">
              <BoardWriteInputLabel htmlFor='post-pw'>비밀번호</BoardWriteInputLabel>
              <BoardWriteInput ref={passwordInputRef} type='password' id="post-pw" placeholder='비밀번호를 입력하시오'/>
              <ErrMsg>{passwordErrMsg}</ErrMsg>
            </BoardWriteInputWrap>
            <BoardWriteInputWrap>
              <BoardWriteInputLabel htmlFor='post-title'>제목<RequiredMark>*</RequiredMark></BoardWriteInputLabel>
              <BoardWriteInput ref={titleInputRef} type='text' id="post-title" placeholder='제목을 입력하시오'/>
              <ErrMsg>{titleErrMsg}</ErrMsg>
            </BoardWriteInputWrap>
            <BoardWriteInputWrap>
              <BoardWriteInputLabel htmlFor='post-detail'>내용<RequiredMark>*</RequiredMark></BoardWriteInputLabel>
              <BoardWriteContentInput ref={contentInputRef} type='text' id="post-detail" placeholder='제목을 입력하시오'/>
              <ErrMsg>{contentErrMsg}</ErrMsg>
            </BoardWriteInputWrap>
            <BoardWriteInputWrap>
              <BoardWriteInputLabel>주소</BoardWriteInputLabel>
              <div>
                <BoardWriteInput id="zip-input" type="text" readOnly value={"01234"}/>
                <ZipBtn>우편번호 조회</ZipBtn>
              </div>
              <BoardWriteInput type="text"/>
              <BoardWriteInput type="text"/>
            </BoardWriteInputWrap>

            <BoardWriteInputWrap>
              <BoardWriteInputLabel>권한설정</BoardWriteInputLabel>
              <div>
                <BoardWriteInput type="radio" name="prev" id="public" defaultChecked/>
                <BoardWriteInputLabel htmlFor="public">공개</BoardWriteInputLabel>
                <BoardWriteInput type="radio" name="prev" id="private" />
                <BoardWriteInputLabel htmlFor="private">비공개</BoardWriteInputLabel>
              </div>
            </BoardWriteInputWrap>
          </BoardWriteInputFlexContainer>
          <PostBtn onClick={onWriteBtnClick}>등록하기</PostBtn>
        </BoardWriteWrap>
      </BoardMain>
    </>
  );
}

export default BoardWritePage;