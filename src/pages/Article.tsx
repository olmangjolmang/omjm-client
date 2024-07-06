import React, { useState, MouseEvent } from "react";
import styled from "styled-components";
import articleImg from "../assets/article.png";
import QuizModal from "../components/QuizModal";
import FloatingButtons from "../components/FloatingButtons";
import HighlightModal from "../components/HighlightModal";
import ticlearticle from "../assets/ticlearticle.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 160px 180px;
`;

const Category = styled.div`
  display: inline-flex;
  padding: 15px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 500;
  color: #463efe;
  border-radius: 40px;
  border: 2px solid var(--Blue-300, #463efb);
  margin-bottom: 39px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 18px;
`;

const AuthorBox = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 94px;
`;

const Author = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Date = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

const Img = styled.img`
  width: 1080px;
  height: 590.625px;
  margin-bottom: 94px;
`;

const Content = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  white-space: pre-wrap;
  margin-bottom: 94px;
  position: relative;
`;

const Highlight = styled.span`
  background-color: yellow;
`;

const Line = styled.div`
  height: 1px;
  width: 1080px;
  background: #afafb6;
  margin-bottom: 94px;
`;

const QuizContainer = styled.div`
  background-color: #f4f4f7;
  width: 1080px;
  height: 320px;
  flex-shrink: 0;
  border-radius: 30px;
  display: flex;

  align-items: center;
  flex-direction: row;
  margin-bottom: 94px;
`;
const QuizContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TicleImg = styled.img`
  width: 269.996px;
  height: 228px;
  margin-right: 70px;
  margin-left: 120px;
`;

const QuizTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 38px;
  line-height: 150%;
`;

const QuizTime = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 34px;
`;

const QuizBtn = styled.button`
  display: inline-flex;
  padding: 21px 176px;
  width: 500px;
  height: 66px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: none;
  background-color: #463efb;
  color: white;
  font-size: 20px;
  font-weight: 600;
  flex-shrink: 0;
  white-space: nowrap;
  cursor: pointer;
`;

const BottomArticleTitle = styled.div`
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 40px;
  align-self: flex-start;
`;

const GoodArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const GoodArticleImg = styled.img`
  width: 379px;
  height: 240px;
  border-radius: 20px;
`;

const GoodArticleCategory = styled.div`
  color: #463efb;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0 24px 20px;
`;

const GoodArticleTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  width: 275px;
  margin-left: 10px;
  margin-bottom: 18px;
`;

const GoodArticleAuthor = styled.div`
  color: #7f7f86;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  margin-left: 10px;
`;

const Overlay = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isModalOpen }) => (isModalOpen ? "block" : "none")};
  z-index: 999;
