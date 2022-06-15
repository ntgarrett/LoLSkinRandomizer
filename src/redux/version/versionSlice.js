import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { versionUrl } from '../../api/urlBuilder';

export const getVersionNumber = createAsyncThunk('version/getVersion', async () => {
  return fetch(versionUrl)
    .then((response) => response.json())
    .then((data) => data[0])
    .catch((err) => console.log(err));
});

const versionSlice = createSlice({
  name: 'version',
  initialState: {
    versionNumber: '',
    loading: false
  },
  extraReducers: {
    [getVersionNumber.pending]: (state, action) => {
      state.loading = true;
    },
    [getVersionNumber.fulfilled]: (state, action) => {
      state.loading = false;
      state.versionNumber = action.payload;
    },
    [getVersionNumber.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export default versionSlice.reducer;