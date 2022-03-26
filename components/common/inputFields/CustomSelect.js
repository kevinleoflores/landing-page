import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CustomSelect = ({
  label,
  labelId,
  selectId,
  selectedMenu,
  selectMenuItem,
  selectChangeHandler,
  className = "half-width-desktop",
}) => {
  const styles = (theme) => ({
    "&.MuiPaper-root": {
      maxWidth: "100px",
    },
    label: {
      backgroundColor: "white",
    },
  });
  return (
    <FormControl className={`${className} full-width-mobile`}>
      <InputLabel sx={{ backgroundColor: "white" }} id={labelId}>
        {label}
      </InputLabel>
      <Select
        labelId={labelId}
        id={selectId}
        value={selectedMenu}
        label="Age"
        onChange={selectChangeHandler}
        variant="outlined"
        sx={{ fontSize: "0.9rem" }}
      >
        <MenuItem disabled value="">
          <em>Please Select</em>
        </MenuItem>
        {selectMenuItem.map((row, index) => {
          return (
            <MenuItem key={index} value={row.value}>
              {row.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default CustomSelect;
