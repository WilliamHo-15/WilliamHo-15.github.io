import { Box, Typography, List, Link, ListSubheader, useTheme } from '@mui/material'
import React from 'react'
import { ProjectLayout, AboutMeLayout } from './Layout'
import yycodrImage from '../static/yycodr.jpg'
import cryptoPotImage from '../static/CryptoPot.jpg'
import { ArrowListItem } from './ArrowListItem'

export const Project = () => {
    const theme = useTheme()

    const OutdoorRinkProject = () => {
        return (
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                gap={20}
            >
                <img
                    src={yycodrImage}
                    style={{ borderRadius: '2%' }}
                    height={425}
                />
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    gap={2}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        sx={{ textAlign: 'end' }}
                    >
                        <Typography variant={'h2'}>Outdoor Rink Locator</Typography>
                        <Link href='https://yyc-odr.ca' target={'_blank'}>yyc-odr.ca</Link>
                    </Box>
                    <Typography variant={'h3'}>A web app for determining the closest outdoor rink to the user's location in Calgary. Sign in and check into the outdoor rink if you are at that location to show up on the leaderboard!</Typography>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'end'}>
                        <Box display={'flex'}>
                            <List
                                subheader={
                                    <ListSubheader>
                                        Frontend
                                    </ListSubheader>
                                }
                                dense={false}
                            >
                                <ArrowListItem description={'TypeScript'} />
                                <ArrowListItem description={'React'} />
                                <ArrowListItem description={'Material UI'} />
                            </List>
                            <List
                                dense={false}
                                subheader={
                                    <ListSubheader>
                                        Backend
                                    </ListSubheader>
                                }
                            >
                                <ArrowListItem description={'NoSQL'} />
                                <ArrowListItem description={'Firebase'} />
                                <ArrowListItem description={'Firestore'} />
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }

    const CryptoPotProject = () => {
        return (
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                gap={5}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    gap={2}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        sx={{ textAlign: 'start' }}
                    >
                        <Typography variant={'h2'}>CryptoPot</Typography>
                        <Typography variant={'h3'}>In development</Typography>
                    </Box>
                    <Typography variant={'h3'}>A web3 app allowing users to make ethereum deposits for a chance to double their deposit. Users can search depositor information and track current pot and target. Must have Metamask installed.</Typography>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
                        <Box display={'flex'}>
                            <List
                                subheader={
                                    <ListSubheader>
                                        Built with 
                                    </ListSubheader>
                                }
                                dense={false}
                            >
                                <ArrowListItem description={'Solidity'}/>
                                <ArrowListItem description={'TypeScript'} />
                                <ArrowListItem description={'React'} />
                            </List>
                        </Box>
                    </Box>
                </Box>
                <img
                    src={cryptoPotImage}
                    height={250}
                />
            </Box>
        )
    }

    return (
        <div id='projects'>
        <ProjectLayout>
            <Box
                display={'flex'}
                flexDirection={'column'}
                width={'100%'}
                mt={2}
            >
                <Typography variant={'h1'} sx={{ marginBottom: 4 }}>Projects</Typography>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={10}
                    sx={{ mx: 3 }}
                >
                    <OutdoorRinkProject />
                    <CryptoPotProject />
                </Box>
            </Box>
        </ProjectLayout>
        </div>
    )

}