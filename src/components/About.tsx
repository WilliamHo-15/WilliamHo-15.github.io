import React from 'react'
import { Box, Typography } from '@mui/material'
import AboutImage from '../static/backgroundTexture.jpg'
import { MainLayout } from './Layout'

export const About = () => {
    return (
        <Box
            display={'flex'}
            minHeight={'50vh'}
            minWidth={'100vh'}
            sx={{
                backgroundImage: `url(${AboutImage})`,
            }}
        >
            <MainLayout>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    sx={{
                        textAlign: 'center'
                    }}
                    gap={2}
                >
                    <Typography variant={'h1'}>Hi, my name is William Ho</Typography>
                    <Typography variant={'h2'}>I'm a fullstack software developer specializing in building, designing and shipping exceptional software products.</Typography>
                </Box>
            </MainLayout>
        </Box>
    )
}