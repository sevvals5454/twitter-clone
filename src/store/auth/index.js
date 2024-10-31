import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "svvluz",
    fullName: "./svvl",
    avatar:
      "https://tweetdelete.net/tr/kaynaklar/wp-content/uploads/2023/09/bastian-riccardi-oZgt3qFhpfg-unsplash-3.jpg",
  },
  Accounts: [
    {
      id: 1,
      username: "svvluz",
      fullName: "./svvluz",
      avatar:
        "https://tweetdelete.net/tr/kaynaklar/wp-content/uploads/2023/09/bastian-riccardi-oZgt3qFhpfg-unsplash-3.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {

    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
