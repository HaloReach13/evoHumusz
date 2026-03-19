import React, { Component } from 'react';
import { Box, Typography, Card, Chip, Button } from '@mui/material';

class CardComponent extends Component {
    render() {
        const { item, isFeatured } = this.props;

        return (
            <Card
                sx={{
                    position: 'relative',
                    height: isFeatured ? 450 : 320,
                    width: isFeatured ? 500 : 400,
                    backgroundColor: '#222',
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 3,
                    overflow: 'hidden',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',

                    // --- ANIMÁCIÓ ---
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)', 
                        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                        cursor: 'pointer'
                    },
                    // ---------------------------
                }}
            >
                {/* Opacity réteg (Overlay), hogy a szöveg olvasható legyen a képen */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.5) 100%)',
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                />

                {/* Típus jelző (Chip) a jobb felső sarokban */}
                <Chip
                    label={item.type.toUpperCase()}
                    variant='outlined'
                    size={isFeatured ? "medium" : "small"}
                    sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        fontWeight: 'bold',
                        zIndex: 2,
                        color: 'white',
                        border: '2px solid rgba(255, 255, 255, 0.4)',
                        backdropFilter: 'blur(6px)',
                    }}
                />

                {/* Szöveges tartalom alul */}
                <Box
                    sx={{
                        position: 'relative',
                        p: isFeatured ? 5 : 3,
                        zIndex: 1,
                    }}
                >
                    <Typography
                        variant={isFeatured ? 'h3' : 'h5'}
                        component="h2"
                        fontWeight="bold"
                        gutterBottom
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        variant={isFeatured ? 'h6' : 'body1'}
                        sx={{ opacity: 0.8, mb: 1.5 }}
                    >
                        {item.description}
                    </Typography>
                    <Typography
                        variant="overline"
                        sx={{ display: 'block', mt: 1, opacity: 0.6 }}
                    >
                        {new Date(item.date).toLocaleDateString('hu-HU')}
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{ 
                            position: 'absolute',
                            bottom: 20,
                            right: 20,
                            mt: 2,
                            fontWeight: 'bold',
                            color: 'white', 
                            borderColor: 'rgba(255, 255, 255, 0.6)',
                            '&:hover': {
                                borderColor: 'rgba(255, 255, 255, 0.9)',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            } 
                        }}
                    >
                        Olvasd el
                    </Button>
                </Box>
            </Card>
        );
    }
}

export default CardComponent;