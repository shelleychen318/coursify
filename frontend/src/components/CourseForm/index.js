import "./courseForm.css";

const CourseForm = ({ course }) => {
  return (
    <form className="formContainer">
      {/* <h3>Add a new course</h3> */}
      <label>
        Course Code: <input type="text" className="shortInput" />
      </label>
      <label>
        Course Name: <input type="text" className="shortInput" />
      </label>
      <label>
        Description: <input type="text" className="longInput" />
      </label>
    </form>
  );
};

export default CourseForm;
