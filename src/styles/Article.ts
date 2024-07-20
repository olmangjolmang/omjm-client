import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 160px 180px;
`;

export const Category = styled.div`
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

export const Title = styled.div`
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 18px;
`;

export const AuthorBox = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 94px;
`;

export const Author = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const ArticleDate = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const Img = styled.img`
  width: 1080px;
  height: 590.625px;
  margin-bottom: 94px;
`;

export const Content = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  white-space: pre-wrap;
  margin-bottom: 94px;
  position: relative;
`;

export const Highlight = styled.span`
  background-color: yellow;
`;

export const Line = styled.div`
  height: 1px;
  width: 1080px;
  background: #afafb6;
  margin-bottom: 94px;
`;

export const QuizContainer = styled.div`
  background-color: #272726;
  width: 906.578px;
  height: 339.943px;
  flex-shrink: 0;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 94px;
`;

export const QuizTitle = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 38px;
`;

export const QuizTime = styled.div`
  color: white;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 34px;
`;

export const QuizBtn = styled.button`
  display: inline-flex;
  padding: 21px 176px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: none;
  background-color: #463efb;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const BottomArticleTitle = styled.div`
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 40px;
  align-self: flex-start;
`;

export const GoodArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const GoodArticleImg = styled.img`
  width: 379px;
  height: 240px;
  border-radius: 20px;
`;

export const GoodArticleCategory = styled.div`
  color: #463efb;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0 24px 20px;
`;

export const GoodArticleTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  width: 275px;
  margin-left: 10px;
  margin-bottom: 18px;
`;

export const GoodArticleAuthor = styled.div`
  color: #7f7f86;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  margin-left: 10px;
`;

export const Overlay = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isModalOpen }) => (isModalOpen ? "block" : "none")};
  z-index: 999;
`;
