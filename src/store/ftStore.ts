import { create } from "zustand";
import { Game } from "../mockData/a";

export interface StoreTypes {
  popupProviders: boolean;
  setPopupProviders: () => void;
  category: string;
  setCategory: (category: string) => void;
  keyword: string;
  searchValue: (keyword: string) => void;
  provider: string;
  searchByProvider: (provider: string) => void;
  tabs: number;
  setTab: (id: number) => void;
  Collection: Game[];
  Collectify: (game: Game) => void;
  Uncollect: (gameId: number) => void;
}

const useFTStore = create<StoreTypes>((set) => ({
  popupProviders: false,
  setPopupProviders: () => set((s) => ({ popupProviders: !s.popupProviders })),
  category: "search",
  setCategory: (category: string) => set(() => ({ category: category })),
  keyword: "",
  searchValue: (keyword: string) => set(() => ({ keyword: keyword })),
  provider: "",
  tabs: 1001,
  setTab: (id: number) => set(() => ({ tabs: id })),
  searchByProvider: (provider: string) => set(() => ({ provider: provider })),
  Collection: [],
  Collectify: (game: Game) =>
    set((state) => ({
      Collection: [
        ...state.Collection,
        { ...game, markCollect: true },  
      ],
    })),

  Uncollect: (gameId: number) =>
    set((state) => ({
      Collection: state.Collection.filter((game) => {
        if (game.id === gameId) {
          game.markCollect = false;  
        }
        return game.id !== gameId;
      }),
    })),
}));

export default useFTStore;
