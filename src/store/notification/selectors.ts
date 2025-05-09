import { ApplicationState } from '../configure-store';

export const selectAllNotifications = (state: ApplicationState) => state.notification.notifications;
