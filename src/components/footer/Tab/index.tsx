import { memo } from "react";
import style from "./index.module.scss";
import tabImg from "./../../../assets/images/footer/hoop.png";
interface FooterTabsProps {
  tabName?: string;
  imgSrc?: string;
  iconId?: number;
  select?: number |string;
  setSelect?: (id: number) => void;
  width?:number;
}
const Tabs = memo(
  ({ iconId, tabName, imgSrc, select, width,setSelect }: FooterTabsProps) => {
    return (
      <div
        style={{ color: select === iconId || select === tabName?.toLowerCase() ? "#00A6FF" : "#888",width:width?width:"78rem" }}
        className={style.tabs}
        onClick={() => {
          if (setSelect) setSelect(iconId || 1001);
        }}
      >
        {imgSrc ? (
          <div
            className={style.imgWrapper}
            style={{
              background:select === iconId && width !== 50 ? `url(${tabImg})`:'',
              backgroundSize:select === iconId ? "100% 100%":"",
            }}
          >
            <img
              style={{ filter: select === iconId || select === tabName?.toLowerCase() ? "" : "grayscale(100%)" }}
              src={imgSrc}
              alt="fun-88-footer-image"
              className={`${style.image} ${width === 50 ? style.girl : ""}`}
            />
          </div>
        ) : (
          <div className={style.image}></div>
        )}
        <span>{tabName || "Sports"}</span>
      </div>
    );
  }
);

export default  Tabs;
