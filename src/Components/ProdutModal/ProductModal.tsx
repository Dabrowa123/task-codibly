import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState, closeModal } from "../../store/index";
import StyledModalBox from "./StyledModalBox";

export default function ProductModal() {
  const { id, name, year, color, pantone_value } = useSelector(
    (state: RootState) => {
      return state.modal.data;
    }
  );
  const open = useSelector((state: RootState) => {
    return state.modal.isVisible;
  });

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal(true));

  return (
    <div>
      <Modal
        data-testid="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalBox>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Product name: {name}
          </Typography>
          <Typography sx={{ mt: 2 }}>Product ID: {id}</Typography>
          <Typography sx={{ mt: 2 }}>Product year: {year}</Typography>
          <Typography sx={{ mt: 2 }}>Product color: {color}</Typography>
          <Typography sx={{ mt: 2 }}>
            Product pantone_value: {pantone_value}
          </Typography>
        </StyledModalBox>
      </Modal>
    </div>
  );
}
