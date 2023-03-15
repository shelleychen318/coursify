import "./courseForm.css";

const CourseForm = ({ course }) => {
  return (
    <form className="formContainer">
      {/* <h3>Add a new course</h3> */}
      <label>
        Course Code: <input type="text" />
      </label>
      <label>
        Course Name: <input type="text" />
      </label>
      <label className="longInput">
        Description: <textarea rows={5} />
      </label>
    </form>
  );
};

export default CourseForm;
