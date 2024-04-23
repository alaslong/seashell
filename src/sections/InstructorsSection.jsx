import axios from "axios";
import { useQuery } from "react-query";
import InstructorCard from "../components/InstructorCard";

const InstructorsSection = () => {

  const retrieveInstructors = async () => {
    const response = await axios.get(
      "https://seashell-server.fly.dev/api/instructor"
    );
    return response.data;
  };

  const {
    data: instructors,
    isLoading,
    error,
  } = useQuery("instructorsData", retrieveInstructors);

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="min-h-[50%] mb-28">
      <h2 className="text-center text-primary text-3xl mb-10">Instructors</h2>
    <div className="flex flex-wrap w-full justify-center">
      {instructors.map((instructor) => {
        return (
          <InstructorCard instructor={instructor} />
        );
      })}
    </div>
    </div>
  );
};

export default InstructorsSection;
