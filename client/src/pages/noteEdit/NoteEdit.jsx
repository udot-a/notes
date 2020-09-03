import React, {useContext, useEffect, useState} from "react";
import {useParams, useHistory} from 'react-router-dom';
import {Context, Note, pause} from "../../services";
import Modal from "../../components/modal/Modal";
import {vocabulary as v} from "./NoteEdit.lang";


export default () => {
  const {id} = useParams();
  const {dispatch, state} = useContext(Context);
  const history = useHistory();
  const [formData, setFormData] = useState({title: "", body: ""});
  const [modal, setModal] = useState({message: "", type: ""});
  const {message, type} = modal;

  useEffect(() => {
    const note = state.data.find(item => item.id === id);

    if (note) {
      setFormData(prev => ({title: note.title, body: note.body}));
    }

  }, [id, state]);

  const changeHandler = ({target: {name, value}}) => {
    setFormData(prev => ({...prev, [name]: value}))
  }

  const cancel = () => {
    setFormData(prev => ({ title: "", body: ""}));

    history.push("/notes");
  }

  const successHandler = async e => {
    e.preventDefault();

    const payload = new Note(formData.title, formData.body);

    if (!id) {
      dispatch({type: "CREATE", payload});

      setModal({
        message: v[state.language].noteCreate,
        type: "success"
      });

      await pause(2000);

      history.push("/notes");
    } else {
        dispatch({type: "UPDATE", payload, id});

        setModal({
          message: v[state.language].noteUpdate,
          type: "success"
        });

        await pause(2000);
        history.push("/notes");
    }
  }

  return (
    <>
      <form
        className={"mt-5"} style={{width: "80vw"}}
        onSubmit={successHandler}
      >
        <h4
          className={"m-3"}
        >
          {id ? v[state.language].formNameEdit : v[state.language].formNameCreate}
        </h4>

        <hr/>

        <div className={"form-group"}>
          <label htmlFor={"title"}>
            {v[state.language].name}
          </label>

          <input
            className={"form-control"}
            id={"title"}
            name={"title"}
            onChange={changeHandler}
            placeholder={v[state.language].namePlaceholder}
            type={"text"}
            value={formData.title}
          />
        </div>

        <div className="form-group">
          <label htmlFor={"body"}>
            {v[state.language].text}
          </label>

          <textarea
            className="form-control"
            id="body"
            name={"body"}
            onChange={changeHandler}
            rows="4"
            placeholder={v[state.language].textPlaceholder}
            value={formData.body}
          >
        </textarea>
        </div>

        <button
          className="btn btn-success mr-3"
          disabled={message || !formData.title || !formData.body}
          type="submit"
        >
          {v[state.language].save}
        </button>

        <button
          className="btn btn-dark"
          disabled={message}
          onClick={cancel}
          type="button"

        >
          {v[state.language].cancel}
        </button>
      </form>

      {message &&
        <Modal
          onClose={() => setModal(prev => ({...prev, message: "", type: ""}))}
          text={message}
          type={type}
        />
      }
    </>
  )
}
