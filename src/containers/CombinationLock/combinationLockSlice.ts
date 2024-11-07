import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CombinationLockState {
  combination: string;
  currentInput: string;
  text: string;
  displayStatus: 'denied' | 'granted' | 'default';
}

const initialState: CombinationLockState = {
  combination: '1337',
  currentInput: '',
  text: '',
  displayStatus: 'default',
};

export const combinationLockSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<string>) => {
      state.currentInput += action.payload;
      state.text = '*'.repeat(state.currentInput.length);
    },
    deleteLastCharacter: (state) => {
      state.currentInput = state.currentInput.slice(0, -1);
      state.text = '*'.repeat(state.currentInput.length);
      state.displayStatus = 'default';
    },
    enterCombination: (state) => {
      if (state.combination === state.currentInput) {
        state.text = 'Access Granted';
        state.displayStatus = 'granted';
      } else {
        state.text = 'Access Denied';
        state.displayStatus = 'denied';
      }
    },
  },
});

export const combinationLockReducer = combinationLockSlice.reducer;
export const { addCharacter, deleteLastCharacter, enterCombination } =
  combinationLockSlice.actions;
