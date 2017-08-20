const getContainer = state => state.container;

export const loading = state => getContainer(state).loading;
export const success = state => getContainer(state).success;
export const failure = state => getContainer(state).failure;
export const getPuzzle = state => getContainer(state).puzzle;
export const response = state => getContainer(state).response;
export const solution = state => getContainer(state).solution;
export const inputValue = state => getContainer(state).inputValue;
