import styled from '@emotion/styled'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const UnderHero = () => {
    const UnderHeroBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        maxWidth: 800,
        padding: '10px 0px 10px 10px',
        [theme.breakpoints.down('md')]: {
            maxWidth: 300
        },

    }))
    const TitleTypography = styled(Typography)(({ theme }) => ({
        fontSize: '34px',
        fontWeight: '400',
        [theme.breakpoints.down('md')]: {
            fontSize: '28px',
            fontWeight: '400',
        },

    }))
    return (
        < >
            <Box sx={{ backgroundColor: '#52C0FF40', display: 'flex', justifyContent: 'center', padding: 10 }}>
                <UnderHeroBox>
                    <Grid Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: { md: 'row', xs: 'column' } }}>
                        <Grid item sx={{ marginRight: { md: '100px', sm: '0px' } }} md={6} xs={12}>

                            <TitleTypography>
                                We Building Social uniqueness
                            </TitleTypography>
                            <Typography mt={5}>
                                The marketing strategy lays out target markets and the value.
                            </Typography>

                        </Grid>


                        <Grid item sx={{ marginLeft: { md: '100px', sm: '0px' }, marginTop: { xs: '40px', md: '0px' } }} md={6} xs={12}>

                            <TitleTypography>
                                Social Media
                                beyond probability
                            </TitleTypography>
                            <Typography mt={5}>
                                Essentially a formula for how a business is going to compete,
                            </Typography>

                        </Grid>

                    </Grid>
                </UnderHeroBox>
            </Box>
        </>
    )
}

export default UnderHero