import { RootState } from './../../app/store';
export const selectPipLink =  (state: RootState) => state.pip.activeLink
export const selectPipIsActive = (state: RootState) => state.pip.isActive