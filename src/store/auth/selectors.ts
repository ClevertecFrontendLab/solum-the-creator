import { ApplicationState } from '../configure-store';

export const selectAccessToken = (state: ApplicationState) => state.auth.accessToken;
