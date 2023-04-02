import React from 'react'
import { Box, AppBar, Toolbar, Avatar, Typography, useTheme } from "@mui/material"
import { Link } from 'react-scroll'
import AboutMeImage from '../static/aboutMe.jpg'


export const NavBar = () => {
    const theme = useTheme()

    return (
        <Box>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: theme.palette.background.default,
                    px: 4
                }}
                elevation={1}
            >
                <Toolbar
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Box
                        display={'flex'}
                        sx={{
                            alignItems: 'center'
                        }}
                        gap={1}
                    >
                        <Avatar alt="William Ho" src={AboutMeImage}/>
                        <Typography>WILLIAM HO</Typography>
                    </Box>
                    <Box
                        display={'flex'}
                        gap={3}
                        color={theme.custom.black}
                        sx={{
                            cursor: 'pointer'
                        }}
                    >
                        <Link to='about' smooth={true} duration={500}>About</Link>
                        <Link to='experience' smooth={true} duration={500}>Professional experience</Link>
                        <Link to='projects' smooth={true} duration={500}>Projects</Link>
                        <Link to='education' smooth={true} duration={500}>Education</Link>
                        <Link to='contact' smooth={true} duration={500}>Contact</Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}