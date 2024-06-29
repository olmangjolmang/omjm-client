import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ReactComponent as SaveIcon } from "../assets/saveIcon.svg";

// 게시물 정보를 나타내는 타입 정의
type PostItemProps = {
  id: string;
  imageUrl: string;
  category: string;
  title: string;
  author: string;
  createdAt: string;
  summary?: string;
  isSavedIconLoad: boolean;
  isSaved: boolean;
};

const PostItemMain: React.FC<PostItemProps> = ({
  id,
  imageUrl,
  category,
  title,
  author,
  summary,
  isSaved,
  createdAt,
  isSavedIconLoad,
}) => {
  return (
    <Container>
      <Image src={imageUrl} alt="미리보기 이미지" />
      <CategoryRow>
        <Category>{category}</Category>
        {isSavedIconLoad && <StyledSaveIcon isSaved={isSaved} />}
      </CategoryRow>
      <Title>{title}</Title>
      {summary && <Summary>{summary}</Summary>}
      <Author hasSummary={!!summary}>
        {author} {createdAt}
      </Author>
    </Container>
  );
};

export default PostItemMain;

/*
상위 페이지에서 다음과 같이 렌더링 가능
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
*/

// 스타일드 컴포넌트 정의
const Container = styled.div`
  width: 379px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 379px;
  height: 240px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 20px;
`;

const CategoryRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px; // Category와 SavedBadge 사이에 공간 추가
  margin-top: 14px;
  margin-bottom: 7px;
`;

const Category = styled.div`
  color: #463efb;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  gap: 15px;
  display: inline-flex;
  padding: 10px 15px;
  background-color: #f4f4f7;
`;

const Title = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  font-family: Pretendard;
  letter-spacing: -0.12px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-left: 10px;
  height: 72px;
`;

const Summary = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.09px;
  color: #afafb6;
  margin-left: 10px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const Author = styled.div<{ hasSummary: boolean }>`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.08px;
  margin-left: 10px;
  color: #7f7f86;
  ${({ hasSummary }) => css`
    margin-top: ${hasSummary ? "7px" : "11px"};
  `}
`;

const StyledSaveIcon = styled(SaveIcon)<{ isSaved: boolean }>`
  width: 16.667px;
  height: 25.976px;
  flex-shrink: 0;
  fill: ${({ isSaved }) =>
    isSaved ? "#463efb" : "#ffffff"}; // 조건에 따라 색상 변경
  margin-right: 21.67px;
  stroke-width: 3px;
  stroke: #463efb;
`;
