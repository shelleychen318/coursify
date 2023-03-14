import "./courseCard.css";

const CourseCard = ({ course }) => {
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
        {course.grade}
      </p>
      <p className="text">
        <strong className="heading">Rating: </strong>
        {course.rating}/10
      </p>
    </div>
  );
};

export default CourseCard;
