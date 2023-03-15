import "./courseForm.css";

const CourseForm = ({ course }) => {
  return (
    <form className="formContainer">
      {/* <h3>Add a new course</h3> */}
      {/* <div className="gridContainer"> */}
        <label>
          Course Code: <input type="text" />
        </label>
        <label>
          Course Name: <input type="text" />
        </label>
      {/* </div> */}
    </form>
  );
};

export default CourseForm;
