import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  return (
    <Link to={`/instructor/${instructor._id}`}
      key={instructor.id}
      className="card bordered m-4 p-0 w-64 flex-col justify-center items-center bg-slate-300"
    >
      <figure>
        <img src={instructor.picture} alt="Profile picture" className="w-64 h-64 object-cover grayscale"/>
      </figure>
      <div className="card-body flex flex-col w-full">
        <h2 className="card-title text-black">
          {instructor.name.first} {instructor.name.last}
        </h2>
        <div className="flex justify-start gap-1">{instructor.classes.map(course => <span className="badge badge-ghost rounded-md">{course.toLowerCase()}</span>)}</div>
        
      </div>
    </Link>
  );
};

export default InstructorCard;
