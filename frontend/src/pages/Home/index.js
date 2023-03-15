import { useEffect, useState } from "react";
import "./home.css";

// components
import CourseCard from "../../components/CourseCard";
import CourseForm from "../../components/CourseForm";

const Home = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const json = await response.json();

      if (response.ok) {
        setCourses(json);
      }
    };

    fetchCourses();
  }, []);

  const [form, setForm] = useState(false);
  const [buttonText, setButtonText] = useState("+ New Course");
  const [titleText, setTitleText] = useState("My Courses");

  const handleClick = () => {
    setForm(!form);
    setButtonText((state) =>
      state === "+ New Course" ? "Cancel" : "+ New Course"
    );
    setTitleText((state) =>
      state === "My Courses" ? "Add a course" : "My Courses"
    );
  };

  return (
    <div className="container">
      <div className="titleContainer">
        <h2>{titleText}</h2>
        <button
          type="button"
          onClick={handleClick}
          className={`button ${buttonText === "Cancel" ? "cancel" : ""}`}
        >
          {buttonText}
        </button>
      </div>
      {form && <CourseForm />}
      {courses &&
        courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
    </div>
  );
};

export default Home;
