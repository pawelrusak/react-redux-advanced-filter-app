import React from "react";
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
import { EN } from "@/features/users/users.translations";
import { BASE_USER_KEY } from "@/features/users/users.constants";

import type { UserBase } from "@/features/users/users.types";
import type { SelectChangeEvent } from "@mui/material/Select";

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
    value: BASE_USER_KEY.PHONE,
    label: EN.USER_SEARCH_BOX.FIELD.SEARCH_BY.OPTION.PHONE,
  },
];

type UserBaseKey = keyof UserBase;

export type SearchBoxSearchByChangeEvent = SelectChangeEvent<UserBaseKey>;

type SearchBoxProps = {
  searchByDefaultValue: UserBaseKey;
  searchByValue: UserBaseKey;
  onSearchByChange: (event: SearchBoxSearchByChangeEvent) => void;
  searchValue: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchResetClick: () => void;
};

export function UsersSearchBox(props: SearchBoxProps) {
  return (
    <Paper style={{ marginBottom: "2rem", minWidth: "50rem" }}>
      <Grid container>
        <Grid size={4}>
          <LeftFormControl fullWidth>
            <InputLabel htmlFor="search-by-input">
              {EN.USER_SEARCH_BOX.FIELD.SEARCH_BY.LABEL}
            </InputLabel>
            <Select
              name="search-by"
              id="search-by-input"
              defaultValue={props.searchByDefaultValue}
              value={props.searchByValue}
              onChange={props.onSearchByChange}
              label={EN.USER_SEARCH_BOX.FIELD.SEARCH_BY.LABEL}
            >
              {SEARCH_BY_OPTION.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
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
              name="search"
              value={props.searchValue}
              onChange={props.onSearchChange}
              endAdornment={
                <InputAdornment position="end">
                  {props.searchValue && (
                    <IconButton
                      aria-label={
                        EN.USER_SEARCH_BOX.FIELD.SEARCH.RESET_BUTTON.LABEL
                      }
                      edge="end"
                      style={{
                        marginRight: "0",
                      }}
                      onClick={props.onSearchResetClick}
                    >
                      <CancelIcon />
                    </IconButton>
                  )}
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
