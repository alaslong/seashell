import axios from "axios";
import { useQuery } from "react-query";
import InstructorCard from "../components/InstructorCard";

const InstructorsPage = () => {

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
    <div className="flex flex-wrap w-full justify-center">
      {instructors.map((instructor) => {
        return (
          <InstructorCard instructor={instructor} />
        );
      })}
    </div>
  );
};

export default InstructorsPage;
