import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

const InstructorDetailsPage = () => {
  const { instructorId } = useParams();

  const getInstructorByInstructorId = async () => {
    const response = await axios.get(
      `https://seashell-server.fly.dev/api/instructor/${instructorId}`
    );
    return response.data;
  };

  const {
    data: instructor,
    isLoading,
    error,
  } = useQuery(["instructorData", instructorId], getInstructorByInstructorId);

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (error) {
    return <div>Error</div>;
  }

  console.log(instructor);

  return (
    <>
      <div className="flex w-full justify-between p-28">
        <img
          src={instructor.picture}
          alt="Profile picture"
          className="w-64 h-64 object-cover grayscale"
        />
        <div className="flex flex-col justify-between items-start w-[75%]">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-4xl">
              {instructor.name.first} {instructor.name.last}
            </h2>
            <div className="flex text-sm">
              <span>languages:&nbsp;</span>
              {instructor.languages.map((language, index) => (
                <span className="">
                  {language.toLowerCase()}
                  {index < instructor.languages.length - 1 ? `,` : ``}&nbsp;
                </span>
              ))}
            </div>
            <div className="flex gap-1">
              {instructor.classes.map((course) => (
                <span className="badge badge-ghost rounded-md">
                  {course.toLowerCase()}
                </span>
              ))}
            </div>
          </div>
          <div className="text-left mt-10">
            <span>{instructor.description}</span>
          </div>
          <h3 className="text-3xl mt-10">workshops:</h3>
        </div>
      </div>
    </>
  );
};

export default InstructorDetailsPage;
