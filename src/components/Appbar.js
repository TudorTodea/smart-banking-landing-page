import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { LocalMall } from '@mui/icons-material';
import { Button } from '@mui/material';

export default function MenuAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation={0} position="static" sx={{ backgroundColor: 'white', color: 'black' }} >
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Box display={'flex'} alignItems='center' sx={{ gap: 2 }} >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { xs: "flex", md: 'none' }, mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Button sx={{ color: 'black', letterSpacing: '3px', fontWeight: '400', display: { xs: "none", md: 'flex' } }}>
                            About
                        </Button>
                        <Button sx={{ color: 'black', letterSpacing: '3px', fontWeight: '400', display: { xs: "none", md: 'flex' } }}>
                            How it works
                        </Button>
                        <Button sx={{ color: 'black', letterSpacing: '3px', fontWeight: '400', display: { xs: "none", md: 'flex' } }}>
                            Contact
                        </Button>
                    </Box>
                    <Box>
                        <Typography sx={{ fontFamily: `'Lobster', cursive`, fontSize: '25px', paddingRight: { xs: '0px', md: '125px' } }}>
                            Besnik
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <LocalMall fontSize='small' />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box >
    );
}