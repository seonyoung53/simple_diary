import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //   const [author, setAuthor] = useState("");
  //   const [content, setContent] = useState("");

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
          //   onChange={(e) => {
          //     setState({
          //       ...state,
          //       author: e.target.value,
          //       // 순서대로 업데이트 되기 때문에
          //       // 바뀌어야할 상태가 가장 마지막에 있어야 함
          //     });
          //   }}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
          //   onChange={(e) => {
          //     setState({
          //       ...state,
          //       content: e.target.value,
          //     });
          //   }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
