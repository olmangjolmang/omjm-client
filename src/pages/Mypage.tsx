import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import TicleWarehouse from "../components/TicleWarehouse";
import TicleQna from "../components/TicleQna";
import TicleNote from "../components/TicleNote";
import { useMyNotes } from "../hooks/useMyNotes";
import { useMyQuestion } from "../hooks/useMyQuestion";
import TicleQnaGroup from "../components/TicleQnaGroup";
import TicleNoteGroup from "../components/TicleNoteGroup";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState<string>("ticleWarehouse");
  console.log(localStorage.getItem("token"));

  return (
    <>
      <Header />
      <PageContainer>
        <TabContainer>
          <Tab
            active={activeTab === "ticleWarehouse"}
            onClick={() => setActiveTab("ticleWarehouse")}
          >
            티클 창고
          </Tab>
          <Tab
            active={activeTab === "ticleQnA"}
            onClick={() => setActiveTab("ticleQnA")}
          >
            티클 문답
          </Tab>
          <Tab
            active={activeTab === "ticleNotes"}
            onClick={() => setActiveTab("ticleNotes")}
          >
            티클 노트
          </Tab>
        </TabContainer>
        <TabContent>
          {activeTab === "ticleWarehouse" && <TicleWarehouse />}
          {activeTab === "ticleQnA" && <TicleQnaGroup />}
          {activeTab === "ticleNotes" && <TicleNoteGroup />}
        </TabContent>
      </PageContainer>
      <Footer />
    </>
  );
};

export default MyPage;

const PageContainer = styled.div`
  display: flex;
  min-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding: 20px 112px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  width: 1216px;
  gap: 250px;
`;

const Tab = styled.div<{ active: boolean }>`
  margin: 0 20px;
  padding: 10px 20px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#463EFB" : "#AFAFB6")};
  border-bottom: ${({ active }) => (active ? "3px solid #463EFB" : "none")};
  font-size: 18px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;

const TabContent = styled.div`
  margin-top: 20px;
  padding: 20px;
`;
