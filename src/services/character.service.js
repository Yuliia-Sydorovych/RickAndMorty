import api from '../hooks/useAxios';

const getCharacters = () => {
  const characterList = api;
  return characterList;
};

export {
  getCharacters
};