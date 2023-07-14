// import Head from "next/head";
// import { useRouter } from "next/router";

// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

// import api from "../lib/agility";

// const HomePage = ({ meta, data }) => {
//   const router = useRouter();
//   const pageContent = data?.TextBlockWithImage?.fields;

//   return (
//     <>
//       <Head>
//         <title>{meta.title}</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//         <meta name="description" content={meta.desc} />
//       </Head>
//       {
//         pageContent && <Container maxWidth="lg" style={{ marginTop: "30px" }}>
//           <Grid container spacing={3} alignItems="center">
//             <Grid item xs={6}>
//               <Typography variant="h2">
//                 {pageContent.title}
//               </Typography>
//               <Typography variant="h3">
//                 {pageContent.tagline}
//               </Typography>
//               <Typography variant="body1">{pageContent.content}</Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => router.push(pageContent.primaryButton.href)}
//                 role="link"
//               >
//                 {pageContent.primaryButton.text}
//               </Button>
//             </Grid>
//             <Grid item xs={6}>
//               <img
//                 src={pageContent.image.url}
//                 alt={pageContent.image.label}
//                 height="360px"
//                 width="100%"
//               />
//             </Grid>
//           </Grid>
//         </Container>
//       }


// -------------------------------------------------anouter test
{/* <AppBar
style={{ marginBottom: "50px" }}
color="transparent"
position="static"
>
<Toolbar>
  <Typography variant="h6">NextJS Blog</Typography>
</Toolbar>
</AppBar> */}



//     </>
//   );
// };

// // getServerSideProps() has been collapsed for readability.