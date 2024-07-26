import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 180px;
`;

export const Category = styled.div`
  display: inline-flex;
  padding: 15px 40px;
  justify-content: center;
  font-family: Pretendard;

  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 600;
  color: #463efe;
  line-height: 150%;
  letter-spacing: -0.12px;

  border-radius: 40px;
  border: 2px solid var(--Blue-300, #463efb);
  margin-bottom: 39px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  font-family: Pretendard;
  line-height: 150%;
  letter-spacing: -0.12px;
  margin-bottom: 18px;
  white-space: nowrap;
`;
export const LinkContainer = styled.a`
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
`;

export const LinkText = styled.div`
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 150%;
  color: #463efb;
`;

export const LinkIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: -5px;
`;

export const AuthorBox = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 94px;
  align-items: center;
`;

export const Author = styled.div`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.08px;
  font-family: Pretendard;

  line-height: 150%;
`;

export const ArticleDate = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #7f7f86;
`;

export const Img = styled.img`
  width: 1000px;
  height: 500px;
  margin: 0 auto;
  margin-bottom: 52px;
`;

export const Content = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: Pretendard;
  line-height: 32px;
  margin: 0 auto;
  white-space: pre-wrap;
  margin-bottom: 80px;
  position: relative;
  width: 1000px;
  max-width: 1216px;
`;

export const Highlight = styled.span`
  background-color: yellow;
`;

export const Line = styled.div`
  height: 1px;
  width: 1080px;
  background: #afafb6;
  margin-bottom: 80px;
`;

export const QuizContainer = styled.div`
  background-color: #f4f4f7;
  width: 1080px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 80px;
`;
export const QuizContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 120px;
`;
export const TicleImg = styled.img`
  width: 240px;
  height: 204px;
  margin-right: 70px;
  margin-left: 120px;
`;

export const QuizTitle = styled.div`
  font-size: 24px;

  font-weight: 700;
  margin-bottom: 12px;
  line-height: 150%;
  font-family: Pretendard;
`;

export const QuizTime = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 26px;
  font-family: Pretendard;
`;

export const QuizBtn = styled.button`
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
  font-family: Pretendard;
  flex-shrink: 0;
  white-space: nowrap;
  cursor: pointer;
`;

export const BottomArticleTitle = styled.div`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 27px;
  font-family: Pretendard;
  align-self: flex-start;
`;

export const GoodArticleSection = styled.div`
  align-self: flex-start;
  margin: 0 auto;
  width: 1000px;
`;

export const GoodArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 41px;
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
  font-family: Pretendard;
  max-width: 120px;
  height: 44px;
  background-color: #f4f4f7;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0 16px 10px;
`;

export const GoodArticleTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 275px;
  margin-left: 10px;
  font-family: Pretendard;
  margin-bottom: 44px;
`;

export const GoodArticleAuthor = styled.div`
  color: #7f7f86;
  font-size: 16px;
  font-weight: 500;
  font-family: Pretendard;
  line-height: 150%;
  letter-spacing: -0.08px;
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
