import Banner from './Banner/Banner.jsx';
import Catagory from './Catagory/Catagory.jsx';
import ChefRecommends from './ChefRecommends/ChefRecommends.jsx';
import ContactInfo from './ContactInfo/ContactInfo.jsx';
import Featured from './Featured/Featured.jsx';
import PopularMenu from './PopularMenu/PopularMenu.jsx';
import ResturantInfo from './ResturantInfo/ResturantInfo.jsx';

const Home = () => {
    return (
        <div>
         <Banner/>
         <Catagory></Catagory>
         <ResturantInfo></ResturantInfo>
         <PopularMenu></PopularMenu>
         <ContactInfo></ContactInfo>
         <ChefRecommends></ChefRecommends>
         <Featured></Featured>
        
        </div>
    );
};

export default Home;