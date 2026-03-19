import React, { Component } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { getNewsAndBlogs } from '../services/dataService';
import CardComponent from '../components/CardComponent';

class NewsAndBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    console.log("Retrieving data...");
    try {
      const data = getNewsAndBlogs();
      console.log("Data received:", data);

      if (data && Array.isArray(data)) {
        const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
        
        this.setState({ 
          articles: sorted, 
          loading: false 
        });
      } else {
        throw new Error("The data format is not valid!");
      }
    } catch (err) {
      console.error("An error occurred:", err);
      this.setState({ 
        error: "An error occurred while loading the data.", 
        loading: false 
      });
    }
  }

  render() {
    const { articles, loading, error } = this.state;

    if (loading) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
          <CircularProgress size={60} thickness={4} />
          <Typography sx={{ mt: 2, fontWeight: 'medium' }}>Loading data...</Typography>
        </Box>
      );
    }

    if (error) {
      return (
        <Box sx={{ textAlign: 'center', mt: 10 }}>
          <Typography color="error" variant="h6">{error}</Typography>
        </Box>
      );
    }

    const featured = articles[0];
    const others = articles.slice(1);

    return (
      <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: 1400, margin: '0 auto' }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <CardComponent item={featured} isFeatured={true} />
          </Grid>
          
          {others.map(article => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <CardComponent item={article} isFeatured={false} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default NewsAndBlogs;