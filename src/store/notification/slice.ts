import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Notification = {
    id: string;
    title: string;
    type?: 'success' | 'error';
    description?: string;
};

type NotificationState = {
    notifications: Notification[];
};

const initialState: NotificationState = {
    notifications: [],
};

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification: (
            state,
            action: PayloadAction<Omit<Notification, 'id'> | Notification>,
        ) => {
            const notification = {
                ...action.payload,
                id: 'id' in action.payload ? action.payload.id : Date.now().toString(),
            };

            state.notifications.push(notification);
        },
        removeNotification: (state, action: PayloadAction<string>) => {
            state.notifications = state.notifications.filter(
                (notification) => notification.id !== action.payload,
            );
        },
        clearNotifications: (state) => {
            state.notifications = [];
        },
    },
});

export const { addNotification, removeNotification, clearNotifications } =
    notificationSlice.actions;
export default notificationSlice.reducer;
