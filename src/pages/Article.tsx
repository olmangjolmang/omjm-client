import React, { useState, useEffect, MouseEvent } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import linkimg from "../assets/linkicon.png";
import articleImg from "../assets/article.png";
import QuizSection from "../components/QuizSection";
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
  recommendPost: RecommendPost[];
}

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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

        const response = await axios.get(`http://3.36.247.28/post/${id}`, {
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

    if (id) {
      fetchArticle();
    }
  }, [id]);

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

  const handleSaveArticle = async () => {
    if (!article) return;
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      await axios.post(
        `http://3.36.247.28/post/${id}/scrap`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Article saved successfully!");
    } catch (error) {
      console.error("Error saving article:", error);
      alert("Failed to save article");
    }
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
    return <div>Loading...</div>;
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
      : "Date not available";

  return (
    <>
      <Header />
      <Container>
        <Category>{postCategory}</Category>
        <Title>{title}</Title>
        <AuthorBox>
          <Author>{author}</Author>
          <ArticleDate>{formattedDate}</ArticleDate>
          <LinkText href="https://google.com/">Original Link</LinkText>
          <LinkIcon src={linkimg} alt="Link icon" />
        </AuthorBox>
        <Img src={image?.imageUrl || articleImg} alt="Article image" />
        <Content onMouseUp={handleTextHighlight}>
          {renderHighlightedText(content)}
        </Content>
        <Line />
        <QuizSection title={title} id={Number(id)} />
        <div>
          <BottomArticleTitle>Recommended Articles</BottomArticleTitle>
          <GoodArticleContainer>
            {recommendPost.length > 0 ? (
              recommendPost.map((post) => (
                <div key={post.postId}>
                  <GoodArticleImg
                    src={image?.imageUrl || articleImg}
                    alt="Recommended article"
                  />
                  <GoodArticleCategory>{postCategory}</GoodArticleCategory>
                  <GoodArticleTitle>{post.postTitle}</GoodArticleTitle>
                  <GoodArticleAuthor>
                    {author} | {formattedDate}
                  </GoodArticleAuthor>
                </div>
              ))
            ) : (
              <div>No recommended articles</div>
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
        <FloatingButtons
          onMenuClick={handleMenuClick}
          onSaveClick={handleSaveArticle} // Pass the save function here
        />
      </Container>
      <Footer />
    </>
  );
};

export default Article;
