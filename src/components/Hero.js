import styled from '@emotion/styled'
import { BackupTable, TrendingFlat, Whatshot } from '@mui/icons-material'
import { Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Hero = () => {

    const VisaImage = styled('img')(({ src, theme }) => ({
        src: `url(${src})`,
        width: '600px',
        height: '400px',
        [theme.breakpoints.down('md')]: {
            width: '320px',
            height: '350px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '320px',
            height: '300px'
        }
    }))
    return (
        <Box mb={10}>
            <Grid container>
                <Grid item xs={12} sm={6} md={5} mt={15}>
                    <Typography variant="h2" sx={{ fontWeight: '700', fontSize: { md: '80px', sm: '50px', xs: '50px' }, fontFamily: `'Bai Jamjuree', sansSerif` }}>
                        Banking more smart
                    </Typography>
                    <Box width={350}>
                        <Typography mt={6} sx={{ fontFamily: `'Roboto', sansSerif`, fontSize: '20px' }}>
                            Meet the only spend management platform and corporate card.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }} mt={5}>
                        <Box width={50} height={50} sx={{ backgroundColor: 'black', display: 'flex', alignItems: 'center' }}> <IconButton
                            size="large"
                        >
                            <TrendingFlat sx={{ color: 'white' }} />
                        </IconButton></Box>
                        <Typography ml={5} variant='body' sx={{ fontWeight: '600', fontSize: '20px', display: 'flex', alignItems: 'center' }}>
                            Get your card
                        </Typography>
                    </Box>
                </Grid>
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={12} sm={6} md={7} mt={5}>
                    <VisaImage src='visaCardHeader.png' />
                </Grid>
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={6} md={3} mt={15}>
                    <Box width={200}>
                        <Typography variant="h4" sx={{ fontSize: { md: '34px', xs: '32px', fontWeight: '600' } }}>
                            Hot <Whatshot color='error' />
                            deals for you
                        </Typography>
                        <Typography mt={3} sx={{ width: { md: '200px', xs: '150px' } }}>
                            Online shopping for retail sales direct to consumers
                        </Typography>
                    </Box>
                </Grid>
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={6} md={3} mt={15} >
                    <Box width={200}>
                        <BackupTable />
                        <Typography variant="h6" mt={3} sx={{ fontSize: { md: '20px', xs: '16px', fontWeight: '600' } }}>
                            1.5% cashback
                        </Typography>
                        <Typography mt={3} sx={{ width: { md: '200px', xs: '150px' } }}>
                            Online shopping for retail sales direct to consumers
                        </Typography>
                    </Box>
                </Grid>
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={6} md={3} mt={15}>
                    <Box width={200}>
                        <BackupTable />
                        <Typography variant="h6" mt={3} sx={{ fontSize: { md: '20px', xs: '16px', fontWeight: '600' } }}>
                            30-day terms
                        </Typography>
                        <Typography mt={3} sx={{ width: { md: '200px', xs: '150px' } }}>
                            Online shopping for retail sales direct to consumers
                        </Typography>
                    </Box>
                </Grid>
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={6} md={3} mt={15}>
                    <Box>
                        <BackupTable />
                        <Typography variant="h6" mt={3} sx={{ fontSize: { md: '20px', xs: '16px', fontWeight: '600' } }} >
                            Save Money
                        </Typography>
                        <Typography mt={3} sx={{ width: { md: '200px', xs: '150px' } }}>
                            Online shopping for retail sales direct to consumers
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Hero