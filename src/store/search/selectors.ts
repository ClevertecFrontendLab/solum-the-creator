import { ApplicationState } from '../configure-store';

export const selectSearchQuery = (state: ApplicationState) => state.search.query;

export const selectIsSearchActive = (state: ApplicationState) => state.search.query.length > 0;
