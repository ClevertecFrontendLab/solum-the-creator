import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';

import { Notification } from '~/components/shared/notification/notification';
import { theme } from '~/constants/theme/theme';
import { persistor, store } from '~/store/configure-store.ts';

import { LayoutConfigProvider } from './context/layout-config/layout-config-provider';
import { router } from './router/router';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <LayoutConfigProvider>
                        <Notification />
                        <RouterProvider router={router} />
                    </LayoutConfigProvider>
                </PersistGate>
            </Provider>
        </ChakraProvider>
    </StrictMode>,
);
