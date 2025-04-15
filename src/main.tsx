import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { theme } from '~/constants/theme/theme';
import { store } from '~/store/configure-store.ts';

import AppRoutes from './router/app-routes';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Provider store={store}>
                    <AppRoutes />
                </Provider>
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>,
);
