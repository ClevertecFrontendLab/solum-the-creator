import { ApplicationState } from '../configure-store';

export const selectAccessToken = (state: ApplicationState) => state.auth.accessToken;

export const selectUserId = (state: ApplicationState) => state.auth.userId;
