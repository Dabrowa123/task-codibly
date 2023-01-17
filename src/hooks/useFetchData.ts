import * as React from "react";
import { useFetchProductsQuery, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../store";

function useFetchData() {
  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => {
    return state.query[0];
  });
  console.log(query);
  const { data, error, isFetching, isLoading, isError, isSuccess } =
    useFetchProductsQuery(query);
  console.log(data, error, isFetching, isLoading, isError, isSuccess);
  const idAndPageParams = useSelector((state: RootState) => {
    return state.idAndPageParams;
  });

  React.useEffect(() => {
    if (idAndPageParams.id !== "") {
      dispatch(setQuery(`id=${idAndPageParams.id}`));
    } else if (idAndPageParams.page > 0) {
      dispatch(setQuery(`page=${idAndPageParams.page + 1}`));
    } else {
      dispatch(setQuery("page=1"));
    }
  }, [idAndPageParams]);

  return [data, error, isFetching, isLoading, isError, isSuccess];
}

export default useFetchData;
