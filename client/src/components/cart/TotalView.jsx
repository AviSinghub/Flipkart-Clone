import { Box, Typography } from "@mui/material";


const TotalView = ({cartItems}) => {
    return (
        <Box>
            <Box>
                <Typography>PRICE DETAILS</Typography>
            </Box>
            <Box>
                <Typography>Price ({cartItems?.length} item)
                    <Box component="span" >₹99</Box>
                </Typography>
            </Box>
        </Box>
    );
}
 
export default TotalView;