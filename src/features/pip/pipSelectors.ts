import { RootState } from './../../app/store';
export const selectPipLink =  (state: RootState) => state.pip.activeLink
export const selectPipStatus = (state: RootState) => state.pip.isActive