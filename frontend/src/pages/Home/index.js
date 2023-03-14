import { useEffect, useState } from "react";
import "./home.css";

// components
import CourseCard from "../../components/CourseCard";

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

  const handleClick = () => {
    setForm(!form);
  };

  return (
    <div className="container">
      <div className="titleContainer">
        <h2>My Courses</h2>
        <button type="button" onClick={handleClick} className="button">
          Add a course
        </button>
      </div>
      {form && <div>Form opened</div>}
      {courses &&
        courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
    </div>
  );
};

export default Home;
