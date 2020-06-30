import type { User } from "firebase";
import create from "zustand";

export enum AuthState {
  NotSet,
  Anonymous,
  Authenticated,
}

export interface IAuthStore {
  user?: User;
  status: AuthState;
  updateStatus: (user: User) => void;
}

export const [useAuthStore, authStoreApi] = create<IAuthStore>((set) => ({
  user: null,
  status: AuthState.NotSet,
  updateStatus: (user) =>
    set({
      status: user ? AuthState.Authenticated : AuthState.Anonymous,
      user,
    }),
}));
