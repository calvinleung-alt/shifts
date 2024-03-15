'use client'

import { ThemeOptions, ThemeProvider, createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const primaryMain = '#2BAF6A';
const errorMain = '#F44336';
const warningMain = '#FFA726';
const infoMain = alpha('#ADBAC0', 0.35);

export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: primaryMain,
            light: alpha(primaryMain, 0.15),
            dark: alpha(primaryMain, 0.9),
            contrastText: '#fff',
        },
        warning: {
            main: warningMain,
            light: alpha(warningMain, 0.5),
            dark: alpha(warningMain, 0.9),
            contrastText: '#fff',
        },
        error: {
            main: errorMain,
            light: alpha(errorMain, 0.1),
            dark: alpha(errorMain, 0.9),
            contrastText: '#fff',
        },
        info: {
            main: infoMain,
            light: alpha(infoMain, 0.15),
            dark: alpha(infoMain, 0.9),
            contrastText: '#fff',
        },
        action: {
            disabled: '#fff'
        },
    }
};

export default function StandardThemeProvider({ children }: { children: React.ReactNode }) {
    const theme = createTheme(themeOptions);
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}