import React from 'react'
import { EducationLayout } from './Layout'
import { Box, Typography } from '@mui/material'
import uofcImage from '../static/uofc.jpg'

export const Education = () => {
    return (
        <div id='education'>
            <Box
                display={'flex'}
                flexDirection={'column'}
                mt={2}
            >
                <EducationLayout>
                    <Typography variant={'h1'} sx={{ marginBottom: 2 }}>Education</Typography>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'left'}>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                        >
                            <Box>
                                <Typography variant={'h2'} sx={{ marginBottom: 1 }}>Bachelors of Science, Computer Science with Distinction</Typography>
                                <Typography variant={'h3'} sx={{ marginBottom: 1 }}>University of Calgary, May 2020 - May 2022</Typography>
                            </Box>
                            <img
                                src={uofcImage}
                                height={100}
                            />
                        </Box>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                        >
                            <Box>
                                <Typography variant={'h2'} sx={{ marginBottom: 1 }}>Bachelors of Science, Chemical Engineering - Co-op Program</Typography>
                                <Typography variant={'h3'} sx={{ marginBottom: 1 }}>University of Calgary, Sep 2015 - May 2020</Typography>
                            </Box>
                            <img
                                src={uofcImage}
                                height={100}
                            />
                        </Box>
                        <Box>
                            <Typography variant={'h2'} sx={{ marginBottom: 1 }}>Certifications</Typography>
                            <Typography variant={'h3'} sx={{ marginBottom: 1 }}>CFA Level 1</Typography>
                            <Typography variant={'h3'} sx={{ marginBottom: 1 }}>Microsoft Azure Fundamentals (AZ-900)</Typography>
                            <Typography variant={'h3'} sx={{ marginBottom: 1 }}>Microsoft Azure AI Fundamentals (AI-900)</Typography>
                        </Box>
                    </Box>
                </EducationLayout>
            </Box>
        </div>
    )
}
