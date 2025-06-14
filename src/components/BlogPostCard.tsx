import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  Paper,
} from '@mui/material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

interface BlogPostCardProps {
  date: Date;
  title: string;
  description: string;
  readingTime: number;
  tags: string[];
  id: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  date,
  title,
  description,
  readingTime,
  tags,
  id,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        mb: 4,
        borderRadius: 2,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
          cursor: 'pointer',
        },
      }}
      onClick={handleClick}
    >
      <Card>
        <CardContent>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            {format(date, 'MMMM d, yyyy')}
          </Typography>
          
          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              lineHeight: 1.7,
              color: 'text.primary',
            }}
          >
            {description}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 2,
              pt: 2,
              borderTop: 1,
              borderColor: 'divider',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {readingTime} min read
            </Typography>

            <Stack direction="row" spacing={1}>
              {tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: 'primary.light',
                    color: 'primary.contrastText',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default BlogPostCard;
