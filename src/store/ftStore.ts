import { create } from "zustand";

export interface StoreTypes {
   popupProviders: boolean;
   setPopupProviders: () => void;
   category:number;
   setCategory:(id:number) => void;
}

const useFTStore = create<StoreTypes>((set) => ({
    popupProviders: false,
    setPopupProviders: () => set((s) => ({ popupProviders: !s.popupProviders })),
	category:100,
	setCategory:(id:number)=>set(()=>({category:id}))
}));

export default useFTStore;
