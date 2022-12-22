import styled from '@emotion/styled'
import { Box, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Testimonial = () => {
    const TitleTypography = styled(Typography)(({ theme }) => ({
        fontSize: '64px',
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

    const StatsTitles = styled(Typography)(({ theme }) => ({
        fontSize: '22px',
        fontWeight: '400',
        fontFamily: `'Inter', sansSerif`,
        color: '#718176',
        display: 'flex',
        letterSpacing: 8,
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '18px',
            fontWeight: '400',
            textAlign: 'center'

        },

    }))
    const StatsDescription = styled(Typography)(({ theme }) => ({
        marginTop: '10px',
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: '600',
        fontFamily: `'Robot', sansSerif`,
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
            fontWeight: '600',
            textAlign: 'center'

        },

    }))
    return (
        <Box p={15}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Stack width={640}>
                    <TitleTypography >1000+ Customer</TitleTypography>
                    <Typography mt={5} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'justify', color: '#767E7E', fontFamily: `'Roboto', sansSerif` }}>
                        Analyze any Business or Creator account—including your competitors—to find the imagery, visuals,
                        and captions that drive audience engagement. Get social calendars planned faster and spend less time testing content strategies.
                    </Typography>
                </Stack>
            </Box>
            <Grid container mt={10}>
                <Grid item md={3} sm={6} xs={12}>
                    <StatsTitles >PRODUCT</StatsTitles>
                    <StatsDescription>100,000+</StatsDescription>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <StatsTitles >LIKES</StatsTitles>
                    <StatsDescription >45600</StatsDescription>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <StatsTitles >SALE</StatsTitles>
                    <StatsDescription >576864</StatsDescription>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <StatsTitles >CUSTOMERS</StatsTitles>
                    <StatsDescription >947444</StatsDescription>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Testimonial