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
    <div className="h-screen flex flex-col justify-center w-5/6 m-auto" id="providers">
      <h2 className="text-primary text-3xl text-center my-20 font-semibold">Here are a selection of providers we've partnered with:</h2>
    <div className="flex flex-wrap w-full justify-center">
      {instructors.map((instructor) => {
        return (
          <InstructorCard instructor={instructor} key={instructor._id}/>
        );
      })}
    </div>
    </div>
  );
};

export default InstructorsSection;
