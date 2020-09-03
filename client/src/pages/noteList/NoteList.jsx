import React, {useContext, useState} from "react";
import {Context} from "../../services";
import {Item} from "../renderItem/renderItem";
import {useHistory} from 'react-router-dom';
import {vocabulary as v} from "./NoteList.lang";
import Modal from "../../components/modal/Modal";
import css from "./NoteList.module.scss";

export default () => {
  const {state} = useContext(Context);
  const history = useHistory();
  const [modal, setModal] = useState({message: "", type: ""});
  const {message, type} = modal;

  const {mr} = css;

  if (state.data.length === 0) {
    return (
      <h1>{v[state.language].emptyList}</h1>
    )
  }

  return (
    <div>
      <button
        className="btn btn-success btn-lg btn-block mt-3"
        onClick={() => history.push("/create")}
        type="button"
      >
        <svg
          className="bi bi-folder-plus mr-5"
          fill="currentColor"
          height="1em"
          viewBox="0 0 16 16"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9.828 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293z"
          />

          <path
            fillRule="evenodd"
            d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
        {v[state.language].addNoteBtn}
      </button>

      <hr/>

      <div className={"list-group list-group-flush"} >
        <div className={"list-group-item list-group-item-action active"}>
          <span className={mr}>
            {v[state.language].listDate}
          </span>

          <span>
            {v[state.language].listName}
          </span>
        </div>

        <Item array={state.data} setModal={setModal}/>
      </div>

      {message &&
      <Modal
        onClose={() => setModal(prev => ({...prev, message: "", type: ""}))}
        text={message}
        type={type}
      />
      }

    </div>
  )
}
