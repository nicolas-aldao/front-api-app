import React, {useState} from "react";
import { Form } from "./styles";

const FormAdd = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({
      title: title,
      description: description,
    }));
    try {
      let res = await fetch("https://naldao-tasks-api.herokuapp.com/tasks", {
        mode: 'cors',
	      // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // },
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setTitle("");
        setDescription("");
        setMessage("Tasks created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Form className="form" onSubmit={handleSubmit}>
      <label>{props.formTitle}</label>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="form-buttons">
        <button type="submit" onSubmit={handleSubmit}>
          {props.buttonAdd}
        </button>
      </div>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </Form>
  );
};

export { FormAdd };
