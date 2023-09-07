export const increment = (state) => {
  state.count++;
  state.lastMutation = "increment";
};

export const incrementBy = (state, value) => {
  state.count += value;
  state.lastMutation = "incrementBy";
};

export const incrementByRandom = (state, value) => {
  state.count += value;
  state.lastMutation = "incrementByRandom";
};

export const incrementByRandom20 = (state, value) => {
  state.count += value;
  state.lastMutation = "incrementByRandom";
  state.lastMutation = "incrementByRandom20" + value;
  state.lastRandomInt = value;
};

export const setIsLoading = (state, value) => {
  state.isLoading = value;
  state.lastMutation = "setIsLoading " + value;
  state.isLoading = value;
};
