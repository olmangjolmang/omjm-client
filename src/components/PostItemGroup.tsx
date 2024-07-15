import React from "react";
import styled from "styled-components";
import PostItemMain from "./PostItemMain";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const PostItemGroup: React.FC = () => {
  return (
    <Container>
      <PostItemMain
        id="2"
        imageUrl={articleImg}
        category="카테고리고리고리"
        title="이것은 예제 제목입니다. 제목이 길어질 경우에 대해 처리합니다."
        author="작성자 이름"
        summary="텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
        createdAt="2000"
        isSaved={true}
        isSavedIconLoad={true}
      />
      <PostItemMain
        id="4"
        imageUrl={articleImg}
        category="카테고리고리고리"
        title="이것은 예제 제목입니다. 제목이 길어질 경우에 대해 처리합니다."
        author="작성자 이름"
        summary="텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
        createdAt="2000"
        isSaved={true}
        isSavedIconLoad={true}
      />
      <PostItemMain
        id="3"
        imageUrl={articleImg}
        category="카테고리고리고리"
        title="이것은 예제 제목입니다. 제목이 길어질 경우에 대해 처리합니다."
        author="작성자 이름"
        summary="텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
        createdAt="2000"
        isSaved={true}
        isSavedIconLoad={true}
      />
    </Container>
  );
};

export default PostItemGroup;
