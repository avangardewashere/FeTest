import { memo } from "react";
import style from "./index.module.scss";
import Tabs from "./Tab";
import sportsImg from "./../../assets/images/footer/sports.png";
import walletImg from "./../../assets/images/footer/wallet.png";
import diceImg from "./../../assets/images/footer/dice.png";
import inviteImg from "./../../assets/images/footer/Invitepng.png";
import starImg from "./../../assets/images/footer/star.png";
import useFTStore from "../../store/ftStore";
const Footer = memo(() => {
  const tabs = useFTStore((s) => s.tabs);
  const setTab = useFTStore((s) => s.setTab);
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

  const handleTabClick = (iconId: number) => {
    setTimeout(() => {
      setTab(iconId);
    }, 500);
  };

  return (
    <div className={style.container}>
      {FooterTabsData.map((item, index) => (
        <Tabs
          select={tabs}
          setSelect={() => handleTabClick(item.iconId)}
          iconId={item.iconId}
          imgSrc={item.img}
          key={index}
          tabName={item.tabName}
        />
      ))}
    </div>
  );
});

export default Footer;
