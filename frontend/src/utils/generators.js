export const uniqKeyGen = (seed = null) => `${Date.now()}${seed || ''}`;
