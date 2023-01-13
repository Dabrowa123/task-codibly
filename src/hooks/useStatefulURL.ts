import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, searchId, addIdToURL } from "../store";
import { useSearchParams } from "react-router-dom";
import useUrlState from "@ahooksjs/use-url-state";

function useStatefulURL() {
  const [state, setState] = useUrlState({ id: undefined, page: undefined });

  //   Load data from adress bar (when user will paste a link)
  const dispatch = useDispatch();
  const id = window.location.hash.slice(1);
  React.useEffect(() => {
    dispatch(searchId(id));
    dispatch(addIdToURL(id));
  }, []);

  // Insert into adress bar data from redux (filter & pagination info)
  const statefulURL = useSelector((state: RootState) => {
    return state.statefulURL;
  });
  console.log(statefulURL);
  React.useEffect(() => {
    // window.location.hash = statefulURL;
    setState({ id: statefulURL[0], page: statefulURL[1] });
  }, [statefulURL]);

  // Pagination
  const pagination = useSelector((state: RootState) => {
    return state.statefulURL[1];
  });

  return;
}

export default useStatefulURL;
