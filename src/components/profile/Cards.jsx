import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDisplayItem } from "../store/slice/productListSlice";

export default function Cards() {
  const { displayData } = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {displayData.map((el) => (
        <>
          <Card sx={{ maxWidth: 345 }} key={el.id}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='280'
                image={el.img}
                alt={el.name}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {el.name} - {el.price} $
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {el.text}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size='small'
                color='primary'
                sx={{ color: "white", background: "#b02c35", p: "8px" }}
                onClick={() => {
                  dispatch(setDisplayItem(el.id)),
                    navigate(`/dashboard/${el.id}`);
                }}
              >
                View
              </Button>
            </CardActions>
          </Card>
        </>
      ))}
    </Box>
  );
}
