import { 
  TOGGLE_USE_DEFAULT_SKINS,
  ADD_CHAMPION_TO_FAVORITES,
  REMOVE_CHAMPION_FROM_FAVORITES,
  ADD_OWNED_SKIN,
  REMOVE_OWNED_SKIN,
  RESET_ALL_DATA,
  BULK_ADD_OWNED_SKINS,
  BULK_REMOVE_OWNED_SKINS
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
      const index = state.favoriteChampions.findIndex(obj => obj.uId === action.payload.uId)

      return {
        ...state,
        favoriteChampions: [
          ...state.favoriteChampions.slice(0,index),
          ...state.favoriteChampions.slice(index + 1)
        ]
      }
    }
    case ADD_OWNED_SKIN: {
      return {
        ...state,
        ownedSkins: [...state.ownedSkins, action.payload]
      }
    }
    case REMOVE_OWNED_SKIN: {
      const index = state.ownedSkins.findIndex(obj => obj.id === action.payload.id)

      return {
        ...state,
        ownedSkins: [
          ...state.ownedSkins.slice(0,index),
          ...state.ownedSkins.slice(index + 1)
        ]
      }
    }
    case BULK_ADD_OWNED_SKINS: {
      return {
        ...state,
        ownedSkins: [...state.ownedSkins, ...action.payload]
      }
    }
    case BULK_REMOVE_OWNED_SKINS: {
      return {
        ...state,
        ownedSkins: [...state.ownedSkins.filter(skin => skin.champion !== action.payload)]
      }
    }
    case RESET_ALL_DATA: {
      return {
        ...state = initial_state
      }
    }
    default: {
      return state;
    }
  }
}