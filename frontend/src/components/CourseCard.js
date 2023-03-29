import { useCoursesContext } from "../hooks/useCoursesContext";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "./CourseCard.module.css";

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
    <div className={styles.cardContainer}>
      <h3>{course.code}</h3>
      <h4 className={styles.courseName}>{course.name}</h4>
      <p className={styles.text}>
        <strong className={styles.heading}>Description: </strong>
        {course.description}
      </p>
      <p className={styles.text}>
        <strong className={styles.heading}>Professor: </strong>
        {course.professor}
      </p>
      <p className={styles.text}>
        <strong className={styles.heading}>Term: </strong>
        {course.term}
      </p>
      <p className={styles.text}>
        <strong className={styles.heading}>Grade: </strong>
        {course.grade}%
      </p>
      <p className={styles.text}>
        <strong className={styles.heading}>Rating: </strong>
        {course.rating}/10
      </p>
      <span onClick={handleDelete} className={styles.delete}>
        <RiDeleteBinLine size={25} />
      </span>
    </div>
  );
};

export default CourseCard;
