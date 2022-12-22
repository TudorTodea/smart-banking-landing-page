import styled from '@emotion/styled'
import { Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Feature = () => {

    const CardImage = styled('img')(({ src, theme }) => ({
        src: `url(${src})`,
        width: '775px',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            width: '420px',
            height: '500px',

        },
        [theme.breakpoints.down('md')]: {
            width: '620px',
            height: '450px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '320px',
            height: '300px'
        }
    }))
    const FeatureIcons = styled('img')(({ src, theme }) => ({
        src: `url(${src})`,
        width: '30px',
        height: '29px',
        display: 'flex',
        justifyContent: 'flex-start',
    }))
    const TitleFeature = styled(Typography)(({ theme }) => ({
        fontSize: '48px',
        fontWeight: '700',
        fontFamily: `'Bai Jamjuree', sansSerif`,
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '38px',
            fontWeight: '700',
            textAlign: 'center'

        },

    }))
    const SubTitleFeature = styled(Typography)(({ theme }) => ({
        fontSize: '20px',
        fontWeight: '400',
        fontFamily: `'Roboto', sansSerif`,
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            fontWeight: '400',
            textAlign: 'center'

        },

    }))

    const FeaturesBox = styled(Box)(({ theme }) => ({
        width: '450px',
        [theme.breakpoints.down('md')]: {
            width: '300px'

        },

    }))
    return (
        <Box>
            <Grid container>
                <Grid item md={7} sx={{ display: 'flex', justifyContent: 'center' }} sm={12} xs={12}>
                    <CardImage src='feature_card.png' />

                </Grid>
                <Grid item md={5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: { md: '500px' } }}>
                        <TitleFeature  >
                            Handoff your work smarter now
                        </TitleFeature>
                        <SubTitleFeature mt={2} mb={2} >
                            Create documentation for the collaborators (i.e. designers or devs) directly in your design file.
                        </SubTitleFeature>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <FeatureIcons src='Strategic.png' />
                            <Stack>
                                <FeaturesBox>
                                    <Typography ml={5} sx={{ fontWeight: '600' }} >Strategic</Typography>
                                    <Typography ml={5} mt={1}>Suggests that the component spacing
                                        between cards and elements.</Typography>
                                </FeaturesBox>
                            </Stack>
                        </Box>
                        <Box mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <FeatureIcons src='Work_schedule.png' />
                            <Stack>
                                <FeaturesBox>
                                    <Typography ml={5} sx={{ fontWeight: '600' }}>Work  schedule</Typography>
                                    <Typography ml={5} mt={1}>work schedule is the time an employee is expected to be on the job</Typography>
                                </FeaturesBox>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Feature