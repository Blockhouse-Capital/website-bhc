import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Share from "@mui/icons-material/Share";
import Close from "@mui/icons-material/Close";
import LastPageIcon from "@mui/icons-material/LastPage";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

// Local Images
import tradingHistoryArrowUp from "../../Images/Home/tradingHistoryArrowUp.png";
import mainContainerSearchIcon from "../../Images/liquidity/mainContainerSearchIcon.png";
import liquidityTableLastRowDropdown from "../../Images/liquidity/liquidityTableLastRowDropdown.png";

export default function CustomPaginationActionsTable() {
  let tableBodyRow = (
    <TableRow
      className="compAucTableHeight"
      sx={{ borderBottom: "2px solid transparent" }}
    >
      <TableCell component="td" scope="row" sx={{ color: "white" }}>
        1
      </TableCell>
      {/* <TableCell style={{ width: 160 }} align="right"> */}
      <TableCell
        style={{
          color: "rgba(255, 255, 255, 0.6)",
          whiteSpace: "nowrap",
        }}
      >
        6,638.03
      </TableCell>
      <TableCell
        align="center"
        style={{
          color: "rgba(255, 255, 255, 0.6)",
          whiteSpace: "nowrap",
        }}
      >
        0.06534
      </TableCell>
      <TableCell
        align="right"
        style={{
          color: "white",
          whiteSpace: "nowrap",
        }}
      >
        0.05728
      </TableCell>
    </TableRow>
  );
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "12px",
          border: `1px solid rgba(255, 255, 255, 0.12)`,
          borderBottom: "none",
          background: "#23252F",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Table
          sx={{
            minWidth: 200,
          }}
          aria-label="custom pagination table"
        >
          <TableHead>
            <TableRow
              className="compAucTableHeight"
              // sx={{ borderBottom: "2px solid rgba(255, 255, 255, 0.1)" }}
              sx={{ borderBottom: "2px solid transparent" }}
            >
              <TableCell component="th" scope="row" sx={{ color: "white" }}>
                #
              </TableCell>
              <TableCell
                style={{
                  color: "#E0E0FF",
                  whiteSpace: "nowrap",
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                Price (ETH)
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                Tx (ETH)
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
            {tableBodyRow}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
