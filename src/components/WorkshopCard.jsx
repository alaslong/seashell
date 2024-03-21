import { Link } from "react-router-dom";

const WorkshopCard = ({ workshop }) => {
  return (
    <Link to={`/workshop/${workshop._id}`}
      key={workshop.id}
      className="card bordered m-4 p-0 w-64 flex-col justify-center items-center"
    >
      <figure>
        <img src={workshop.image} alt="Workshop picture" className="w-64 h-64 object-cover"/>
      </figure>
      <div className="card-body flex flex-col w-full">
        <h2 className="card-title">
          {workshop.name}
        </h2>
        
      </div>
    </Link>
  );
};

export default WorkshopCard;
