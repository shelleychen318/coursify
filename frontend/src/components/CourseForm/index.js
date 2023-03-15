import "./courseForm.css";

const CourseForm = ({ course }) => {
  return (
    <form className="formContainer">
      <label>
        Course Code: <input type="text" />
      </label>
      <label>
        Course Name: <input type="text" />
      </label>
      <label className="longInput">
        Description: <textarea rows={4} />
      </label>
      <label>
        Professor: <input type="text" />
      </label>
      <label>
        Term: <input type="text" />
      </label>
      <label>
        Grade: <input type="text" />
      </label>
      <label>
        Rating (out of 10): <input type="text" />
      </label>
    </form>
  );
};

export default CourseForm;
