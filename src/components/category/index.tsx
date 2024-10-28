import { memo } from "react";
import style from "./index.module.scss";
import FooterTabs from "../footer/footerTab";
import start from "./../../assets/images/categories/start.png";
import others from "./../../assets/images/categories/others.png";
import table from "./../../assets/images/categories/table.png";
import providers from "./../../assets/images/categories/providers.png";
import newImg from "./../../assets/images/categories/new.png";
import live from "./../../assets/images/categories/live.png";
import slots from "./../../assets/images/categories/slots.png";

import search from "./../../assets/images/categories/search.png";
import bingo from "./../../assets/images/categories/bingo.png";
import jackpot from "./../../assets/images/categories/jackpot.png";
import useFTStore from "../../store/ftStore";
const Category = memo(() => {
  const setPopupProviders = useFTStore((s) => s.setPopupProviders);
  const category = useFTStore(s=>s.category)
  const setCategory = useFTStore(s=>s.setCategory)
  const CategoryData = [
    {
      iconid: 101,
      tabName: "Start",
      imgSrc: start,
    },
    {
      iconid: 102,
      tabName: "New",
      imgSrc: newImg,
    },
    {
      iconid: 103,
      tabName: "Slots",
      imgSrc: slots,
    },
    {
      iconid: 104,
      tabName: "Live",
      imgSrc: live,
    },
    {
      iconid: 105,
      tabName: "jackpot",
      imgSrc: jackpot,
    },
    {
      iconid: 106,
      tabName: "Table Games",
      imgSrc: table,
    },
    {
      iconid: 107,
      tabName: "Bingo",
      imgSrc: bingo,
    },
    {
      iconid: 108,
      tabName: "Others",
      imgSrc: others,
    },
  ];
  return (
    <>
      <div className={style.container}>
        <div className={style.search} onClick={()=>{setCategory(100)}}>
          <img style={{filter:category === 100 ? "":"grayscale(100%)"}} src={search} alt="fun-88-search-image" />
          <span style={{color:category === 100 ? "#0a88ff" : "#888"}}>Search</span>
        </div>
        <div className={style.categories}>
          {CategoryData.map((item, index) => (
            <FooterTabs
              iconId={item.iconid}
              imgSrc={item.imgSrc}
              width={50}
              key={index}
			  select={category}
			  setSelect={()=>{setCategory(item.iconid)}}
              tabName={item.tabName}
            />
          ))}
        </div>
      </div>
      <div className={style.searchBar} style={{height:category ===100 ?"":"0rem" ,opacity:category === 100 ? 1:0,marginBlock:category===100 ?"10rem" :"" }}>
        <div className={style.searchInput}>
          <img src={search} style={{ width: "16rem" }} alt="search-icon" />
          <input type="text" />
        </div>
        <div
          className={style.providers}
          onClick={() => {
            
            setPopupProviders();
          }}
        >
          <img src={providers} alt="fun-88-providers-find" />
        </div>
      </div>
    </>
  );
});

export default Category;
