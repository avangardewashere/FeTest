import { memo } from "react";
import style from "./index.module.scss";
import { Popup } from "antd-mobile";
import useFTStore from "../../store/ftStore";
import CompanyItem from "./companyItem";
import providers from "./../../assets/images/categories/providers.png";
const Providers = memo(() => {
  const popupProviders = useFTStore((s) => s.popupProviders);
  const setPopupProviders = useFTStore((s) => s.setPopupProviders);
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
          <span>119</span>
          <b
            onClick={() => {
              setPopupProviders();
            }}
          >
            x
          </b>
        </div>
        <div className={style.list}>
          <CompanyItem />
          <CompanyItem />
          <CompanyItem />
          <CompanyItem />
          <CompanyItem />
        </div>
      </Popup>
    </div>
  );
});

export default Providers;
