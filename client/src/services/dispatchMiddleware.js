import {httpRequest} from "./index";

/*
Ф-ция HOF к-я дает возможность dispatch возвращаемой useReducer работать с асинхронным кодом
 */
const dispatchMiddleware = dispatch => {

  return (action) => {
    const getData = async (action) => {
      const payload = await httpRequest("http://localhost:3000/notes");
      return dispatch({...action, payload});
    }

    const delItem = async() => {
      await httpRequest(`http://localhost:3000/notes/${action.id}`, "DELETE");

      await getData({type: "LOAD_DATA"});
    }

    const createItem = async() => {
      await httpRequest(`http://localhost:3000/notes`, "POST", action.payload);

      await getData({type: "LOAD_DATA"});
    }

    const updateItem = async() => {
      await httpRequest(`http://localhost:3000/notes/${action.id}`, "PUT", action.payload);

      await getData({type: "LOAD_DATA"});
    }

    switch (action.type) {
      case "LOAD_DATA":
        return getData(action);

      case "DELETE":
        return delItem();

      case "CREATE":
        return createItem();

      case "UPDATE":
        return updateItem();

      default:
        return dispatch(action);
    }
  };
}

export {dispatchMiddleware}
