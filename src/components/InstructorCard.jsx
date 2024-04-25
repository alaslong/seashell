import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  return (
    <Link to={`/instructor/${instructor._id}`}
      key={instructor.id}
      className="card bordered rounded-3xl m-4 p-0 w-64 flex-col justify-center items-center bg-slate-100"
    >
      <figure>
        <img src={instructor.picture} alt="Profile picture" className="w-64 h-64 object-cover grayscale"/>
      </figure>
      <div className="card-body flex flex-row justify-between items-center w-full">
        
        <h3 className="card-title text-primary">
          {instructor.name.first}
        </h3>
        <div className="flex justify-start gap-2">{instructor.classes.slice(0,1).map(course => <span className="badge badge-sm badge-outline badge-accent text-primary rounded-3xl p-3" key={course}>{course}</span>)}</div>
        
      </div>
    </Link>
  );
};

export default InstructorCard;
