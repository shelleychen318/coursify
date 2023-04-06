import { useEffect, useState } from "react";
import { useCoursesContext } from "../hooks/useCoursesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import styles from "./home.module.css";

// components
import CourseCard from "../components/CourseCard";
import CourseForm from "../components/CourseForm";

const Home = () => {
  const { courses, dispatch } = useCoursesContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_COURSES", payload: json });
      }
    };

    // only try to fetch courses if we have a value for user
    if (user) {
      fetchCourses();
    }
  }, [dispatch, user]);

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
    <>
      {user && (
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h2 className={styles.titleText}>{titleText}</h2>
            <button
              type="button"
              onClick={toggleForm}
              className={`${styles.button} ${
                buttonText === "Cancel" ? styles.cancel : ""
              }`}
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
      )}
    </>
  );
};

export default Home;
