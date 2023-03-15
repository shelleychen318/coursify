import "./courseForm.css";

const CourseForm = ({ course }) => {
  return (
    <form className="formContainer">
      <h3>Add a new course</h3>
      <label>
        Course Code: <input type="text" />
      </label>
    </form>
  );
};

export default CourseForm;
