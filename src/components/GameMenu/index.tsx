import { memo, useEffect, useState } from "react";
import style from "./index.module.scss";
import GameItem from "./GameItem";
import { Game } from "../../mockData/a";
import { games } from "../../mockData/games";


const fetchGames = async (): Promise<Game[]> => {
	return new Promise((resolve) => {
	   setTimeout(() => {
		  resolve(games); // Resolve with imported data instead of fetched data
	   }, 3000); // 3-second delay
	});
 };

const GameMenu = memo(() => {
	const [games, setGames] = useState<Game[]>([]);

	useEffect(() => {
	   fetchGames().then((data) => setGames(data));
	}, []);

  return (
    <div className={style.container}>
  {games.map((item,index)=>{
	console.log("hello",item)
	return(
		<GameItem id={item.id} gameName={item.gameName} key={index} imgSrc={item.imgGame}firmName={item.firmName} like={item.markCollect} />
	)
  })}
	  
    </div>
  );
});

export default GameMenu;
