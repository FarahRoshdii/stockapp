import { derived } from "overmind";

const itemsPerPage = 100;
export const state = {
  tickers: {},
  tickerDetails: {},
  stats: {},
  query: {},
  searchResults: [],
  isLoadingTickers: true,
  isLoadingTickerDetails: false,
  isLoadingstats: false,
  currentPage: "0",
  totalPages: derived(
    (state) => Math.ceil(state.tickers.results.length / itemsPerPage) || 1
  ),
  // postsList: derived((state) => state.posts.results.slice(0, itemsPerPage)),
  postsList: derived((state) => {
    const skip = state.currentPage * itemsPerPage;
    return state.tickers.results.slice(skip, skip + 100);
  }),
};
