import type { User } from "firebase";
import create from "zustand";
import api from "./api";

export enum AuthState {
  NotSet,
  Anonymous,
  Authenticated,
}

export type AuthStore = {
  user?: IUser;
  status: AuthState;
  fetchUser: (uid: string) => void;
  updateStatus: (user: User) => void;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  status: AuthState.NotSet,
  fetchUser: async (uid) => {
    let user: IUser | null = null;

    try {
      const document = await api.getUserByUid(uid);
      user = document.data() as IUser;

      set({ user, status: AuthState.Authenticated });
    } catch (err) {
      set({ user: null, status: AuthState.Anonymous });
    }
  },
  updateStatus: (user) => {
    if (user) {
      const { fetchUser } = get();
      fetchUser(user.uid);
    } else {
      set({ status: AuthState.Anonymous });
    }
  },
}));
