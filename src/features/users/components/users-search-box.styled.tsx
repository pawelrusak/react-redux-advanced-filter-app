import FormControl, { FormControlProps } from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";

const LeftFormControl = styled(FormControl)<FormControlProps>({
  "& .MuiOutlinedInput-root": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  "& .MuiOutlinedInput-notchedOutline:not(:hover, :focus)": {
    borderRight: "none",
  },
});

const RightFormControl = styled(FormControl)<FormControlProps>({
  "& .MuiOutlinedInput-root": {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export { RightFormControl, LeftFormControl };
