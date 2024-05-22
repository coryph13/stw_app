import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
    isOpen: boolean | false;
}

const initialState: SearchState = {
    isOpen: false
}

export const searchSlice = createSlice({
    name: 'searching',
    initialState,
    reducers: {
        updateIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        }
    }
});

export const { updateIsOpen } = searchSlice.actions;
export default searchSlice.reducer;