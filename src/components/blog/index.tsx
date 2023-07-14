// import Link from "next/link";

// import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';

// import api from "../../lib/agility";

// const BlogPage = ({ posts }) => {
//   console.log(posts)

//   return (
//     <Container maxWidth="lg">
//       <Typography variant="h2" gutterBottom>
//         Featured Blog Posts
//       </Typography>
//       <Grid container spacing={2}>
//         {posts && posts.map((post) => (
//           <Grid item xs={4}key={post.slug}>
//             <Card>
//               <CardActionArea>
//                 <CardMedia
//                   style={{ height: "240px" }}
//                   image={post.image.url}
//                   title={post.image.label}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="h2">
//                     {post.title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     Written on{" "}
//                     {new Date(post.date).toUTCString()}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//               <CardActions>
//                 <Link href="/blog/[...slug]" as={`/blog/${post.slug}`} prefetch>
//                   <Button role="link" size="small" color="primary">
//                     Read
//                   </Button>
//                 </Link>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default BlogPage;

// export async function getServerSideProps() {
//   const posts = await api.getContentList({
//     referenceName: "posts",
//     languageCode: "en-us",
//     take: 3
//   });

//   return {
//     props: {
//       posts: posts.items.map((post) => {
//         const { title, slug, image, date } = post.fields;
//         return { title, slug, image, date };
//       })
//     }
//   };
// }