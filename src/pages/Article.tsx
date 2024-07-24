import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axiosInstance from "../api/AxiosInstance";
import linkimg from "../assets/linkicon.png";
import articleImg from "../assets/article.png";
import QuizSection from "../components/QuizSection";
import FloatingButtons from "../components/FloatingButtons";
import HighlightModal from "../components/HighlightModal";
import { useArticle } from "../hooks/useArticle";
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
  GoodArticleSection,
  GoodArticleContainer,
  GoodArticleImg,
  GoodArticleCategory,
  GoodArticleTitle,
  GoodArticleAuthor,
  Overlay,
} from "../styles/Article";

type CategoryType =
  | "WEB_FRONT"
  | "BACKEND"
  | "NETWORK"
  | "APP"
  | "SECURITY"
  | "AI"
  | "VISION"
  | "INFRA"
  | "ETC";

const categoryMap: Record<CategoryType, string> = {
  WEB_FRONT: "웹 프론트",
  BACKEND: "백(서버, CI/CD)",
  NETWORK: "네트워크/통신",
  APP: "앱",
  SECURITY: "보안",
  AI: "빅데이터/AI",
  VISION: "Vision",
  INFRA: "인프라",
  ETC: "기타",
};

interface RecommendPost {
  postId: number;
  postTitle: string;
}

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: article, isLoading } = useArticle(id || "", {
    enabled: !!id,
  });

  const [isHighlightModalOpen, setIsHighlightModalOpen] =
    useState<boolean>(false);
  const [highlightedText, setHighlightedText] = useState<string>("");
  const [highlightedRanges, setHighlightedRanges] = useState<
    Array<{ start: number; end: number }>
  >([]);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [recommendPosts, setRecommendPosts] = useState<RecommendPost[]>([]);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfSaved = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axiosInstance.get(`/post/${id}/is-saved`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setIsSaved(response.data.isSaved);
        }
      } catch (error) {
        console.error("Error checking if article is saved:", error);
      }
    };

    const fetchRecommendPosts = async () => {
      try {
        const response = await axiosInstance.get(`/post/recommend/${id}`);
        setRecommendPosts(response.data.results.recommendPost);
      } catch (error) {
        console.error("Error fetching recommend posts:", error);
      }
    };

    if (id) {
      checkIfSaved();
      fetchRecommendPosts();
    }
  }, [id]);

  const handleTextHighlight = (e: React.MouseEvent) => {
    const selection = window.getSelection();
    const contentElement = contentRef.current;

    if (selection && selection.rangeCount > 0 && contentElement) {
      const range = selection.getRangeAt(0);
      const text = selection.toString();

      if (text) {
        const preSelectionRange = range.cloneRange();
        preSelectionRange.selectNodeContents(contentElement);
        preSelectionRange.setEnd(range.startContainer, range.startOffset);
        const start = preSelectionRange.toString().length;
        const end = start + text.length;

        setHighlightedText(text);
        setHighlightedRanges((prevRanges) => [
          ...prevRanges,
          { start, end },
        ]);

        selection.removeAllRanges();
      }
    }
  };

  const handleSaveNote = async (note: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }

      const response = await axiosInstance.post(
        `/post/memo/${id}`,
        { note, highlightedText, ranges: highlightedRanges },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.isSuccess) {
        alert("메모가 저장되었습니다.");
      } else {
        alert("메모 저장에 실패했습니다.");
      }

      setIsHighlightModalOpen(false);
    } catch (error) {
      console.error("메모 저장 중 오류 발생:", error);
      alert("메모 저장에 실패했습니다.");
    }
  };

  const handleMenuClick = () => {
    const combinedText = highlightedRanges
      .map(({ start, end }) => {
        return article?.content.slice(start, end) || "";
      })
      .join("\n");
    setHighlightedText(combinedText);
    setIsHighlightModalOpen(true);
  };

  const handleSaveArticle = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }
      console.log("Access Token:", token);
      console.log("Post ID:", id);

      if (isSaved) {
        const response = await axiosInstance.post(`/post/${id}/unscrap`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Response:", response);

        if (response.data.isSuccess) {
          alert("아티클 저장 취소 완료");
          setIsSaved(false);
        } else {
          console.log("아티클 저장 취소 실패");
        }
      } else {
        const response = await axiosInstance.post(
          `/post/${id}/scrap`,
          { postId: id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Response:", response);

        if (response.data.isSuccess) {
          alert("아티클 저장 완료");
          setIsSaved(true);
        } else {
          console.log("아티클 저장 실패");
        }
      }
    } catch (error) {
      console.error("Error saving article:", error);
      alert("아티클 저장 실패");
    }
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
        if (start > lastIndex) {
          elements.push(text.slice(lastIndex, start));
        }
        elements.push(
          <Highlight key={index}>{text.slice(start, end)}</Highlight>
        );
        lastIndex = end;
      });
    elements.push(text.slice(lastIndex));
    return elements;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>No article found</div>;
  }

  const { title, content, author, createdDate, postCategory, image } = article;

  const date = new Date(createdDate);
  const formattedDate = date.toISOString().split("T")[0];
  const translatedCategory =
    categoryMap[postCategory as CategoryType] || postCategory;

  return (
    <>
      <Header />
      <Container>
        <Category>{translatedCategory}</Category>
        <Title>{title}</Title>
        <AuthorBox>
          <Author>{author}</Author>
          <ArticleDate>{formattedDate}</ArticleDate>
          <LinkText href="https://google.com/">원본 링크 바로가기</LinkText>
          <LinkIcon src={linkimg} alt="Link icon" />
        </AuthorBox>
        <Img src={image?.imageUrl || articleImg} alt="Article image" />
        <Content ref={contentRef} onMouseUp={handleTextHighlight}>
          {renderHighlightedText(content)}
        </Content>
        <Line />
        <QuizSection title={title} id={Number(id)} />
        <GoodArticleSection>
          <BottomArticleTitle>함께 읽으면 좋은 아티클</BottomArticleTitle>
          <GoodArticleContainer>
            {recommendPosts.length > 0 ? (
              recommendPosts.map((post) => (
                <div key={post.postId}>
                  <GoodArticleImg
                    src={image?.imageUrl || articleImg}
                    alt="Recommended article"
                  />
                  <GoodArticleCategory>
                    {categoryMap[postCategory as CategoryType] || postCategory}
                  </GoodArticleCategory>
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
        </GoodArticleSection>
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
          onSaveClick={handleSaveArticle}
          isSaved={isSaved}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Article;
