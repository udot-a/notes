import React, {useContext} from "react";
import {useHistory} from 'react-router-dom';
import {Context, pause} from "../../services";
import css from "./renderItem.module.scss";

export const Item = ({array, setModal}) => {
  const {mr, listItem, buttons, sign} = css;
  const history = useHistory();
  const {dispatch} = useContext(Context);

  const itemHandler = id => () => {
    history.push(`/note/${id}`);
  }

  const deleteHandler = id => async e => {
    e.stopPropagation();

    dispatch({type: "DELETE", id});

    setModal({
      message: "Заметка удалена!",
      type: "danger"
    });

    await pause(2000);

    setModal({
      message: "",
      type: ""
    });


  }

  const editHandler = id => e => {
    e.stopPropagation();

    history.push(`/edit/${id}`);
  }

  if (!array) return null;

  return  array.map(({date, title, id}, index) => {

    return (
      <div
        className={`list-group-item ${listItem}`}
        key={id}
        onClick={itemHandler(id)}
      >
        <span className={mr}>
          {date}
        </span>

        <span className={mr}>
          {title}
        </span>

        <div className={buttons}>
          <svg
            className={`bi bi-pencil-fill ${mr} ${sign}`}
            fill="currentColor"
            height="1em"
            onClick={editHandler(id)}
            viewBox="0 0 16 16"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
            />
          </svg>

          <svg
            className={`bi bi-archive-fill ${sign}`}
            fill="currentColor"
            height="1em"
            onClick={deleteHandler(id)}
            viewBox="0 0 16 16"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"
            />
          </svg>
        </div>
      </div>
    )
  });
}
