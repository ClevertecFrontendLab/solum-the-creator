import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';

import { theme } from '~/constants/theme/theme';
import { persistor, store } from '~/store/configure-store.ts';

import { AppRoutes } from './router/app-routes';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <AppRoutes />
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>,
);
