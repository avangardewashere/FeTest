import { memo } from "react";
import style from "./index.module.scss";
const Announcement = memo(() => {
  return (
    <div className={style.container}>
		<div className={style.image}></div>
      <div className={style.marquee}>
        <p className={style.marqueeText}>
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO ¡FELICIDADES artxxxxipa!
          GANADOR DESTACADO{" "}
        </p>
      </div>
    </div>
  );
});

export default Announcement;
