import styled from '@emotion/styled'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const UnderHero = () => {
    const UnderHeroBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        maxWidth: 550,
        padding: '10px 0px 10px 10px',
        [theme.breakpoints.down('md')]: {
            width: '300px'
        },

    }))
    return (
        < >
            <Box sx={{ backgroundColor: '#52C0FF40', display: 'flex', justifyContent: 'center', padding: 10 }}>
                <UnderHeroBox>
                    <Grid Container sx={{ display: 'flex', justifyContent: 'center', }}>
                        <Grid md={6} sm={12}>

                            <Typography variant="h4">
                                We Building Social uniqueness
                            </Typography>
                            <Typography mt={5}>
                                The marketing strategy lays out target markets and the value.
                            </Typography>

                        </Grid>
                        <Grid item md={6} sm={12}>
                            <Typography variant="h4">
                                Social Media
                                beyond probability
                            </Typography>
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