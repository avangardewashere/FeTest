import { memo } from "react";
import style from "./index.module.scss";

interface gcProps {
  img: string;
  name: string;
  count: number;
  handleClick: (firm:string) => void;
  firm: string;
}

const GameCompany = memo((props: gcProps) => {
  const { firm, handleClick, img, name, count } = props;
  return (
    <div
      className={style.gameCompany}
      style={{ background: firm === name ? "#0a88ff30" : "" }}
      onClick={()=>handleClick(name)}
    >
      <div className={style.logo}>
        <img src={img} alt="fun-88-company=provider" />
      </div>
      <div
        style={{ background: firm === name ? "#0a88ff05" : "" }}
        className={style.name}
      >
        <b>{name}</b>
        <span>{count} games</span>
      </div>
    </div>
  );
});

export default GameCompany;
