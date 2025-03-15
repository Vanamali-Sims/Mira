import React from "react";
import {
  JournalIntro,
  MindfulMoments,
  MindfulnessSection,
  ProgressTracker,
} from "../containers/HomePageContainer";
import { HolisticWellness } from "../containers/HomePageContainer/holisticWellness";
import { CommitmentToWellness } from "../containers/HomePageContainer/commitmentToWellness";
import { FooterSection } from "../components";

const Home: React.FC = () => {
  return (
    <>
      <JournalIntro />
      <MindfulnessSection />
      <ProgressTracker />
      <HolisticWellness />
      <MindfulMoments />
      <CommitmentToWellness />
      <FooterSection />
    </>
  );
};

export default Home;
