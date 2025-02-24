import Cate from '../../Category/Cate';
import Banner from "./Banner";
import Other from "./Other";
import Popup from '../Redux/Popup';
import ProductAll from '../../Category/ProductAll';


function HomePage() {
    return (<>
        <Banner />
        <Cate />
        <ProductAll />
        <Popup />
        <Other />
    </>)
}

export default HomePage