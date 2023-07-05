import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Container, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShoppingBag } from "../store/slice/productListSlice";

export default function Product() {
  const { displayItem } = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  return (
    <Container>
      {displayItem.map((el) => (
        <>
          <Card sx={{ maxWidth: "100%", display: "flex" }} key={el.id}>
            <Box sx={{ width: "70%" }}>
              <CardMedia
                component='img'
                height='500px'
                image={el.img}
                alt={el.name}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                gap: "15px",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  gap: "15px",
                }}
              >
                <Typography gutterBottom variant='h5' component='div'>
                  {el.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ width: "30%" }}
                >
                  {el.text}
                </Typography>

                <Typography variant='h5'>{el.price} $</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                  sx={{ color: "white", background: "#b02c35", p: "15px" }}
                  onClick={() => dispatch(setShoppingBag(el))}
                >
                  Add to shopping bag
                </Button>
              </CardActions>
            </Box>
          </Card>
        </>
      ))}
    </Container>
  );
}
