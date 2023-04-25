import Layout from "@/components/common/layout";
import {  BoardMain, BoardWriteContentInput, BoardWriteInput, BoardWriteInputFlexContainer, BoardWriteInputLabel, BoardWriteInputWrap, BoardWriteTitle, BoardWriteWrap,  ErrMsg, PostBtn, RequiredMark, ZipBtn } from "@/styles/boards/boardWrtie.styles";

const BoardWriteUI = (props)=>{
  const {
    writerErrMsg,
    writerInputRef,
    contentErrMsg,
    contentInputRef,
    titleErrMsg,
    titleInputRef,
    passwordErrMsg,
    passwordInputRef,
    onWriteBtnClick
  } = props;
  return(
    <Layout>

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
  </Layout>
  );
}

export default BoardWriteUI;