import { memo, useEffect, useState } from "react";
import style from "./index.module.scss";
import GameItem from "./GameItem";
import { Game } from "../../mockData/a";
import { games } from "../../mockData/games";

const fetchGames = async (): Promise<Game[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(games);
    }, 3000);
  });
};

// Function to fetch games based on game name
const SearchGames = async (gameName: string): Promise<Game[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredGames = games.filter((game) =>
        game.gameName.toLowerCase().includes(gameName.toLowerCase())
      );
      resolve(filteredGames);
    }, 3000);
  });
};

const GameMenu = memo(() => {
  const [games, setGames] = useState<Game[]>([]);
  console.log(SearchGames);

  
  useEffect(() => {
    fetchGames().then((data) => setGames(data));
  }, []);

  return (
    <div className={style.container}>
      {games.map((item, index) => {
        console.log("hello", item);
        return (
          <GameItem
            id={item.id}
            gameName={item.gameName}
            key={index}
            imgSrc={item.imgGame}
            firmName={item.firmName}
            like={item.markCollect}
          />
        );
      })}
    </div>
  );
});

export default GameMenu;
