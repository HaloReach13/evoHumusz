import React, { Component } from 'react';
import { Box, Button, Chip, Typography } from '@mui/material';

export class CardContent extends Component {
    render() {
        const { model } = this.props;
        return (
            <>
                <Box className="card-overlay" />

                <Chip
                    label={model.type.toUpperCase()}
                    className="card-badge"
                />

                <Box className="card-content">
                    <Typography
                        className="card-title"
                    >
                        {model.title}
                    </Typography>

                    <Typography
                        className="card-desc"
                    >
                        {model.description}
                    </Typography>

                    <Typography
                        variant="overline"
                        className="card-date"
                    >
                        {new Date(model.date).toLocaleDateString('hu-HU')}
                    </Typography>

                    <button className="card-button">
                        Olvasd el
                    </button>
                </Box>



            </>
        );
    }
}