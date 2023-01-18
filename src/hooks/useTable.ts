import * as React from "react";
import {
  setPage,
  RootState,
  setModalData,
  openModal,
} from "../store";
import { useSelector, useDispatch } from "react-redux";

function useDataTable() {
  const dispatch = useDispatch();
  
  // pagination control

  const page = useSelector((state: RootState) => {
    return state.idAndPageParams.page;
  });

  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    dispatch(setPage(0));
  };

  // Creating rows data

  // const { data } = useFetchProductsQuery(
  //   useSelector((state: RootState) => state.idAndPageParams)
  // );

  // let rows = data || [];

  // Show modal

  const handleShowModal = (rowData: any) => {
    dispatch(setModalData(rowData));
    dispatch(openModal(true));
  };

  return [
    // rows,
    // page,
    // rowsPerPage,
    // handleChangePage,
    // handleChangeRowsPerPage,
    // handleShowModal,
  ];
}

export default useDataTable;
