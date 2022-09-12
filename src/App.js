import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  styled,
} from "@mui/material";
import { PhotoCamera, Style } from "@mui/icons-material";
import { display } from "@mui/system";

const UserDiv = styled("div")({
  backgroundColor: "skyblue",
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera sx={{ marginRight: "20px" }} />
          <Typography variant="h6">Image Gallery</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <UserDiv>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              color="textPrimary"
              align="center"
              gutterBottom
            >
              Image Gallery
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              align="center"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              suscipit nisi soluta veniam ducimus hic perspiciatis ea voluptatum
              in rem.
            </Typography>
            <div>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{ marginTop: "40px" }}
              >
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Scondary option
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </UserDiv>
        <Container maxWidth="md" sx={{ padding: "20px 0" }}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} lg={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    sx={{ paddingTop: "56.26%" }}
                    image="https://images.pexels.com/photos/13278016/pexels-photo-13278016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="image title"
                  />
                  <CardContent sx={{ flexGrow: "1" }}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a card, you can us this section to look media
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="sm" color="primary">
                      View
                    </Button>
                    <Button size="sm" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer sx={{ backgroundColor: "blue" }}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textprimary">
          Something can be written here as well
        </Typography>
      </footer>
    </>
  );
}

export default App;
