import { memo, useEffect, useState } from "react";
import style from "./index.module.scss";
import { Popup } from "antd-mobile";
import useFTStore from "../../store/ftStore";
import CompanyItem from "./companyItem";
import providers from "./../../assets/images/categories/providers.png";


import { providersType } from "../../mockData/a";
import { fetchProviders } from "../api/fetch";


const Providers = memo(() => {
  const setCategory = useFTStore((s) => s.setCategory);
  const searchByProvider = useFTStore((s) => s.searchByProvider);
  const provider = useFTStore((s) => s.provider);
  const [list, setList] = useState<providersType[]>([]);
  useEffect(() => {
    fetchProviders().then((data) => setList(data));
  }, []);

  const popupProviders = useFTStore((s) => s.popupProviders);
  const setPopupProviders = useFTStore((s) => s.setPopupProviders);

  const setFirm = (firm: string) => {
    if (provider === firm) {
      searchByProvider("");
    } else {
      searchByProvider(firm);
    }
    setCategory("search");
  };

  return (
    <div className={style.container}>
      <Popup
        visible={popupProviders}
        onMaskClick={() => {
          setPopupProviders();
        }}
      >
        <div className={style.header}>
          <img src={providers} alt="fun-88-providers-icon-list" />
          <span>Game Provider</span>
          <span>{list.length}</span>
          <b
            onClick={() => {
              setPopupProviders();
            }}
          >
            x
          </b>
        </div>
        <div className={style.list}>
          {list?.map((item, index) => (
            <CompanyItem name={item.firmName} firm={provider} handleClick={setFirm} imgSrc={item.firmImage} key={index} />
          ))}
        </div>
      </Popup>
    </div>
  );
});

export default Providers;
