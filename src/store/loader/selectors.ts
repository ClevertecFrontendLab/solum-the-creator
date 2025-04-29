import { ApplicationState } from '../configure-store';

export const selectGlobalLoadingCount = (state: ApplicationState) => state.globalLoading.count;

export const selectIsGlobalLoading = (state: ApplicationState) => state.globalLoading.count > 0;
