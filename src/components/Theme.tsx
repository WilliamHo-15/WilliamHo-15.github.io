import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Theme {
        custom: {
            white: string
            lightGray: string
            black: string
        }
    }

    interface ThemeOptions {
        custom?: {
            white?: string
            lightGray?: string
            black?: string
        }
    }
}

export const CryptoPotTheme = createTheme({
    palette: {
        background: {
            default: '#FFFFFF',
        },
        text: {
            primary: '#000000',
        },
    },
    custom: {
        white: '#FFFFFF',
        lightGray: '#F8FCFF',
        black: '#000000'
    },
    typography: {
        allVariants: {
            color: '#000000'
        },
        fontFamily: [
            'Inter',
            'sans-serif',
            'Arial'
        ].join(','),
        h1: {
            fontSize: '48px',
            fontWeight: 500
        },
        h2: {
            fontSize: '24px',
        },
        h3: {
            fontSize: '16px'
        },
        h4: {
            fontSize: '14px',
        },
        h5: {
            fontSize: '18px',
        },
        h6: {
            fontSize: '24px'
        }
    },
})

interface PortfolioThemeProps {
    children: React.ReactNode
}

export const PortfolioTheme = ({ children }: PortfolioThemeProps) => {
    return (
        <ThemeProvider theme={CryptoPotTheme}>
            {children}
        </ThemeProvider>
    )
}

export default PortfolioTheme 