export const loadTickers = async ({ state, effects }) => {
  state.tickers = await effects.getTickers();
  state.isLoadingTickers = false;
};

export const changeShowCount = async ({ state }, event) => {
  state.showCount = event.target.value;
};

export const prevPage = async ({ state }) => {
  {
    state.currentPage > 0 ? state.currentPage-- : null;
  }
};

export const nextPage = async ({ state }) => {
  {
    state.totalPages - state.currentPage > 1 ? state.currentPage++ : null;
  }
};

export const loadTickerDetails = async ({ state, effects }, value) => {
  state.tickerDetails = await effects.getTickerDetails(value);
  state.isLoadingTickerDetails = true;
  sessionStorage.setItem(`${value}`, JSON.stringify(state.tickerDetails));
};

export const loadmemTickerDetails = async ({ state }, value) => {
  state.tickerDetails = await JSON.parse(sessionStorage.getItem(`${value}`));
  state.isLoadingTickerDetails = true;
};

export const loadmemstats = async ({ state }, value) => {
  state.stats = await JSON.parse(sessionStorage.getItem(`${value + "stats"}`));
  state.isLoadingstats = true;
};

export const loadstats = async ({ state, effects }, value) => {
  state.stats = await effects.getstats(value);
  state.isLoadingstats = true;
  sessionStorage.setItem(`${value + "stats"}`, JSON.stringify(state.stats));
};
