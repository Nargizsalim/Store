import Nav from "@/components/profile/Nav";
import {
  Button,
  Container,
  CardActions,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import "@/components/pages/Pages.css";
import { removeFromShoppingBag } from "@/components/store/slice/productListSlice";
import { useDispatch } from "react-redux";

export default function ShoppingBag() {
  const { shoppingBagData } = useSelector((state) => state.productList);
  const totalAmount = shoppingBagData.reduce((acc, el) => el.price + acc, 0);
  const dispatch = useDispatch();
  return (
    <>
      <Nav />
      <Container>
        {shoppingBagData.map((el) => (
          <>
            <Card
              sx={{ maxWidth: "100%", display: "flex", marginBottom: "15px" }}
              key={el.id}
            >
              <Box sx={{ width: "50%" }}>
                <CardMedia
                  component='img'
                  height='270px'
                  image={el.img}
                  alt={el.name}
                  sx={{ objectFit: "contain" }}
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
                  <Typography variant='h5'>{el.price} $</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    color='primary'
                    sx={{ color: "white", background: "#b02c35", p: "15px" }}
                    onClick={() => dispatch(removeFromShoppingBag(el.id))}
                  >
                    Delete from shopping bag
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </>
        ))}
        <div className='totalAmount'>
          <p>
            Total : <span>{totalAmount} $</span>
          </p>
        </div>
      </Container>
    </>
  );
}
