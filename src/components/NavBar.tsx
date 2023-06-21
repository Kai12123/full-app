import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link to="/" style={{ color: "white" }}>
          <Typography variant="h6" component="div">
            My App
          </Typography>
        </Link>
        <Link to="/login">
          <Avatar
            alt="User Avatar"
            src="/path/to/avatar.jpg"
            sx={{ cursor: "pointer" }}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
