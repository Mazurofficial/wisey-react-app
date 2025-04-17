import { RootState } from './../../app/store';
export const selectIsModalVisible = (state: RootState) => state.modal.isVisible;
