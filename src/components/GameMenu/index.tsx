import { memo, useEffect, useState } from "react";
import style from "./index.module.scss";
import GameItem from "./GameItem";
import { Game } from "../../mockData/a";

import useFTStore from "../../store/ftStore";
import noRecImg from "./../../assets/images/gameMenu/not-found.png.png";
import {
  FetchByProvider,
  fetchGames,
  SearchByCategory,
  SearchGames,
} from "../api/fetch";

const GameMenu = memo(() => {
  const [games, setGames] = useState<Game[]>([]);
  const provider = useFTStore((s) => s.provider);
  const keyword = useFTStore((s) => s.keyword);
  const category = useFTStore((s) => s.category);
  const tabs = useFTStore((s) => s.tabs);
  const collection = useFTStore((s) => s.Collection);

  useEffect(() => {
    const updateGamesWithCollectionStatus = (fetchedGames: Game[]) => {
      // Synchronize the collection status
      return fetchedGames.map((game) => ({
        ...game,
        markCollect: collection.some((collected) => collected.id === game.id),
      }));
    };

    if (tabs === 1002) {
      // When tabs are set to 1002, search within the collection
      const filteredCollection = collection.filter((game) =>
        game.gameName.toLowerCase().includes(keyword.toLowerCase())
      );
      setGames(filteredCollection);
    } else if (category === "search") {
      if (provider !== "") {
        // Fetch by provider
        FetchByProvider(provider).then((data) => {
          if (keyword === "") {
            setGames(updateGamesWithCollectionStatus(data));
          } else {
            // Filter by search
            const filteredGames = data.filter((game: Game) =>
              game.gameName.toLowerCase().includes(keyword.toLowerCase())
            );
            setGames(updateGamesWithCollectionStatus(filteredGames));
          }
        });
      } else if (keyword === "") {
        // Fetch all games
        fetchGames().then((data) => {
          setGames(updateGamesWithCollectionStatus(data));
        });
      } else {
        // Search for games
        SearchGames(keyword).then((data) =>
          setGames(updateGamesWithCollectionStatus(data))
        );
      }
    } else {
      // Search by category
      SearchByCategory(category).then((data) => {
        setGames(updateGamesWithCollectionStatus(data));
      });
    }
  }, [keyword, category, provider, tabs, collection]);

  return (
    <div className={style.container}>
      {games.length === 0 && (
        <>
          <div className={style.noRecord}>
            <img src={noRecImg} alt="" />
            <span>No records Found</span>
          </div>
        </>
      )}

      {tabs === 1001 &&
        games.map((item, index) => {
          return (
            <GameItem
              game={item}
              id={item.id}
              gameName={item.gameName}
              key={index}
              imgSrc={item.imgGame}
              firmName={item.firmName}
              like={item.markCollect}
            />
          );
        })}

      {(tabs === 1003 || tabs === 1004 || tabs === 1005) && (
        <>
          <div className={style.noRecord}>
            {/* <img src={noRecImg} alt="" /> */}
            <span style={{ fontSize: "30rem" }}>Coming Soon</span>
          </div>
        </>
      )}

      {tabs === 1002 &&
        games.map((item, index) => {
          return (
            <GameItem
              id={item.id}
              gameName={item.gameName}
              key={index}
              game={item}
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
