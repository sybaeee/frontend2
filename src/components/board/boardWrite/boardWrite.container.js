import BoardWriteUI from "./boardWrite.presenter";
import { useRef, useState } from "react";

const BoardWrite = ()=>{
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

    
    
    if(!content){
      setContentErrMsg('내용은 필수 입력 값입니다');
      check=true;
      contentInputRef.current.focus();
    }else{
      setContentErrMsg('');
    }
    
    
    if(!title){
      setTitleErrMsg('제목은 필수 입력 값입니다');
      check=true;
      titleInputRef.current.focus();
    }else{
      setTitleErrMsg('');
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
    
    if(!writer){
      setWriterErrMsg('작성자는 필수 입력 값입니다');
      check=true;
      writerInputRef.current.focus();
    }else{
      setWriterErrMsg('');
    }
    console.log('ddd')
    
    if(!check){
      // 작성 성공했다는 의미
      alert('성공');
    }

  }

  return(
    <BoardWriteUI 
      writerErrMsg={writerErrMsg}
      passwordErrMsg={passwordErrMsg}
      titleErrMsg={titleErrMsg}
      contentErrMsg={contentErrMsg}
      writerInputRef={writerInputRef}
      contentInputRef={contentInputRef}
      titleInputRef={titleInputRef}
      passwordInputRef={passwordInputRef}
      onWriteBtnClick={onWriteBtnClick}
    />
  );
}
export default BoardWrite;