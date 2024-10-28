import { memo } from "react";
import style from "./index.module.scss";

interface CompanyItemProps {
  imgSrc?: string;
  firm: string;
  handleClick: (name: string) => void;
  name: string;
}

const CompanyItem = memo((props: CompanyItemProps) => {
  const { imgSrc, handleClick, firm, name } = props;
  return (
    <div
      style={{ background: firm === name ? "#0a88ff20" : "" }}
      className={style.company}
      onClick={() => handleClick(name)}
    >
      <img src={imgSrc || ""} alt="fun-88-company-providers" />
    </div>
  );
});

export default CompanyItem;
