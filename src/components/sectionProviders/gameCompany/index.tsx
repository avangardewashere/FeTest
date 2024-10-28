import { memo } from "react";
import style from "./index.module.scss";
const GameCompany = memo(() => {
  return (
    <div className={style.gameCompany}>
      <div className={style.logo}>sample</div>
      <div className={style.name}><b>juegoes pro</b><span>116 games</span></div>
    </div>
  );
});

export default GameCompany;
