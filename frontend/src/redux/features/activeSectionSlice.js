import { createSlice } from '@reduxjs/toolkit';

export const activeSectionSlice = createSlice({
    name: 'activeSection',
    initialState: { activeSection: '' },
    reducers: {
        setSection: (state,action) => {
            state.activeSection = action.payload;
        },
    },
});

export const { setSection } = activeSectionSlice.actions;
export default activeSectionSlice.reducer;