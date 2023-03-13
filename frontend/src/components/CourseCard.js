import styled from "styled-components";

const StyledCardContainer = styled.div`
  background: var(--card-bg);
  border-radius: 2rem;
  padding: 2rem 3rem;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h4`
  font-size: 1.9vw;
  margin: 0;
  font-weight: 600;
  line-height: 30px;
`;

const StyledSubTitle = styled.h4`
  font-size: 1.6vw;
  margin: 0.5rem 0 1.5rem;
  font-weight: 500;
  line-height: 30px;
`;

const CourseCard = ({ course }) => {
  return (
    <StyledCardContainer>
      <StyledTitle>{course.code}</StyledTitle>
      <StyledSubTitle>{course.name}</StyledSubTitle>
      <p>
        <strong>Description: </strong>
        {course.description}
      </p>
      <p>
        <strong>Professor: </strong>
        {course.professor}
      </p>
      <p>
        <strong>Term: </strong>
        {course.term}
      </p>
      <p>
        <strong>Grade: </strong>
        {course.grade}
      </p>
      <p>
        <strong>Rating: </strong>
        {course.rating}/10
      </p>
    </StyledCardContainer>
  );
};

export default CourseCard;
