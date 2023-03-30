import { useEffect, useState } from "react";
import { useCoursesContext } from "../hooks/useCoursesContext";
import styles from "./home.module.css";

// components
import CourseCard from "../components/CourseCard";
import CourseForm from "../components/CourseForm";

const Home = () => {
  const { courses, dispatch } = useCoursesContext();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_COURSES", payload: json });
      }
    };

    fetchCourses();
  }, [dispatch]);

  const [showform, setShowForm] = useState(false);
  const [buttonText, setButtonText] = useState("+ New Course");
  const [titleText, setTitleText] = useState("My Courses");

  const toggleForm = () => {
    setShowForm(!showform);
    setButtonText((state) =>
      state === "+ New Course" ? "Cancel" : "+ New Course"
    );
    setTitleText((state) =>
      state === "My Courses" ? "Add a course" : "My Courses"
    );
  };

  const handleFormSubmit = () => {
    toggleForm();
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.titleText}>{titleText}</h2>
        <button
          type="button"
          onClick={toggleForm}
          className={`${styles.button} ${buttonText === "Cancel" ? styles.cancel : ""}`}
        >
          {buttonText}
        </button>
      </div>
      {showform && <CourseForm onSubmit={handleFormSubmit} />}
      {courses &&
        courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
    </div>
  );
};

export default Home;
