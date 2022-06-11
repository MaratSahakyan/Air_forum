import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import useWindowDimensions from "./WindowResize";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const TextArea = styled.textarea`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  outline: none;
  border: none;
  border: 1px solid #000;
  min-height: 250px;
  width: 100%;
  font-size: 22px;
  padding: 10px;

  &::placeholder {
    color: #fff;
  }
`;

export default function CreateQuestionsField() {
  const { width } = useWindowDimensions();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "50vh",
      }}
    >
      <Stack spacing={2} sx={{ width: width <= 1000 ? width - 60 : 800 }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={languages.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              style={{ borderColor: "red" }}
              {...params}
              label="Select Language"
            />
          )}
        />
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={languages.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Title Question"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
      <div style={{ width: "100%" }}>
        <TextArea placeholder="Description"></TextArea>
      </div>
      <div>
        <Button fullWidth variant="contained">
          SEND
        </Button>
      </div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const languages = [
  { title: "The Shawshank Redemption" },
  { title: "The Godfather" },
  { title: "The Godfather: Part II" },
  { title: "The Dark Knight" },
  { title: "12 Angry Men" },
  { title: "Schindler's List" },
  { title: "Pulp Fiction" },
  { title: "The Lord of the Rings: The Return of the King" },
  { title: "The Good, the Bad and the Ugly" },
  { title: "Fight Club" },
];
