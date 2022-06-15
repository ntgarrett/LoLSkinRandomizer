import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { buildAllChampionsUrl } from '../../api/urlBuilder';

export const getChampions = createAsyncThunk('champions/getChampions', async () => {
  return fetch(buildAllChampionsUrl())
    .then((response) => response.json())
    .then((allData) => allData.data)
    .catch(err => console.log(err));
});

const championsSlice = createSlice({
  name: 'champions',
  initialState: {
    allChampions: [],
    loading: false
  },
  extraReducers: {
    [getChampions.pending]: (state, action) => {
      state.loading = true;
    },
    [getChampions.fulfilled]: (state, action) => {
      state.loading = false;

      const allChampionData = Object.values(action.payload);
      const simpleChampionData = allChampionData.map(champ => {
        return ({
          id: champ.id,
          name: champ.name,
          key: champ.key
        })
      })

      state.allChampions = simpleChampionData;
    },
    [getChampions.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export default championsSlice.reducer;