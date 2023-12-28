import { Box, Typography, styled } from "@mui/material";

// component 
const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
`;

const CartItem = ({item}) => {
    return (
        <Component>
            {/* LHS  */}
            <Box>
                <img src={item.url} alt="product"/>
            </Box>

            {/* RHS  */}
            <Box>
                <Typography>{item.title.longTitle}</Typography>
            </Box>
        </Component>
    );
}
 
export default CartItem;