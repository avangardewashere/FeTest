import { memo,   } from "react";
import style from "./index.module.scss";
import sampleImg from "./../../../assets/images/image 22430.png";
import likeImg from "./../../../assets/images/gameMenu/fave-like.png";
import unlikeImg from "./../../../assets/images/gameMenu/fave.png";

interface GameItemProps{
	imgSrc?:string;
	gameName?:string;
    like?:boolean;
	firmName?:string;
	id:number;
}

const GameItem = memo((props:GameItemProps) => {
	const {imgSrc, gameName, firmName,like,id} = props;
//   const [like, setLike] = useState(false);

function generateColorFromId(gameId:number): string {
	let hash = 0;
	for (let i = 0; i < gameId.toString().length; i++) {
	  hash = gameId.toString().charCodeAt(i) + ((hash << 5) - hash);
	}
  
 
	const hue = Math.abs(hash) % 360;            
	const saturation = 50 + (Math.abs(hash) % 20);  
	const lightness = 30 + (Math.abs(hash) % 10);   
  
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  function getLinearGradientBackground(gameId: number): string {
    const mainColor = generateColorFromId(gameId);
    return `linear-gradient(to top, ${mainColor} 60%, #ffffff00)`;
}

  return (
    <div className={style.gameItem}>
      <div className={style.floatingTap} 
	  //onClick={() => setLike(!like)}
	  >
        <img src={like ? likeImg : unlikeImg} alt="fun-88-star-like" />
      </div>
      <img src={imgSrc || sampleImg} alt="fun-88-game-Icon" />
      <div className={style.details}  style={{
            background: getLinearGradientBackground(id)}}>
        <span>{firmName ||"Game Provider"}</span>
        <span>{gameName || "Game Name"} </span>
      </div>
    </div>
  );
});

export default GameItem;
