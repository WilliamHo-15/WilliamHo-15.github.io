import React from 'react'
import { WorkExperienceLayout } from './Layout'
import { Box, List, Typography } from '@mui/material'
import AboutImage from '../static/backgroundTexture.jpg'
import { ArrowListItem } from './ArrowListItem'



export const WorkExperience = () => {

    return (
        <div id='experience'>
        <Box
            display={'flex'}
            flexDirection={'column'}
            mt={2}
            sx={{
                //backgroundImage: `url(${AboutImage})`,
            }}
        >
            <WorkExperienceLayout>
                <Typography variant={'h1'} sx={{ marginBottom: 2 }}>Professional Experience</Typography>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'left'}>
                    <Typography variant={'h2'} sx={{ marginBottom: 1 }}>Software Developer @ Microquest</Typography>
                    <Typography variant={'h4'} sx={{ marginBottom: 1 }}>May 2022 - Present</Typography>
                    <List dense={true}>
                        <ArrowListItem description={'Designed and implemented scalable and efficient relational database schemas using PostgreSQL and SQL to support critical application features'} />
                        <ArrowListItem description={'Created robust CRUD API endpoints utilizing C# and GraphQL for distributed Citus database instances, ensuring seamless data integration'} />
                        <ArrowListItem description={'Conducted rigorous unit and integration testing in C# to validate the functionality and performance of back end endpoints'} />
                        <ArrowListItem description={'Designed and implemented an efficient parsing script using Azure functions to seamlessly parse CSV files and upload them to a PostgreSQL database'} />
                        <ArrowListItem description={'Developed responsive and user-friendly React components using TypeScript, enhancing the customer facing web application’s functionality and usability'} />
                        <ArrowListItem description={'Collaborated with the quality assurance team to resolve bugs and improve software quality'} />
                        <ArrowListItem description={'Contributed to 100% continuous integration and deployment (CI/CD) as a valuable member of an agile scrum team'} />
                        <ArrowListItem description={'Participated in daily code reviews and design discussions, promoting collaboration and sharing of best practices within the development team'} />

                    </List>
                    <Typography variant={'h2'} sx={{ marginBottom: 2 }}>Engineering Intern, Software/Finance Team @ BluEarth Renewables</Typography>
                    <Typography variant={'h4'} sx={{ marginBottom: 1 }}>May 2018 - Dec 2018</Typography>
                    <List dense={true}>
                        <ArrowListItem description={'Developed and maintained a robust ETL pipeline in Python to collect, process and analyze wind data, improving data accuracy and efficiency'} />
                        <ArrowListItem description={'Implemented automated parsing and value validation tasks with Python, reducing manual errors and increasing productivity'} />
                        <ArrowListItem description={'Led the discounted cash flow modelling for an energy storage project'} />
                    </List>
                    <Typography variant={'h2'} sx={{ marginBottom: 2 }}>Business Analyst Intern @ BluEarth Renewables</Typography>
                    <Typography variant={'h4'} sx={{ marginBottom: 1 }}>Sep 2016 -  Aug 2017</Typography>
                    <List dense={true}>
                        <ArrowListItem description={'Developed discounted cash flow financial models for multiple renewable energy assets, resulting in indicative bids and contributing to revenue growth'} />
                        <ArrowListItem description={'Created quarterly financial and operational reports to track company performance'} />
                        <ArrowListItem description={'Researched financial metrics of related companies and assets; market capitalization, asset value'} />
                    </List>
                </Box>
            </WorkExperienceLayout>
        </Box>
</div>
    )
}