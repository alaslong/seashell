import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import WorkshopCard from "../components/WorkshopCard";

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
    isLoading: isLoadingInstructor,
    error: instructorError,
  } = useQuery(["instructorData", instructorId], getInstructorByInstructorId);

  const getWorkshopsByInstructorId = async () => {
    const response = await axios.get(
      `https://seashell-server.fly.dev/api/instructor/${instructorId}/workshops`
    );
    return response.data;
  };

  const {
    data: workshops,
    isLoading: isLoadingWorkshops,
    error: workshopsError,
  } = useQuery(["workshopsData", instructorId], getWorkshopsByInstructorId);

  if (isLoadingInstructor || isLoadingWorkshops) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (instructorError || workshopsError)  {
    return <div>Error</div>;
  }


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
              <span>Languages:&nbsp;</span>
              {instructor.languages.map((language, index) => (
                <span className="">
                  {language}
                  {index < instructor.languages.length - 1 ? `,` : ``}&nbsp;
                </span>
              ))}
            </div>
            <div className="flex gap-1">
              {instructor.classes.map((course) => (
                <span className="badge badge-sm badge-outline text-black rounded-3xl p-3">
                  {course}
                </span>
              ))}
            </div>
          </div>
          <div className="text-left mt-10">
            <span>{instructor.description}</span>
          </div>
          <h3 className="text-3xl mt-10">Workshops:</h3>
          <div className="flex flex-wrap w-full justify-center">
      {workshops.map((workshop) => {
        return (
          <WorkshopCard workshop={workshop} />
        );
      })}
    </div>
        </div>
      </div>
    </>
  );
};

export default InstructorDetailsPage;
