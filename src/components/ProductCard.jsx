/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material"

const ProductCard = ({product}) => {
  return (
    <Box sx={{
        width: '100%', 
        height: '100%',
        border: '1px solid gray',
        textAlign: 'center'
        }}>
        <img width='60%' src={product.image} alt={product.name} />
        <Typography fontWeight='800' fontSize={14} variant="h5">{product.name.toUpperCase()}</Typography>
        <Typography sx={{padding: '10px 0px 20px'}} variant="body1">Rs. {Math.floor(product.price * 277.83)}</Typography>
    </Box>
)
}

export default ProductCard;
