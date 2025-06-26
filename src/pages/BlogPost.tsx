import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Chip,
  Stack,
  IconButton,
  Container,
  Paper,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { format } from 'date-fns';
import { blogPosts } from '../data/BlogData';

type BlogPostProps = {
  currmode: number;
};

const BlogPost: React.FC<BlogPostProps> = ({ currmode }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4">Blog post not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <IconButton
        onClick={() => navigate('/blog')}
        sx={{
          mb: 2,
          color: currmode === 0 ? 'white' : 'black',
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }}
        aria-label="back to blog"
      >
        <ArrowBackIcon />
      </IconButton>

      <Paper elevation={0} sx={{ p: 4 }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          {format(post.date, 'MMMM d, yyyy')}
        </Typography>

        <Typography variant="h3" component="h1" sx={{ mb: 3, fontWeight: 700 }}>
          {post.title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Stack direction="row" spacing={1}>
            {post.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText',
                }}
              />
            ))}
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {post.readingTime} min read
          </Typography>
        </Box>

        {/* Markdown content rendering */}
        <Box sx={{ color: 'text.primary', lineHeight: 1.8 }}>
          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => (
                <Typography variant="body1" paragraph {...props} />
              ),
              h2: ({ node, ...props }) => (
                <Typography variant="h5" sx={{ mt: 4, mb: 2 }} {...props} />
              ),
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#42a5f5', textDecoration: 'underline' }}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </Box>
      </Paper>
    </Container>
  );
};

export default BlogPost;
