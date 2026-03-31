import React from 'react';
import { AppBar, Button, Toolbar, Box, Menu, Fade, MenuItem } from '@mui/material';
import { menuData } from '../data/MenuData';
import { styles } from '../styles/Menu.styles';

const MenuBar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [openMenuIndex, setOpenMenuIndex] = React.useState<number | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setAnchorEl(event.currentTarget);
        setOpenMenuIndex(index);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenuIndex(null);
    };

    return (
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                {/* Logo */}
                <Box sx={styles.logoWrapper}>
                    <img
                        src="https://humusz.hu/sites/default/files/humusz-logo.png"
                        alt="Humusz Szövetség"
                        style={styles.logoImg}
                    />
                </Box>

                {/* Navigációs gombok – mind az 5 menüpont */}
                {menuData.map((menu, index) => {
                    const isOpen = openMenuIndex === index;
                    return (
                        <React.Fragment key={menu.title}>
                            <Button
                                aria-controls={isOpen ? `fade-menu-${index}` : undefined}
                                aria-haspopup="true"
                                aria-expanded={isOpen ? 'true' : undefined}
                                onClick={(e) => handleClick(e, index)}
                                sx={{
                                    ...styles.menuButton,
                                    ...(isOpen ? styles.menuButtonActive : {}),
                                }}
                            >
                                {menu.title}
                            </Button>
                            <Menu
                                id={`fade-menu-${index}`}
                                anchorEl={anchorEl}
                                open={isOpen}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                                sx={styles.dropdownMenu}
                            >
                                {menu.items.map((item) => (
                                    <MenuItem key={item} onClick={handleClose} sx={styles.dropdownItem}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </React.Fragment>
                    );
                })}

                {/* CTA gomb – önálló, nem dropdown */}
                <Button sx={styles.ctaButton}>
                    Adományozz!
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default MenuBar;