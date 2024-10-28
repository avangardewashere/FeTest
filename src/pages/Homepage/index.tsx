import { memo } from "react";
import style from "./index.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
import Announcement from "../../components/announcement";
import Category from "../../components/category";
import GameMenu from "../../components/GameMenu";
import Providers from "../../components/providers";
import SectionProviders from "../../components/sectionProviders";
 
const HomePage = memo(() => {
 
  return (
    <div className={style.container}>
      <Header />
      <Banner />
      <Announcement />
      <Category />
      <Providers />
  <GameMenu />
 
      <SectionProviders />
      <Footer />
    </div>
  );
});

export default HomePage;
