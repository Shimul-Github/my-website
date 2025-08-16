import img from '../../assets/PopularItem/1.jpg'
const MenuItem = ({item}) => {
    const {_id, name,image,price,recipe}= item;
    return (
        <div className='flex space-x-4 '>
            <img style={{borderRadius:'0 200px 200px 200px'}} 
                 className="w-[100px]" 
            // style={{width:120px}} Menual CSS APPLY
            src={img} alt="" />
            <div>
                <h3 className="uppercase">{name}===============</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
            
        </div>
    );
};

export default MenuItem;