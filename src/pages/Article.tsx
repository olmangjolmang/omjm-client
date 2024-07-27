import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
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
  LinkContainer,
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
  title: string;
}

interface Post {
  postId: number;
  title: string;
  content: string;
  author: string;
  category: string;
  createdDate: number;
  image: Image;
  originUrl: string;
  scrapCount: number;
  scrappeds: any; // Specify appropriate type if known
}

interface Image {
  imageFileName: string | null;
  imageFolderName: string | null;
  imageUrl: string;
}

interface TextNode {
  type: "text";
  text: string;
  start: number;
  end: number;
}

interface ImageNode {
  type: "image";
  src: string;
  alt: string;
}

type ContentNode = TextNode | ImageNode;

const Article: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: article, isLoading } = useArticle(id || "", { enabled: !!id });

  const [isHighlightModalOpen, setIsHighlightModalOpen] =
    useState<boolean>(false);
  const [highlightedText, setHighlightedText] = useState<string>("");
  const [highlightedRanges, setHighlightedRanges] = useState<
    Array<{ start: number; end: number }>
  >([]);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [recommendPosts, setRecommendPosts] = useState<Post[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      fetchRecommendPosts();
    }
  }, [id]);

  const fetchRecommendPosts = async () => {
    try {
      const response = await axiosInstance.get(`/post/recommend/${id}`);
      console.log("Recommend posts fetched:", response);
      if (response.data.results) {
        setRecommendPosts(response.data.results);
      }
    } catch (error) {
      console.error("Error fetching recommend posts:", error);
    }
  };

  const sanitizeContent = (html: string) => {
    const cleanHtml = DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ["b", "i", "em", "strong", "a", "img"],
      ALLOWED_ATTR: ["href", "src", "alt"],
    });
    return cleanHtml;
  };

  const htmlToTextMapping = (html: string) => {
    const cleanHtml = sanitizeContent(html);
    const parser = new DOMParser();
    const doc = parser.parseFromString(cleanHtml, "text/html");
    const textNodes: { text: string; start: number; end: number }[] = [];
    const contentElements: ContentNode[] = [];

    const walker = document.createTreeWalker(
      doc.body,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      null
    );
    let node;
    let index = 0;

    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) {
        const textContent = node.textContent || "";
        if (
          contentElements.length > 0 &&
          contentElements[contentElements.length - 1].type === "text"
        ) {
          const lastTextNode = contentElements[
            contentElements.length - 1
          ] as TextNode;
          lastTextNode.text += textContent;
          lastTextNode.end += textContent.length;
        } else {
          contentElements.push({
            type: "text",
            text: textContent,
            start: index,
            end: index + textContent.length,
          });
        }
        index += textContent.length;
      } else if (
        node.nodeType === Node.ELEMENT_NODE &&
        (node as HTMLElement).tagName === "IMG"
      ) {
        const imgElement = node as HTMLImageElement;
        contentElements.push({
          type: "image",
          src: imgElement.src,
          alt: imgElement.alt,
        });
        index += 1; // 이미지도 하나의 요소로 간주하여 인덱스를 증가
      }
    }
    console.log(contentElements);
    return {
      text: contentElements
        .filter((el) => el.type === "text")
        .map((el) => (el as TextNode).text)
        .join(""),
      mapping: textNodes,
      contentElements,
    };
  };

  const handleTextHighlight = (e: React.MouseEvent) => {
    const selection = window.getSelection();
    const contentElement = contentRef.current;

    if (selection?.rangeCount && contentElement) {
      const range = selection.getRangeAt(0);
      const text = range.toString();

      if (text) {
        const preSelectionRange = range.cloneRange();
        preSelectionRange.selectNodeContents(contentElement);
        preSelectionRange.setEnd(range.startContainer, range.startOffset);
        const start = preSelectionRange.toString().length;
        const end = start + text.length;

        setHighlightedText(text);
        setHighlightedRanges([{ start, end }]);
        selection.removeAllRanges();
      }
    }
  };

  const renderHighlightedText = (text: string) => {
    const parts: (string | JSX.Element)[] = text
      .split(highlightedText)
      .reduce((acc: (string | JSX.Element)[], part: string, index: number) => {
        if (index > 0) {
          acc.push(
            <Highlight key={`highlight-${index}`}>{highlightedText}</Highlight>
          );
        }
        acc.push(<span key={`part-${index}`}>{part}</span>);
        return acc;
      }, []);
    return parts;
  };

  const handleSaveNote = async (note: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }

      const payload = {
        targetText: highlightedText,
        content: note,
      };
      const response = await axiosInstance.post(`/post/memo/${id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.isSuccess) {
        alert("메모가 저장되었습니다.");
      } else {
        alert("메모 저장에 실패했습니다.");
      }
      setIsHighlightModalOpen(false);
    } catch (error: unknown) {
      handleError(error, "메모 저장 중 오류 발생");
    }
  };

  const handleError = (error: unknown, defaultMessage: string) => {
    if (axios.isAxiosError(error)) {
      console.error(defaultMessage, error);
      if (error.response) {
        console.error("응답 데이터:", error.response.data);
        console.error("응답 상태 코드:", error.response.status);
      }
      alert(
        `${defaultMessage} - ${
          error.response?.data?.message || "알 수 없는 오류"
        }`
      );
    } else {
      console.error(defaultMessage, error);
      alert(`${defaultMessage} - 알 수 없는 오류`);
    }
  };

  const handleMenuClick = () => {
    const combinedText = highlightedRanges
      .map(({ start, end }) => plainTextContent.slice(start, end))
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

      const response = await axiosInstance.post(
        `/post/${id}/scrap`,
        { postId: id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.isSuccess) {
        setIsSaved(!isSaved);
        alert(`아티클 ${isSaved ? "저장 취소" : "저장"} 완료`);
      } else {
        console.error("아티클 저장 실패");
      }
    } catch (error) {
      handleError(error, "아티클 저장 실패");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (!article) return <div>No article found</div>;

  const {
    title,
    content,
    author,
    createdDate,
    postCategory,
    image,
    originalUrl,
  } = article;
  const formattedDate = new Date(createdDate).toISOString().split("T")[0];
  const translatedCategory =
    categoryMap[postCategory as CategoryType] || postCategory;

  const {
    text: plainTextContent,
    mapping,
    contentElements,
  } = htmlToTextMapping(content);

  return (
    <>
      <Header />
      <Container>
        <Category>{translatedCategory}</Category>
        <Title>{title}</Title>
        <AuthorBox>
          <Author>{author}</Author>
          <ArticleDate>{formattedDate}</ArticleDate>
          <LinkContainer onClick={() => window.open(originalUrl)}>
            <LinkText>원본 링크 바로가기</LinkText>
            <LinkIcon src={linkimg} alt="Link icon" />
          </LinkContainer>
        </AuthorBox>
        <Img src={image?.imageUrl || articleImg} alt="Article image" />
        <Content ref={contentRef} onMouseUp={handleTextHighlight}>
          {contentElements.map((element, index) =>
            element.type == "text" ? (
              <span key={index}>{renderHighlightedText(element.text)}</span>
            ) : (
              <img
                key={index}
                src={element.src}
                alt={element.alt}
                style={{ maxWidth: "1000px" }}
              />
            )
          )}
        </Content>
        <Line />
        <QuizSection title={title} id={Number(id)} />
        <GoodArticleSection>
          <BottomArticleTitle>함께 읽으면 좋은 아티클</BottomArticleTitle>
          <GoodArticleContainer>
            {recommendPosts.length > 0 ? (
              recommendPosts.map((post) => (
                <div
                  key={post.postId}
                  onClick={() => {
                    navigate(`/post/${post.postId}`);
                  }}
                >
                  <GoodArticleImg
                    src={post.image?.imageUrl || articleImg}
                    alt="Recommended article"
                  />
                  <GoodArticleCategory>
                    {categoryMap[post.category as CategoryType] || postCategory}
                  </GoodArticleCategory>
                  <GoodArticleTitle>{post.title}</GoodArticleTitle>
                  <GoodArticleAuthor>
                    {post.author} | {post.createdDate}
                  </GoodArticleAuthor>
                </div>
              ))
            ) : (
              <div>추천 아티클이 없습니다.</div>
            )}
          </GoodArticleContainer>
        </GoodArticleSection>
        {isHighlightModalOpen && (
          <Overlay isModalOpen={isHighlightModalOpen}>
            <HighlightModal
              highlightedText={highlightedText}
              onClose={() => setIsHighlightModalOpen(false)}
              onSave={handleSaveNote}
            />
          </Overlay>
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
