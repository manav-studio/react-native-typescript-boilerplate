import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@stores/index';

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: {
    onboardingStatus: false,
  } as { onboardingStatus: boolean },
  reducers: {
    setOnboardingStatus: (state, action) => {
      state.onboardingStatus = action.payload;
    },
  },
});
export const { setOnboardingStatus } = onboardingSlice.actions;
export const onboardingStatus = (state: RootState) =>
  state.onboarding.onboardingStatus;

export default onboardingSlice.reducer;
