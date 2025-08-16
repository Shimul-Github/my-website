import img from '../../../assets/RestaurantInfo/1.jpg'
import SectionTitle from '../../../Components/sectionTitle/sectionTitle';

const ResturantInfo = () => {
    return (
        <>
        <SectionTitle
        subHeading={'Know About'}
        heading={'Sundarban'}
        >

        </SectionTitle>
        <section className='w-full h-full my-5 relative '>
          <div className='absolute flex items-center justify-center text-white text-5xl inset-0 bg-amber-700 w-[700px] h-[100px] mt-[10%] ml-[10%] py-20 opacity-80'>
            <p>Sundarban Restaurant</p>
          </div>
            <img className=' w-full h-full object-cover' src={img} alt="" />
        </section>
        </>
    );
};

export default ResturantInfo;