import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";

import {
  LeftFormControl,
  RightFormControl,
} from "@/features/users/components/users-search-box.styled";
import { EN } from "@/features/users/components/components.translations";
import { BASE_USER_KEY } from "@/features/users/users.constants";

type SearchByOption = {
  value: string;
  label: string;
};

const SEARCH_BY_OPTION: SearchByOption[] = [
  {
    value: BASE_USER_KEY.NAME,
    label: EN.USER_SEARCH_BOX.FIELD.SEARCH_BY.OPTION.NAME,
  },
  {
    value: BASE_USER_KEY.USERNAME,
    label: EN.USER_SEARCH_BOX.FIELD.SEARCH_BY.OPTION.USERNAME,
  },
  {
    value: BASE_USER_KEY.EMAIL,
    label: EN.USER_SEARCH_BOX.FIELD.SEARCH_BY.OPTION.EMAIL,
  },
  {
    value: BASE_USER_KEY.USERNAME,
    label: EN.USER_SEARCH_BOX.FIELD.SEARCH_BY.OPTION.PHONE,
  },
];

export function UsersSearchBox() {
  return (
    <Paper style={{ marginBottom: "2rem", minWidth: "50rem" }}>
      <Grid container>
        <Grid size={4}>
          <LeftFormControl fullWidth>
            <InputLabel id="search-by-input">
              {EN.USER_SEARCH_BOX.FIELD.SEARCH_BY.LABEL}
            </InputLabel>
            <Select
              defaultValue={20}
              labelId="search-by-input"
              id="demo-simple-select"
              label={EN.USER_SEARCH_BOX.FIELD.SEARCH_BY.LABEL}
            >
              {SEARCH_BY_OPTION.map((option) => (
                <MenuItem key={option.value}>{option.label}</MenuItem>
              ))}
            </Select>
          </LeftFormControl>
        </Grid>
        <Grid size={8}>
          <RightFormControl fullWidth variant="outlined">
            <InputLabel htmlFor="search-input">
              {EN.USER_SEARCH_BOX.FIELD.SEARCH.LABEL}
            </InputLabel>
            <OutlinedInput
              id="search-input"
              type="search"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      EN.USER_SEARCH_BOX.FIELD.SEARCH.RESET_BUTTON.LABEL
                    }
                    edge="end"
                    style={{ marginRight: "0" }}
                  >
                    <CancelIcon />
                  </IconButton>
                  <SearchIcon />
                </InputAdornment>
              }
              label={EN.USER_SEARCH_BOX.FIELD.SEARCH.LABEL}
              autoFocus
            />
          </RightFormControl>
        </Grid>
      </Grid>
    </Paper>
  );
}
