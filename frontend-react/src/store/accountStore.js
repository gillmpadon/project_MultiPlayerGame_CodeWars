import { create } from "zustand";

const useAccountStore = create((set) => ({
  account: { username: "", email: "" },
  setAccount: (username, email) =>
    set({
      account: { username, email },
    }),
  removeAccount: () => set({ account: { username: "", email: "" } }),
}));

export default useAccountStore;
