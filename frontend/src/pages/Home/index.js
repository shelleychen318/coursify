import { useEffect, useState } from "react";
import { useCoursesContext } from "../../hooks/useCoursesContext";
import "./home.css";

// components
import CourseCard from "../../components/CourseCard";
import CourseForm from "../../components/CourseForm";

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
  }, []);

  const [form, setForm] = useState(false);
  const [buttonText, setButtonText] = useState("+ New Course");
  const [titleText, setTitleText] = useState("My Courses");

  const toggleForm = () => {
    setForm(!form);
    setButtonText((state) =>
      state === "+ New Course" ? "Cancel" : "+ New Course"
    );
    setTitleText((state) =>
      state === "My Courses" ? "Add a course" : "My Courses"
    );
  };

  const handleCourseSubmit = () => {
    toggleForm();
  };

  return (
    <div className="container">
      <div className="titleContainer">
        <h2>{titleText}</h2>
        <button
          type="button"
          onClick={toggleForm}
          className={`button ${buttonText === "Cancel" ? "cancel" : ""}`}
        >
          {buttonText}
        </button>
      </div>
      {form && <CourseForm onSubmit={handleCourseSubmit} />}
      {courses &&
        courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
    </div>
  );
};

export default Home;
