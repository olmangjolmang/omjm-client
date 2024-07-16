import React, { useState, MouseEvent } from "react";
import articleImg from "../assets/article.png";
import QuizModal from "../components/QuizModal";
import FloatingButtons from "../components/FloatingButtons";
import HighlightModal from "../components/HighlightModal";
import {
  Container,
  Category,
  Title,
  AuthorBox,
  Author,
  Date,
  Img,
  Content,
  Highlight,
  Line,
  QuizContainer,
  QuizTitle,
  QuizTime,
  QuizBtn,
  BottomArticleTitle,
  GoodArticleContainer,
  GoodArticleImg,
  GoodArticleCategory,
  GoodArticleTitle,
  GoodArticleAuthor,
  Overlay,
} from "../styles/Article";

const Article: React.FC = () => {
  const [isQuizModalOpen, setIsQuizModalOpen] = useState<boolean>(false);
  const [isHighlightModalOpen, setIsHighlightModalOpen] =
    useState<boolean>(false);
  const [highlightedText, setHighlightedText] = useState<string>("");
  const [highlightedRanges, setHighlightedRanges] = useState<
    Array<{ start: number; end: number }>
  >([]);

  const handleTextHighlight = (e: MouseEvent) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const preSelectionRange = range.cloneRange();
      preSelectionRange.selectNodeContents(e.currentTarget);
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
      const start = preSelectionRange.toString().length;
      const end = start + range.toString().length;

      setHighlightedText(selection.toString());
      setHighlightedRanges((prevRanges) => [...prevRanges, { start, end }]);
    }
  };

  const handleSaveNote = (note: string) => {
    console.log("Highlighted Text:", highlightedText);
    console.log("Note:", note);
    setIsHighlightModalOpen(false);
  };

  const handleMenuClick = () => {
    const combinedText = highlightedRanges
      .map(({ start, end }) => {
        return fullText.slice(start, end);
      })
      .join("\n");

    setHighlightedText(combinedText);
    setIsHighlightModalOpen(true);
  };

  const fullText =
    "요즘 대학생들이 어디서 공부하는지 아시나요? 도서관, 스터디카페도 아닌 바로 ‘무인 카페’, ‘무인 편의점’이래요! 코로나19 이후 교내 편의점이 무인 편의점으로 바뀌고, 캠퍼스 주변에는 무인 카페가 생기면서 자연스레 이용해 보게 되었다고 합니다. 편의점이나 카페 외에도 대학가 상점들이 하나둘씩 무인화되면서 무인 매장을 이용하는 Z세대들이 많아지는 분위기라고 하는데요. 캐릿 1020 자문단에게 무인 매장을 얼마나 자주 이용하는지 직접 물어봤습니다.\n\n🙋‍♂️ “시험 기간만 되면 교내 무인 편의점에 학생들이 바글바글해요” 코로나 이후로 학교 안에 있는 편의점들이 무인 편의점으로 바뀌고 있는 추세예요. 단과대마다 편의점이 있는데 거의 다 무인 운영 시스템으로 바뀌었더라고요. 예전엔 편의점이 문을 닫으면 학교 밖까지 나가야 했거든요? 그런데 무인 편의점으로 바뀌고 나서는 24시간 언제든지 교내 편의점에 들릴 수 있어서 편리해요. 또 음식을 먹으면서 공부할 수 있을 정도로 취식 공간이 넓고요. 그래서 편의점에서 음식을 먹으면서 늦은 시간까지 공부하는 학생들이 많아요. 마치 카공하는 것처럼요. 음식을 먹으면서 눈치 보지 않고 공부를 할 수 있으니 도서관보다 오히려 무인편의점을 더 많이 찾는 것 같아요. 안수현 (24세, 대학생)\n\n🙋‍♀️ “밤샘 공부할 때는 스터디카페보다 무인카페를 많이 찾아요” 자격증 시험 준비할 때 눈치 보지 않고 늦은 시간까지 공부할 수 있어서 무인 카페를 자주 이용했어요. 일반 카페에서는 콘센트 사용하면서 오래 앉아 있기엔 사장님 눈치가 보이거든요. 또 스터디카페는 시험 기간에는 자리 잡기가 힘들고요. 그리고 공공장소에서 민폐를 끼치는 빌런이 될까 봐 소음에 주의하느라 오히려 공부에 집중을 못 할 때도 많아요. 친구들도 오랜 시간 공부해야 할 때 분위기가 편하고 가성비 있는 무인 카페를 자주 찾더라고요. 조수연 (24세, 직장인)";

  const renderHighlightedText = (text: string) => {
    if (!highlightedRanges.length) {
      return text;
    }

    let lastIndex = 0;
    const elements = [];

    highlightedRanges
      .sort((a, b) => a.start - b.start)
      .forEach(({ start, end }, index) => {
        elements.push(text.slice(lastIndex, start));
        elements.push(
          <Highlight key={index}>{text.slice(start, end)}</Highlight>
        );
        lastIndex = end;
      });

    elements.push(text.slice(lastIndex));

    return elements;
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
        {renderHighlightedText(fullText)}
      </Content>
      <Line />
      <QuizContainer>
        <QuizTitle>AI 시대에 화웨이가 주목받는다?</QuizTitle>
        <QuizTime>소요시간 5분</QuizTime>
        <QuizBtn onClick={() => setIsQuizModalOpen(true)}>
          간단 퀴즈 풀어보기
        </QuizBtn>
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
