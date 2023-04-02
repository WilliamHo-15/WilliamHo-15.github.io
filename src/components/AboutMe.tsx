import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { AboutMeLayout, MainLayout } from './Layout'
import AboutMeImage from '../static/aboutMe.jpg'
import { ArrowListItem } from './ArrowListItem'

export const AboutMe = () => {
    return (
        <div id='about'>
            <AboutMeLayout>
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    my={10}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        width={'60%'}
                    >
                        <Typography variant={'h1'} sx={{ marginBottom: 2 }}>About Me</Typography>
                        <Typography variant={'h3'} sx={{ marginBottom: 1 }}>Hello! My name is William and I enjoy creating things that can provide a positive impact to the world. I am currently a software developer at Microquest, developing software products fullstack.</Typography>
                        <Typography variant={'h3'} sx={{ marginBottom: 2 }}>I have a Bachelors of Science in Computer Science with Distinction, and a Bachelors of Science in Chemical Engineering in the Internship Program. I love software development as it provides endless opportunities to be creative!</Typography>
                        <Typography variant={'h3'}>Here are a few technologies I have been working with recently:</Typography>
                        <Box
                            display={'flex'}
                            gap={5}
                        >
                            <List dense={true}>
                                <ArrowListItem description={'JavaScript'} />
                                <ArrowListItem description={'TypeScript'} />
                                <ArrowListItem description={'React'} />
                                <ArrowListItem description={'Node.js'} />
                                <ArrowListItem description={'Solidity'} />
                            </List>
                            <List dense={true}>
                                <ArrowListItem description={'C#'} />
                                <ArrowListItem description={'.NET'} />
                                <ArrowListItem description={'GraphQL'} />
                                <ArrowListItem description={'PostgreSQL'} />
                                <ArrowListItem description={'Azure'} />
                            </List>
                        </Box>
                    </Box>
                    <img
                        src={AboutMeImage}
                        style={{ borderRadius: '10%' }}
                        height={300}
                    />
                </Box>
            </AboutMeLayout>
        </div>
    )
}