import SectionTitle from "../../../Components/sectionTitle/sectionTitle";
import featuredImg from'../../../assets/Featured/1.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className="featured bg-fixed text-white py-10">
            <SectionTitle subHeading={'---Check it Out---'} heading={'FEATURED ITEM'}></SectionTitle>
            <div className="flex items-center justify-center w-full px-10 py-16 bg-slate-500 opacity-80 ">
                <div>
                    <img className="max-w-96 h-40"  src={featuredImg} alt="" />
                </div>
                <div className="ml-5">
                    <p>Aug,09,2025</p>
                    <h5>WHERE CAN I GET SOME</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsam labore beatae et, enim, adipisci maxime perspiciatis reiciendis voluptatem explicabo similique nostrum minima dicta. Dicta, unde a amet porro libero quod facere cumque nulla fugiat accusamus dolore nostrum autem tempora ducimus nesciunt labore minima eius dolorem iusto distinctio iure? Omnis.</p>
                    <button className="btn btn-outline btn-primary">Order Now</button>
                </div>
            </div>

            
        </div>
    );
};

export default Featured;