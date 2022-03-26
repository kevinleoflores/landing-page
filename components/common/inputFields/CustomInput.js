import { TextField } from "@mui/material";
const CustomInput = ({
  label,
  type = "text",
  value,
  onChange,
  className = "half-width-desktop",
}) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      type={type}
      value={value}
      onChange={onChange}
      className={`${className} full-width-mobile`}
      sx={{ marginBottom: "16px", fontSize: "0.9rem" }}
    />
  );
};
export default CustomInput;
