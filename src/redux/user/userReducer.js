import { 
  TOGGLE_USE_DEFAULT_SKINS,
  ADD_CHAMPION_TO_FAVORITES,
  REMOVE_CHAMPION_FROM_FAVORITES,
  ADD_OWNED_SKIN,
  REMOVE_OWNED_SKIN,
 } from "./types";

const initial_state = {
  favoriteChampions: [],
  ownedSkins: [],
  includeDefaultSkins: false
};

export const userReducer = (state = initial_state, action) => {
  switch(action.type) {
    case TOGGLE_USE_DEFAULT_SKINS: {
      return {
        ...state,
        includeDefaultSkins: action.payload,
      }
    }
    case ADD_CHAMPION_TO_FAVORITES: {
      return {
        ...state,
        favoriteChampions: [...state.favoriteChampions, action.payload]
      }
    }
    case REMOVE_CHAMPION_FROM_FAVORITES: {
      let newFavorites = [...state.favoriteChampions];
      newFavorites.filter(elem => elem.key !== action.payload.key);
      return {
        ...state,
        favoriteChampions: newFavorites
      }
    }
    case ADD_OWNED_SKIN: {
      return {
        ...state,
        ownedSkins: [...state.ownedSkins, action.payload]
      }
    }
    case REMOVE_OWNED_SKIN: {
      let newOwnedSkins = [...state.ownedSkins];
      newOwnedSkins.filter(elem => elem.key !== action.payload.key);
      return {
        ...state,
        ownedSkins: newOwnedSkins
      }
    }
    default: {
      return state;
    }
  }
}