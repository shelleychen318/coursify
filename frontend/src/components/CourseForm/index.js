import { useState } from "react";
import { useCoursesContext } from "../../hooks/useCoursesContext";
import "./courseForm.css";

const CourseForm = ({ course }) => {
  const { dispatch } = useCoursesContext();

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [professor, setProfessor] = useState("");
  const [term, setTerm] = useState("");
  const [grade, setGrade] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const course = { code, name, description, professor, term, grade, rating };

    const response = await fetch("/api/courses", {
      method: "POST",
      body: JSON.stringify(course),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setCode("");
      setName("");
      setDescription("");
      setProfessor("");
      setTerm("");
      setGrade("");
      setRating("");
      setError(null);
      console.log("new course added", json);
      dispatch({ type: "CREATE_COURSE", payload: json });
    }
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <label>
        Course Code:{" "}
        <input
          type="text"
          onChange={(e) => setCode(e.target.value)}
          value={code}
        />
      </label>
      <label>
        Course Name:{" "}
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label className="longInput">
        Description:
        <textarea
          rows={4}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </label>
      <label>
        Professor:{" "}
        <input
          type="text"
          onChange={(e) => setProfessor(e.target.value)}
          value={professor}
        />
      </label>
      <label>
        {/* Term: <input type="text" /> */}
        Term:
        <select onChange={(e) => setTerm(e.target.value)} value={term}>
          <option value="" disabled></option>
          <option value="1A">1A</option>
          <option value="1B">1B</option>
          <option value="2A">2A</option>
          <option value="2B">2B</option>
          <option value="3A">3A</option>
          <option value="3B">3B</option>
          <option value="4A">4A</option>
          <option value="4B">4B</option>
        </select>
      </label>
      <label>
        Grade:{" "}
        <input
          type="text"
          onChange={(e) => setGrade(e.target.value)}
          value={grade}
        />
      </label>
      <label>
        Rating (out of 10):
        {/* <input type="text" /> */}
        <select onChange={(e) => setRating(e.target.value)} value={rating}>
          <option value="" disabled></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </label>
      {error && <div className="error">{error}</div>}
      <button className="button addButton">Add Course</button>
    </form>
  );
};

export default CourseForm;
