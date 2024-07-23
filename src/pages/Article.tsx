import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axiosInstance from '../api/AxiosInstance';
import linkimg from '../assets/linkicon.png';
import articleImg from '../assets/article.png';
import QuizSection from '../components/QuizSection';
import FloatingButtons from '../components/FloatingButtons';
import HighlightModal from '../components/HighlightModal';
import { useArticle } from '../hooks/useArticle';
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
} from '../styles/Article';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: article, isLoading } = useArticle(id || "", {
    enabled: !!id,
  });

  const [isHighlightModalOpen, setIsHighlightModalOpen] = React.useState<boolean>(false);
  const [highlightedText, setHighlightedText] = React.useState<string>("");
  const [highlightedRanges, setHighlightedRanges] = React.useState<Array<{ start: number; end: number }>>([]);

  const handleTextHighlight = (e: React.MouseEvent) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const start = range.startOffset;
      const end = range.endOffset;
      const text = selection.toString();

      if (text) {
        setHighlightedText(text);
        setHighlightedRanges(prevRanges => [...prevRanges, { start, end }]);
        selection.removeAllRanges();
      }
    }
  };

  const handleSaveNote = async (note: string) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }
      
      const response = await axiosInstance.post(
        `/post/memo/${id}`,
        {
          targetText: highlightedText,
          content: note
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        alert("메모가 저장되었습니다.");
      } else {
        alert("메모 저장 실패.");
      }
      
    } catch (error) {
      console.error("Error saving note:", error);
      alert("메모 저장 실패.");
    } finally {
      setIsHighlightModalOpen(false);
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
      const token = localStorage.getItem("accessToken");
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }
      console.log("Access Token:", token);
      console.log("Post ID:", id);

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

      if (response.data.success) {
        alert("아티클 저장 완료");
      } else {
        console.log("아티클 저장 실패");
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

  const {
    title,
    content,
    author,
    createdDate,
    postCategory,
    image,
    recommendPost,
  } = article;

  const date = new Date(createdDate);
  const formattedDate = date.toISOString().split('T')[0];

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
          <LinkIcon src={linkimg} alt="Link icon" />
        </AuthorBox>
        <Img src={image?.imageUrl || articleImg} alt="Article image" />
        <Content onMouseUp={handleTextHighlight}>
          {renderHighlightedText(content)}
        </Content>
        <Line />
        <QuizSection title={title} id={Number(id)} />
        <div>
          <BottomArticleTitle>함께 읽으면 좋은 아티클</BottomArticleTitle>
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
        <FloatingButtons
          onMenuClick={handleMenuClick}
          onSaveClick={handleSaveArticle}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Article;
