import { useEffect } from 'react';

// components 
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from './MidSection';

import {getProducts} from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import {Box, styled} from '@mui/material';

const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`;

const Home = () => {

    const { products }= useSelector (state => state.getProducts)
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getProducts())
    }, [dispatch])
    return (
        <>
        <NavBar/>
        <Component>
            <Banner/>
            <MidSlide products={products} title="Deals of the Day" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discounts for you" timer={false} />
            <Slide products={products} title="Suggested items" timer={false}/>
            <Slide products={products} title="Top selection" timer={false}/>
            <Slide products={products} title="Trending Offers" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
            <Slide products={products} title="Season's top picks" timer={false}/>
            <Slide products={products} title="Top Deals on Accessories" timer={false}/>
        </Component>
        </>
        
    );
}
 
export default Home;