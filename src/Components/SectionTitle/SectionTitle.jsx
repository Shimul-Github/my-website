
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="my-2 mx-auto w-4/12 text-center">
            <p className="border-b-2 mb-2 py-2 text-yellow-300" >---{subHeading}---</p>
            <h3 className="text-4xl border-b-2 mb-2 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;