import React, { useState, useEffect, MouseEvent } from "react";
import axios from "axios";
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
  ArticleDate,
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

interface ArticleData {
  postId: number;
  title: string;
  content: string;
  author: string;
  createdDate: string;
  postCategory: string;
  image: {
    imageFileName: string;
    imageFolderName: string;
    imageUrl: string;
  };
  recommendPost: any;  // 추천 포스트
}

const Article: React.FC = () => {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState<boolean>(false);
  const [isHighlightModalOpen, setIsHighlightModalOpen] = useState<boolean>(false);
  const [highlightedText, setHighlightedText] = useState<string>("");
  const [highlightedRanges, setHighlightedRanges] = useState<Array<{ start: number, end: number }>>([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://3.36.247.28/post/1`);
        console.log("response data:", response.data)
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, []);

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
    if (!article) return;

    const combinedText = highlightedRanges
      .map(({ start, end }) => {
        return article.content.slice(start, end);
      })
      .join("\n");

    setHighlightedText(combinedText);
    setIsHighlightModalOpen(true);
  };

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

  if (!article) {
    return <div>로딩중...</div>;
  }

  const { title, content, author, createdDate, postCategory, image } = article;

  const formattedDate = new Date(createdDate).toLocaleDateString();

  return (
    <Container>
      <Category>{postCategory}</Category>
      <Title>{title}</Title>
      <AuthorBox>
        <Author>{author}</Author>
        <ArticleDate>{formattedDate}</ArticleDate>
      </AuthorBox>
      <Img src={image?.imageUrl || articleImg} alt="기사 이미지" />
      <Content onMouseUp={handleTextHighlight}>
        {renderHighlightedText(content)}
      </Content>
      <Line />
      <QuizContainer>
        <QuizTitle>{title}</QuizTitle>
        <QuizTime>소요시간 5분</QuizTime>
        <QuizBtn onClick={() => setIsQuizModalOpen(true)}>
          간단 퀴즈 풀어보기
        </QuizBtn>
      </QuizContainer>
      <div>
        <BottomArticleTitle>함께 읽으면 좋은 아티클</BottomArticleTitle>
        <GoodArticleContainer>
          <div>
            <GoodArticleImg src={image?.imageUrl || articleImg} alt="함께 읽으면 좋은 아티클" />
            <GoodArticleCategory>{postCategory}</GoodArticleCategory>
            <GoodArticleTitle>
              AI 시대에 필요한 개발자, 프로덕트 엔지니어
            </GoodArticleTitle>
            <GoodArticleAuthor>{author} | {formattedDate}</GoodArticleAuthor>
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
