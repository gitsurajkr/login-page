import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

import React from "react";
import Header from "../../dashCompo/Header";
import StatBox from "../../dashCompo/StatBox";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

import { tokens } from "../../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subTitle="Welcome to the Dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[400],
              color: colors.grey[100],
              fontsize: "14px",
              fontWeight: "bold",
              borderRadius: "10px",
            }}
          >
            <DownloadIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
      display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows={"140px"}
        gap="20px"
        >
            <Box 
            gridColumn="span 3"
           backgroundColor={colors.blueAccent[400]}
           display="flex"
              alignItems="center"
                justifyContent="center"
                >
                <StatBox title="Total Users" value="1000" progress="0.75" increase="+14%"
                Icon={
                    <EmailIcon sx={{color: colors.grey[100], fontSize: "26px"}} />
                } />
                </Box>
        </Box>
    </Box>
  );
};

export default Dashboard;
