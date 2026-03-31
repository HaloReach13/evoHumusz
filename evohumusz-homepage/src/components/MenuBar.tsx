import React from 'react';
import { AppBar, Button, Toolbar, Typography, Menu, Fade, MenuItem } from '@mui/material';
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
        <AppBar position="static" sx={styles.appBar}>
            <Toolbar>
                <Typography variant="h5" component="div" sx={styles.logo}>
                    <img src="https://humusz.hu/sites/default/files/humusz-logo.png" alt="logo" />
                </Typography>

                {menuData.map((menu, index) => (
                    <React.Fragment key={menu.title}>
                        <Button
                            aria-controls={openMenuIndex === index ? `fade-menu-${index}` : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenuIndex === index ? 'true' : undefined}
                            onClick={(e) => handleClick(e, index)}
                            sx={styles.menuButton}
                        >
                            {menu.title}
                        </Button>
                        <Menu
                            id={`fade-menu-${index}`}
                            anchorEl={anchorEl}
                            open={openMenuIndex === index}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            {menu.items.map((item) => (
                                <MenuItem key={item} onClick={handleClose}>
                                    {item}
                                </MenuItem>
                            ))}
                        </Menu>
                    </React.Fragment>
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default MenuBar;