import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { components } from './components';
import { foundations } from './foundations';
import { globalStyles } from './styles/global';

export const theme: ThemeConfig = extendTheme({
    ...foundations,
    styles: globalStyles,
    components,
});
