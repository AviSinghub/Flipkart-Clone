import {Typography, Grid, Box, styled} from '@mui/material'
import { useSelector } from "react-redux";

// Components 
import CartItem from './CartItem';
import TotalView from './TotalView';

// styling start
const Container = styled(Grid)`
    padding: 30px 135px;
`;

const Header = styled(Box)`
    padding: 15px 24px;
`

// styling *x*x*x

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart)
    return (
        <div>
            <>
                {
                    cartItems.length ?
                    <Container container> 
                        {/* LHSc */}
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>
                                    My Cart({cartItems.length})
                                </Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item}/>
                                ))
                            }
                        </Grid>

                        {/* RHSc */}
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView/>
                        </Grid>
                    </Container>
                : <div>Empty</div>    
                }
            </>
        </div>
    );
}
 
export default Cart;