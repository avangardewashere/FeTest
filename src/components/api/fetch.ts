import { Game, providersType } from "../../mockData/a";
import { games } from "../../mockData/games";
import { providersCompany } from "../../mockData/providers";

//game
export const fetchGames = async (): Promise<Game[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(games);
      }, 500);
    });
  };

export const SearchGames = async (gameName: string): Promise<Game[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredGames = games.filter((game) =>
          game.gameName.toLowerCase().includes(gameName.toLowerCase())
        );
        resolve(filteredGames);
      }, 200);
    });
  };
  

export const SearchByCategory = async (gameEntryTagName: string): Promise<Game[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredGames = games.filter((game) =>
          game?.gameEntryTagName
            ?.toLowerCase()
            .includes(gameEntryTagName?.toLowerCase())
        );
        resolve(filteredGames);
      }, 600);
    });
  };

// provider
export const fetchProviders = async (): Promise<providersType[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(providersCompany);
      }, 800);
    });
  };

  export const FetchByProvider = async (provider: string): Promise<Game[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredGames = games.filter((game) =>
          game?.firmName
            ?.toLowerCase()
            .includes(provider?.toLowerCase())
        );
        resolve(filteredGames);
      }, 800);
    });
  };
  