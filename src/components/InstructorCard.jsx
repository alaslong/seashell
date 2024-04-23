import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  return (
    <Link to={`/instructor/${instructor._id}`}
      key={instructor.id}
      className="card bordered rounded-2xl m-4 p-0 w-64 flex-col justify-center items-center bg-slate-200"
    >
      <figure>
        <img src={instructor.picture} alt="Profile picture" className="w-64 h-64 object-cover grayscale"/>
      </figure>
      <div className="card-body flex flex-col w-full">
        <h3 className="card-title text-primary">
          {instructor.name.first} {instructor.name.last}
        </h3>
        <div className="flex justify-start gap-1">{instructor.classes.map(course => <span className="badge badge-neutral text-primary rounded-xl">{course}</span>)}</div>
        
      </div>
    </Link>
  );
};

export default InstructorCard;