`;

const Article: React.FC = () => {
  const [isQuizModalOpen, setIsQuizModalOpen] = useState<boolean>(false);
  const [isHighlightModalOpen, setIsHighlightModalOpen] =
    useState<boolean>(false);
  const [highlightedText, setHighlightedText] = useState<string>("");
  const [highlightedRange, setHighlightedRange] = useState<{
    start: number;
    end: number;
  } | null>(null);

  const handleTextHighlight = (e: MouseEvent) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const start = range.startOffset;
      const end = range.endOffset;

      setHighlightedText(selection.toString());
      setHighlightedRange({ start, end });
    }
  };

  const handleSaveNote = (note: string) => {
    console.log("Highlighted Text:", highlightedText);
    console.log("Note:", note);
    setIsHighlightModalOpen(false);
  };

  const handleMenuClick = () => {
    setIsHighlightModalOpen(true);
  };

  const renderHighlightedText = (text: string) => {
    if (!highlightedRange) {
      return text;
    }

    const { start, end } = highlightedRange;
    return (
      <>
        {text.slice(0, start)}
        <Highlight>{text.slice(start, end)}</Highlight>
        {text.slice(end)}
      </>
    );
  };

  return (
    <Container>
      <Category>카테고리</Category>
      <Title>AI 시대에 화웨이가 주목받는다?</Title>
      <AuthorBox>
        <Author>글쓴이</Author>
        <Date>2024-05-11</Date>
      </AuthorBox>
      <Img src={articleImg} alt="기사 이미지" />
      <Content onMouseUp={handleTextHighlight}>
        {renderHighlightedText(
          "요즘 대학생들이 어디서 공부하는지 아시나요? 도서관, 스터디카페도 아닌 바로 ‘무인 카페’, ‘무인 편의점’이래요! 코로나19 이후 교내 편의점이 무인 편의점으로 바뀌고, 캠퍼스 주변에는 무인 카페가 생기면서 자연스레 이용해 보게 되었다고 합니다. 편의점이나 카페 외에도 대학가 상점들이 하나둘씩 무인화되면서 무인 매장을 이용하는 Z세대들이 많아지는 분위기라고 하는데요. 캐릿 1020 자문단에게 무인 매장을 얼마나 자주 이용하는지 직접 물어봤습니다.\n\n🙋‍♂️ “시험 기간만 되면 교내 무인 편의점에 학생들이 바글바글해요” 코로나 이후로 학교 안에 있는 편의점들이 무인 편의점으로 바뀌고 있는 추세예요. 단과대마다 편의점이 있는데 거의 다 무인 운영 시스템으로 바뀌었더라고요. 예전엔 편의점이 문을 닫으면 학교 밖까지 나가야 했거든요? 그런데 무인 편의점으로 바뀌고 나서는 24시간 언제든지 교내 편의점에 들릴 수 있어서 편리해요. 또 음식을 먹으면서 공부할 수 있을 정도로 취식 공간이 넓고요. 그래서 편의점에서 음식을 먹으면서 늦은 시간까지 공부하는 학생들이 많아요. 마치 카공하는 것처럼요. 음식을 먹으면서 눈치 보지 않고 공부를 할 수 있으니 도서관보다 오히려 무인편의점을 더 많이 찾는 것 같아요. 안수현 (24세, 대학생)\n\n🙋‍♀️ “밤샘 공부할 때는 스터디카페보다 무인카페를 많이 찾아요” 자격증 시험 준비할 때 눈치 보지 않고 늦은 시간까지 공부할 수 있어서 무인 카페를 자주 이용했어요. 일반 카페에서는 콘센트 사용하면서 오래 앉아 있기엔 사장님 눈치가 보이거든요. 또 스터디카페는 시험 기간에는 자리 잡기가 힘들고요. 그리고 공공장소에서 민폐를 끼치는 빌런이 될까 봐 소음에 주의하느라 오히려 공부에 집중을 못 할 때도 많아요. 친구들도 오랜 시간 공부해야 할 때 분위기가 편하고 가성비 있는 무인 카페를 자주 찾더라고요. 조수연 (24세, 직장인)"
        )}
      </Content>
      <Line />
      <QuizContainer>
        <TicleImg src={ticlearticle} alt="ticleimg" />
        <QuizContainerRight>
          <QuizTitle>AI 시대에 화웨이가 주목받는다?</QuizTitle>
          <QuizTime>소요시간 5분</QuizTime>
          <QuizBtn onClick={() => setIsQuizModalOpen(true)}>
            간단 퀴즈 풀어보기
          </QuizBtn>
        </QuizContainerRight>
      </QuizContainer>
      <div>
        <BottomArticleTitle>함께 읽으면 좋은 아티클</BottomArticleTitle>
        <GoodArticleContainer>
          <div>
            <GoodArticleImg src={articleImg} alt="함께 읽으면 좋은 아티클" />
            <GoodArticleCategory>카테고리</GoodArticleCategory>
            <GoodArticleTitle>
              AI 시대에 필요한 개발자, 프로덕트 엔지니어
            </GoodArticleTitle>
            <GoodArticleAuthor>글쓴이 | 2024-05-11</GoodArticleAuthor>
          </div>
          <div>
            <GoodArticleImg src={articleImg} alt="함께 읽으면 좋은 아티클" />
            <GoodArticleCategory>카테고리</GoodArticleCategory>
            <GoodArticleTitle>
              AI 시대에 필요한 개발자, 프로덕트 엔지니어
            </GoodArticleTitle>
            <GoodArticleAuthor>글쓴이 | 2024-05-11</GoodArticleAuthor>
          </div>
          <div>
            <GoodArticleImg src={articleImg} alt="함께 읽으면 좋은 아티클" />
            <GoodArticleCategory>카테고리</GoodArticleCategory>
            <GoodArticleTitle>
              AI 시대에 필요한 개발자, 프로덕트 엔지니어
            </GoodArticleTitle>
            <GoodArticleAuthor>글쓴이 | 2024-05-11</GoodArticleAuthor>
          </div>
        </GoodArticleContainer>
      </div>
      {isQuizModalOpen && (
        <>
          <Overlay isModalOpen={isQuizModalOpen}>
            <QuizModal onClose={() => setIsQuizModalOpen(false)} />
          </Overlay>
        </>
      )}
      {isHighlightModalOpen && (
        <>
          <Overlay isModalOpen={isHighlightModalOpen}>
            <HighlightModal
              highlightedText={highlightedText}
              onClose={() => setIsHighlightModalOpen(false)}
              onSave={handleSaveNote}
            />
          </Overlay>
        </>
      )}
      <FloatingButtons onMenuClick={handleMenuClick} />
    </Container>
  );
};

export default Article;
