// import {createSlice} from '@reduxjs/toolkit';
// import {LoaderParams} from '../../types/commonTypes';

// interface GenericState {
//   loader: LoaderParams;
//   noInternet: boolean;
//   appStateVisible: 'inactive' | 'background' | 'active' | null;
// }

// const initialState: GenericState = {
//   loader: {
//     isLoading: false,
//     loadingType: undefined,
//   },
//   noInternet: false,
//   appStateVisible: 'active',
// };

// export const genericSlice = createSlice({
//   name: 'generic',
//   initialState,
//   reducers: {
//     setIsLoading: (state, action) => {
//       state.loader = {
//         isLoading: action?.payload,
//         loadingType: undefined,
//       };
//     },
//     setLoader: (
//       state,
//       action: {
//         payload: LoaderParams;
//       },
//     ) => {
//       state.loader = action?.payload;
//     },
//     setNoInternet: (state, action) => {
//       state.noInternet = action?.payload;
//     },
//     setAppStateVisible: (state, action) => {
//       state.appStateVisible = action?.payload;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const {setIsLoading, setNoInternet, setAppStateVisible, setLoader} =
//   genericSlice.actions;

// export default genericSlice.reducer;
