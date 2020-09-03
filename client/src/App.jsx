import React, {useEffect, useReducer} from 'react';
import {MainLayout} from "./layouts";
import  {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import NoteList from "./pages/noteList/NoteList";
import NoteItem from "./pages/noteItem/NoteItem";
import NoteEdit from "./pages/noteEdit/NoteEdit";
import NotFound from "./components/404/NotFound";
import {dispatchMiddleware, reducer, Context} from "./services";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    language: "ru"
  });

  const initData = {
    dispatch: dispatchMiddleware(dispatch),
    state
  }

  useEffect(() => {
    dispatchMiddleware(dispatch)({type: "LOAD_DATA"});
  }, []);

  return (
    <Context.Provider value={initData} >
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route path={"/"} exact>
              <Redirect to={"/notes"}/>
            </Route>

            <Route path={"/create"} exact>
              <NoteEdit/>
            </Route>

            <Route path={"/notes"} exact>
              <NoteList/>
            </Route>

            <Route path={"/edit/:id"} exact>
              <NoteEdit/>
            </Route>

            <Route path={"/note/:id"} exact>
              <NoteItem/>
            </Route>

            <Route path={"*"} >
              <NotFound/>
            </Route>
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Context.Provider>
  );
}

export {App};
