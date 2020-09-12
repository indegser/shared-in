import create from "zustand";
import api from "./api";

type ShareStore = {
  fetchStatus: "FAIL" | "SUCCESS" | "FETCHING";
  shares?: IShare[];
  fetch: () => void;
  receive: (shares: IShare[]) => void;
};

export const useShareStore = create<ShareStore>((set) => ({
  fetchStatus: "FETCHING",
  shares: undefined,
  fetch: async () => {
    try {
      const shares = await api.fetchShares();
      set({ fetchStatus: "SUCCESS", shares });
    } catch (err) {
      set({ fetchStatus: "FAIL" });
    }
  },
  receive: (shares) => set({ shares }),
}));
