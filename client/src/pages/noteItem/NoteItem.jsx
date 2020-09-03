import React, {useContext, useEffect, useState} from "react";
import {useParams, Link} from 'react-router-dom';
import {Context} from "../../services";
import {vocabulary as v} from "./NoteItem.lang";

export default () => {
  const {id} = useParams();
  const {state} = useContext(Context);
  const [note, setNote] = useState(null);

  useEffect(() => {
      setNote(state.data.find(note => note.id === id));
  }, [id, state]);

  if (!note) {
    return (
      <h4>{v[state.language].empty}</h4>
    );
  }

  const {date, title, body} = note;

  return (
    <div className="card" style={{width: "80vw"}}>
      <div className="card-body">
        <h5 className="card-title">
          {title}
        </h5>

        <h6 className="card-subtitle mb-2 text-muted">
          {date}
        </h6>

        <p className="card-text">
          {body}
        </p>

        <Link to={"/notes"} className="card-link">{v[state.language].back}</Link>
      </div>
    </div>
  )
}
