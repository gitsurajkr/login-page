import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { grey } from "@mui/material/colors"; 

const Topbar = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} p={1.5} sx={{ backgroundColor: grey[900] }}>
      {/* Search Bar */}
      <Box
        display="flex"
        sx={{ backgroundColor: grey[800] }}
        borderRadius={"50px"}>
        <InputBase
          sx={{ ml: 2, flex: 1, color: "white" }} // Input text color white
          placeholder="Search"
          placeholdertextcolor="white" // Placeholder text color
        />
        <IconButton type="button" sx={{ p: 1, color: "white" }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Right side */}
      <Box>
        <IconButton type="button" sx={{ color: "white" }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton type="button" sx={{ color: "white" }}>
          <SettingsIcon />
        </IconButton>
        <IconButton type="button" sx={{ color: "white" }}>
          <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
