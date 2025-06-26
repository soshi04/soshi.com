import './Blog.css';
import BlogPostCard from '../components/BlogPostCard';
import { Box } from '@mui/material';
import { blogPosts } from '../data/BlogData';

function Blog() {

  return (
    <Box
      className="blog-page"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
        py: 4,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: { xs: '20px', sm: '50%' },
          height: '100%',
          width: '2px',
        }}
      />

      {/* Blog entries */}
      {blogPosts.map((post) => (
        <Box
          key={post.id}
          sx={{
            width: { xs: '100%', sm: '600px' },
            mb: 6,
            pl: { xs: 5, sm: 0 },
          }}
        >
          <BlogPostCard {...post} />
        </Box>
      ))}
    </Box>
  );
}

export default Blog;
