import style from "./index.module.scss";
import { memo } from "react";
import humImg from "./../../assets/images/header/hum.png";
import logoImg from "./../../assets/images/header/logo.png";
import walletImg from "./../../assets/images/header/walletpng.png";
import personImg from "./../../assets/images/header/profile.png";

const Header = memo(() => {
  return (
    <div className={style.container}>
      <div className={style.hum}>
        <img className={style.humImg} src={humImg} alt="fun-88-humburger" />
        <img className={style.logo} src={logoImg} alt="fun-88-logo" />
      </div>

      <div className={style.balance}>
        <img src={walletImg} alt="fun-88-wallet" className={style.walletImg} />
        <span>$1990.6</span>
        <div className={style.profile}>
          <span>{""}</span>
          <img src={personImg} alt="fun-88-logo-icon" />
        </div>
      </div>
    </div>
  );
});

export default Header;
