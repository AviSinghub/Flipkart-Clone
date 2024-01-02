import {Typography, Grid, Box, styled, Button} from '@mui/material'
import { useSelector } from "react-redux";

// Components 
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

// styling start
const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0'
    }
}));
    
const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
    margin-bottom:15px;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    width: 250px;
    height: 51px;
    border-radius: 2px;
`;

const LeftComponent = styled(Grid)(({ theme }) =>({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBotttom: 15
    }
}))
   

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
                        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
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
                            <ButtonWrapper>
                                <StyledButton>Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftComponent>

                        {/* RHSc */}
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems} />
                        </Grid>
                    </Container>
                : <EmptyCart/>    
                }
            </>
        </div>
    );
}
 
export default Cart;