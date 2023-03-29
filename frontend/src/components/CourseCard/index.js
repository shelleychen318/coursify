import { useCoursesContext } from "../../hooks/useCoursesContext";
import { RiDeleteBinLine } from "react-icons/ri";
import "./courseCard.css";

const CourseCard = ({ course }) => {
  const { dispatch } = useCoursesContext();

  const handleDelete = async () => {
    const response = await fetch("/api/courses/" + course._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_COURSE", payload: json });
    }
  };

  return (
    <div className="cardContainer">
      <h4 className="courseCode">{course.code}</h4>
      <h4 className="courseName">{course.name}</h4>
      <p className="text">
        <strong className="heading">Description: </strong>
        {course.description}
      </p>
      <p className="text">
        <strong className="heading">Professor: </strong>
        {course.professor}
      </p>
      <p className="text">
        <strong className="heading">Term: </strong>
        {course.term}
      </p>
      <p className="text">
        <strong className="heading">Grade: </strong>
        {course.grade}%
      </p>
      <p className="text">
        <strong className="heading">Rating: </strong>
        {course.rating}/10
      </p>
      <span onClick={handleDelete} className="delete">
        <RiDeleteBinLine size={25} />
      </span>
    </div>
  );
};

export default CourseCard;
