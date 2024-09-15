import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, progress, Icon, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {Icon}
          <Typography varient="h5" color={colors.grey[100]} fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography varient="h5" color={colors.greenAccent[500]}>
          {subtitle}
        </Typography>
        <Typography
          varient="h5"
          fontStyle="italic"
          color={colors.greenAccent[400]}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;