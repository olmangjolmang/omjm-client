import React, { useState, useEffect, MouseEvent } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import linkimg from "../assets/linkicon.png";
import articleImg from "../assets/article.png";
import QuizSection from "../components/QuizSection"; // Import the new QuizSection component
import FloatingButtons from "../components/FloatingButtons";
import HighlightModal from "../components/HighlightModal";

import {
  Container,
  Category,
  Title,
  LinkText,
  LinkIcon,
  AuthorBox,
  Author,
  ArticleDate,
  Img,
  Content,
  Highlight,
  Line,
  BottomArticleTitle,
  GoodArticleContainer,
  GoodArticleImg,
  GoodArticleCategory,
  GoodArticleTitle,
  GoodArticleAuthor,
  Overlay,
} from "../styles/Article";

interface RecommendPost {
  postId: number;
  postTitle: string;
}

interface ArticleData {
  postId: number;
  title: string;
  content: string;
  author: string;
  createdDate: [number, number, number];
  postCategory: string;
  image: {
    imageFileName: string;
    imageFolderName: string;
    imageUrl: string;
  };
  recommendPost: RecommendPost[]; // 추천 포스트
}

const Article: React.FC = () => {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [isHighlightModalOpen, setIsHighlightModalOpen] =
    useState<boolean>(false);
  const [highlightedText, setHighlightedText] = useState<string>("");
  const [highlightedRange, setHighlightedRange] = useState<{
    start: number;
    end: number;
  } | null>(null);
  const [highlightedRanges, setHighlightedRanges] = useState<
    Array<{ start: number; end: number }>
  >([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(`http://3.36.247.28/post/1`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("response data:", response.data);
        const data = response.data;
        const articleData = data.results;

        setArticle(articleData);
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
    if (!highlightedRange) {
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

  const {
    title,
    content,
    author,
    createdDate = [0, 0, 0],
    postCategory,
    image,
    recommendPost,
  } = article;

  const formattedDate =
    createdDate.length === 3
      ? `${createdDate[0]}-${String(createdDate[1]).padStart(2, "0")}-${String(
          createdDate[2]
        ).padStart(2, "0")}`
      : "날짜 정보 없음";

  return (
    <>
      <Header />
      <Container>
        <Category>{postCategory}</Category>
        <Title>{title}</Title>
        <AuthorBox>
          <Author>{author}</Author>
          <ArticleDate>{formattedDate}</ArticleDate>
          <LinkText href="https://google.com/">원본 링크 바로가기</LinkText>
          <LinkIcon src={linkimg} alt="링크 아이콘" />
        </AuthorBox>

        <Img src={image?.imageUrl || articleImg} alt="기사 이미지" />
        <Content onMouseUp={handleTextHighlight}>
          {renderHighlightedText(content)}
        </Content>
        <Line />
        <QuizSection /> {/* Use the QuizSection component */}
        <div>
          <BottomArticleTitle>함께 읽으면 좋은 아티클</BottomArticleTitle>
          <GoodArticleContainer>
            {recommendPost.length > 0 ? (
              recommendPost.map((post) => (
                <div key={post.postId}>
                  <GoodArticleImg
                    src={image?.imageUrl || articleImg}
                    alt="함께 읽으면 좋은 아티클"
                  />
                  <GoodArticleCategory>{postCategory}</GoodArticleCategory>
                  <GoodArticleTitle>{post.postTitle}</GoodArticleTitle>
                  <GoodArticleAuthor>
                    {author} | {formattedDate}
                  </GoodArticleAuthor>
                </div>
              ))
            ) : (
              <div>추천 아티클이 없습니다.</div>
            )}
          </GoodArticleContainer>
        </div>
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
      <Footer />
    </>
  );
};

export default Article;
