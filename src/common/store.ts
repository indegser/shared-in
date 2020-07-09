import type { User } from "firebase";
import create from "zustand";
import { db } from "./modules/firebase";

export enum AuthState {
  NotSet,
  Anonymous,
  Authenticated,
}

export interface IAuthStore {
  user?: IUser;
  status: AuthState;
  fetchUser: (uid: string) => void;
  updateStatus: (user: User) => void;
}

export const [useAuthStore, authStoreApi] = create<IAuthStore>((set, get) => ({
  user: null,
  status: AuthState.NotSet,
  fetchUser: async (uid) => {
    let user: IUser | null = null;

    try {
      const document = await db.collection("users").doc(uid).get();
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
