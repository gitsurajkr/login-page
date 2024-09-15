import { Box } from "@mui/material";
// import { PieChart } from '@mui/x-charts/PieChart';
import { PieChart } from '@mui/x-charts';

import React from "react";
const ProgressCircle = ({ progress }) => {
  return <Box>
  <PieChart
  series={[
    {
      data: [
        { id: 0, value: 10 },
        { id: 1, value: 15 },
        { id: 2, value: 20 },
      ],
    },
  ]}
  width={170}
  height={100}
/></Box>;
};

export default ProgressCircle;
