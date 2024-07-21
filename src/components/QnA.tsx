import React from "react";
import styled from "@emotion/styled";
import viewIcon from "../assets/viewIcon.png";
import commentIcon from "../assets/commentIcon.png";

/*dummy
const quizData = {
  question:
    "좋은 리더의 자질은 무엇일까요?좋은 리더의 자질은 무엇일까요?좋은 리더의 자질은 무엇일까요?",
  viewCount: 32,
  commentCount: 32,
  comments: [
    {
      nickname: "닉네임1",
      content:
        "좋은 리더는 팀원들과의 협력을 장려하고, 또한 다른 사람들의 리더십 능력을 발전시키는 데에도 주도적으로 기여하는 사람이다.",
    },
    {
      nickname: "닉네임2",
      content:
        "좋은 리더는 팀원들과의 협력을 장려하고, 또한 다른 사람들의 리더십 능력을 발전시키는 데에도 주도적으로 기여하는 사람이다.",
    },
  ],
};

*/

// 댓글 정보를 나타내는 타입 정의
type Comment = {
  nickname: string;
  content: string;
};

type QnAProps = {
  question: string;
  viewCount: number;
  commentCount: number;
  comments?: Comment[];
};

const QnA: React.FC<QnAProps> = ({
  question,
  viewCount,
  commentCount,
  comments,
}) => {
  return (
    <QuizContainer>
      <Title>{question}</Title>
      <InfoContainer>
        <InfoItem>
          <ViewIconStyled src={viewIcon} alt="조회수아이콘" />
          <InfoText>{viewCount}</InfoText>
        </InfoItem>
        <InfoItem>
          <CommentIconStyled src={commentIcon} alt="댓글수아이콘" />
          <InfoText>{commentCount}</InfoText>
        </InfoItem>
      </InfoContainer>

      {comments &&
        comments.map((comment, index) => (
          <CommentContainer key={index}>
            <Nickname>{comment.nickname}</Nickname>
            <CommentContent>{comment.content}</CommentContent>
          </CommentContainer>
        ))}
    </QuizContainer>
  );
};

export default QnA;

const QuizContainer = styled.div`
  background-color: #f4f4f7;
  padding: 20px;
  border-radius: 20px;
  width: 1216px;
  margin-bottom: 60px;
  min-width: 1000px;
  white-space: nowrap;
  margin: 0 auto;
  margin-bottom: 60px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  font-family: Pretendard;
  color: #000;
  line-height: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  margin: 50px 112px 10px 112px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 61px;
  margin-bottom: 20px;
  margin-right: 60px;
  margin-bottom: 38px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const InfoText = styled.span`
  font-size: 16px;
  color: #463efb;
`;

const ViewIconStyled = styled.img`
  width: 25px;
  height: 25px;
  fill: #463efb;
`;

const CommentIconStyled = styled.img`
  width: 20px;
  height: 20px;
  fill: #463efb;
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  margin-right: 99px;
`;

const Nickname = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #463efb;
  margin-right: 10px;
  margin-left: 60px;
  min-width: 130px;
`;

const CommentContent = styled.div`
  font-size: 16px;
  color: #000;
`;
