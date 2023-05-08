import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../../app/store";

interface Flower {
  id: number;
  name: string;
  latin_name: string;
  sightings: number;
  profile_picture: string;
}

interface FlowersState {
  flowers: Flower[];
  loading: boolean;
  error: string | null;
}

interface ActionGetFlowerSuccess {
   flowers: Flower[]
}

const initialState: FlowersState = {
  flowers: [],
  loading: false,
  error: null,
};

export const flowersSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {
    getFlowersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getFlowersSuccess: (state, action: PayloadAction<ActionGetFlowerSuccess>) => {
      state.flowers = action.payload.flowers;
      state.loading = false;
      state.error = null;
    },
    getFlowersFailure: (state, action: PayloadAction<string>) => {
      state.flowers = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getFlowersStart,
  getFlowersSuccess,
  getFlowersFailure,
} = flowersSlice.actions;

export const fetchFlowers = (): AppThunk<void> => async (dispatch) => {
  try {
    dispatch(getFlowersStart());
    const response = await axios.get<ActionGetFlowerSuccess>(
      "https://flowrspot-api.herokuapp.com/api/v1/flowers"
    );
    dispatch(getFlowersSuccess(response.data));
  } catch (error) {
    if(error instanceof Error) {
        dispatch(getFlowersFailure(error.message));
    }
  }
};


export default flowersSlice.reducer;
