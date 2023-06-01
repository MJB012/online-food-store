import Banner from './Banner';
import Feature from './Feature';
import Product from './Product';
import Product2 from './Products2';
import Category from './Category';

const Home = () => {
    return (
        <>
            <Banner />
            <Feature title="OUR" className="container" heading1="Cash On Delivery" />
            <Product title="OUR" />
            <Product2 />
            <Category title="OUR" />
        </>
    )
}

export default Home;