import { Box, Typography, List, Button, IconButton } from '@mui/material'
import React from 'react'
import { ArrowListItem } from './ArrowListItem'
import { MainLayout } from './Layout'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



export const Contact = () => {

    const SocialMedia = () => {
        return (
            <Box display={'flex'}>
                <IconButton onClick={() => window.open('https://www.linkedin.com/in/william-ho15/', '_blank')}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton onClick={() => window.open('https://github.com/WilliamHo-15', '_blank')}>
                    <GitHubIcon />
                </IconButton>
            </Box>
        )
    }

    return (
        <div id='contact'>
            <MainLayout>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    textAlign={'center'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    mt={5}
                    mb={25}
                    gap={3}

                >
                    <Typography variant={'h1'} sx={{ marginBottom: 2 }}>Contact Me</Typography>
                    <Button
                        variant={'outlined'}
                        sx={{ width: '50%' }}
                        onClick={() => window.location.href = 'mailto:william.ho3@ucalgary.ca'}
                    >
                        Say Hello
                    </Button>
                    <SocialMedia />
                </Box>
            </MainLayout>
        </div>
    )
}