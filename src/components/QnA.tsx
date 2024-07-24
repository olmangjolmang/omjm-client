import styled from "@emotion/styled";
import viewIcon from "../assets/viewIcon.png";
import commentIcon from "../assets/commentIcon.png";
import { useNavigate, useLocation } from "react-router-dom";

// 댓글 정보를 나타내는 타입 정의
type Comment = {
  nickname: string;
  content: string;
};

type QnAProps = {
  opinionId: number;
  question: string;
  viewCount: number;
  commentCount: number;
  comments?: Comment[];
};

const QnA = ({
  opinionId,
  question,
  viewCount,
  commentCount,
  comments,
}: QnAProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    navigate(`/ticleQna/${opinionId}`, {
      state: { from: location.pathname + location.search },
    });
  };

  return (
    <QuizContainer onClick={handleNavigate}>
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
