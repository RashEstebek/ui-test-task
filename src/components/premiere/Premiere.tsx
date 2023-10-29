import './style.css'

const Premiere = ({ title, img }: {title:string, img: any}) => {
    return (
        <div>
            <img src={img} alt={title} className="premiere_img" />
            <h3 className="premiere_title">{title}</h3>
        </div>
    );
};

export default Premiere