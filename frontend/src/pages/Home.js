import { useEffect, useState } from "react";
import styled from "styled-components";

// components
import CourseCard from "../components/CourseCard";

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 6rem;
  max-width: 800px;
  gap: 3rem;
`;

const StyledTitle = styled.h2`
  align-self: flex-start;
  padding-top:2rem;
  font-weight: 600;
  font-size: 2vw;
`;

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

  return (
    <StyledHomeContainer>
      <StyledTitle>Your Courses</StyledTitle>
      {courses &&
        courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
    </StyledHomeContainer>
  );
};

export default Home;
