import { memo, useEffect, useRef, useState } from "react";
import style from "./index.module.scss";
import GameCompany from "./gameCompany";
import { fetchProviders } from "../api/fetch";
import { providersType } from "../../mockData/a";
import chevImg from "./../../assets/images/chevron.png";

import { Swiper } from "antd-mobile";
import useFTStore from "../../store/ftStore";

// Helper function to split array into chunks
const chunkArray = (
  arr: providersType[],
  chunkSize: number
): providersType[][] => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const SectionProviders = memo(() => {
  const searchByProvider = useFTStore((s) => s.searchByProvider);
  const setCategory = useFTStore((s) => s.setCategory);
  const provider = useFTStore((s) => s.provider);
  const swiperRef = useRef<any>(null);

  const handleNext = () => {
    swiperRef.current?.swipeNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swipePrev();
  };
  const [list, setList] = useState<providersType[]>([]);
  useEffect(() => {
    fetchProviders().then((data) => setList(data));
  }, []);

  const setFirm = (firm: string) => {
    if (provider === firm) {
      searchByProvider("");
    } else {
      searchByProvider(firm);
    }
	setCategory("search")
	
  };

  const groupedProviders = chunkArray(list, 3);

  return (
    <div className={style.container}>
      <div className={style.title}>
        Proveedores de juego
        <div className={style.buttons}>
          <img src={chevImg} onClick={handlePrev} alt="fun-88-chevron" />
          <img src={chevImg} onClick={handleNext} alt="fun-88-chevron" />
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        loop
        // autoplay
        autoplayInterval={15000}
        indicator={false}
      >
        {groupedProviders.map((group, groupIndex) => {
          console.log("hi", group);
          return (
            <Swiper.Item key={groupIndex}>
              <div key={groupIndex} className={style.groups}>
                {group.map((item, index) => (
                  <GameCompany
                    firm={provider}
                    handleClick={setFirm}
                    key={index}
                    img={item.firmImage}
                    name={item.firmName}
                    count={item.gameCount}
                  />
                ))}
              </div>
            </Swiper.Item>
          );
        })}
      </Swiper>
    </div>
  );
});

export default SectionProviders;
