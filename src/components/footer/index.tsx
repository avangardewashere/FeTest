import { memo, useState } from "react";
import style from "./index.module.scss";
import FooterTabs from "./footerTab";
import sportsImg from "./../../assets/images/footer/sports.png";
import walletImg from "./../../assets/images/footer/wallet.png";
import diceImg from "./../../assets/images/footer/dice.png";
import inviteImg from "./../../assets/images/footer/Invitepng.png";
import starImg from "./../../assets/images/footer/star.png";
const Footer = memo(() => {
	const [select, setSelect] = useState(1001);
  const FooterTabsData = [
    {
      tabName: "Sports",
      img: sportsImg,
      iconId: 1001,
    },
    {
      tabName: "Favorites",
      img: starImg,
      iconId: 1002,
    },
    {
      tabName: "Invite",
      img: inviteImg,
      iconId: 1003,
    },
    {
      tabName: "Casino Live",
      img: diceImg,
      iconId: 1004,
    },
    {
      tabName: "Cashier",
      img: walletImg,
      iconId: 1005,
    },
  ];

  return (
    <div className={style.container}>
      {FooterTabsData.map((item, index) => (
        <FooterTabs select={select} setSelect={()=>setSelect(item.iconId)} iconId={item.iconId} imgSrc={item.img} key={index} tabName={item.tabName} />
      ))}
    </div>
  );
});

export default Footer;
