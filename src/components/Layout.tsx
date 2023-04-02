import { Grid, useTheme } from '@mui/material'
import React, { ReactNode } from 'react'



interface LayoutProps {
    children: ReactNode
}

export const Layout = ({
    children
}: LayoutProps) => {
    return (
        <Grid container spacing={2} columns={16}>
            <Grid item xs={0.5} />
            <Grid item xs={15}>
                {children}
            </Grid>
            <Grid item xs={0.5} />
        </Grid>
    )
}

interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout = ({
    children
}: MainLayoutProps) => {
    return (
        <Grid container spacing={2} columns={16}>
            <Grid item xs={5} />
            <Grid 
            item xs={6} 
            display={'flex'} 
            flexWrap={'wrap'} 
            sx={{ 
                justifyContent: 'center', 
                alignContent: 'center' 
            }}
            >
                {children}
            </Grid>
            <Grid item xs={5} />
        </Grid>
    )
}

export const AboutMeLayout = ({
    children
}: MainLayoutProps) => {
    const theme = useTheme()
    return (
        <Grid
            container
            columns={16}
        >
            <Grid item xs={4} />
            <Grid
                item xs={8}
                display={'flex'}
                flexWrap={'wrap'}
                px={2}
            >
                {children}
            </Grid>
            <Grid item xs={4} />
        </Grid>
    )
}


export const WorkExperienceLayout = ({
    children
}: MainLayoutProps) => {
    const theme = useTheme()
    return (
        <Grid
            display={'flex'}
            container
            spacing={2}
            columns={16}
            sx={{ my: 5 }}
        >
            <Grid item xs={4} />
            <Grid
                item xs={8}
                display={'flex'}
                flexDirection={'column'}
                flexWrap={'wrap'}
                justifyContent={'center'}
            >
                {children}
            </Grid>
            <Grid item xs={4} />
        </Grid>
    )
}

export const ProjectLayout = ({
    children
}: MainLayoutProps) => {
    return (
        <Grid
            container
            spacing={2}
            columns={16}
            sx={{ my: 5 }}
        >
            <Grid item xs={4} />
            <Grid
                item xs={8}
                display={'flex'}
                flexWrap={'wrap'}
            >
                {children}
            </Grid>
            <Grid item xs={4} />
        </Grid>
    )
}

export const EducationLayout = ({
    children
}: MainLayoutProps) => {
    const theme = useTheme()
    return (
        <Grid
            display={'flex'}
            container
            spacing={2}
            columns={16}
            sx={{ my: 5 }}
        >
            <Grid item xs={4} />
            <Grid
                item xs={8}
                display={'flex'}
                flexDirection={'column'}
                flexWrap={'wrap'}
                justifyContent={'center'}
            >
                {children}
            </Grid>
            <Grid item xs={4} />
        </Grid>
    )
}
