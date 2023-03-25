import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";

// component
import DashboardHeder_Sidebar from "./liquidityComponent/dashboardHeder_Sidebar";
import LiquidityTable from "./liquidityComponent/LiquidityTable";
import TradingHistoryTable from "./homeComponents/TradingHistoryTable";
import PlaceOrderBox from "./PlaceOrderBox";
import ExchangeChart from "./ExchangeChart";

// Images
import placeOrderEth from "../Images/placeOrder/placeOrderEth.png";
import placeOrderTether from "../Images/placeOrder/placeOrderTether.png";
import placeOrderArrowUp from "../Images/placeOrder/placeOrderArrowUp.png";
import placeOrderQuestion from "../Images/placeOrder/placeOrderQuestion.png";

const mdTheme = createTheme();

const DealsBox = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />

        <DashboardHeder_Sidebar />

        <Box
          component="main"
          className="blockHouseLiquidityContainer"
          sx={{
            height: "100vh",
          }}
        >
          <Toolbar />
          {/* <LiquidityTable /> */}
          <Box sx={{ width: "93%", margin: "0 auto", mt: "50px", pr: "30px" }}>
            <Typography
              variant="body1"
              className="tableHeadingTxt"
              sx={{ fontWeight: "normal !important", fontFamily: "Open Sans" }}
            >
              Overview
            </Typography>

            <Box sx={{ my: "32px", width: "100%" }}>
              <Grid container spacing="24px">
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderRadius: "12px",
                      border: `1px solid rgba(255, 255, 255, 0.12)`,
                      background:
                        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                      padding: "16px",
                    }}
                  >
                    <Typography
                      component="h1"
                      variant="h4"
                      color="white"
                      noWrap
                    >
                      <b>SGB</b>
                    </Typography>
                    <Typography
                      variant="body1"
                      color="rgba(255, 255, 255, 0.6)"
                      noWrap
                      mt="12px"
                      mb="16px"
                    >
                      Singaporean Sovereign Bonds
                    </Typography>
                    <Box>
                      <Button
                        sx={{
                          "&.MuiButton-root": {
                            textTransform: "none",
                            borderColor: "gray",
                            color: "white",
                            background: "rgba(255, 255, 255, 0.04)",
                            p: "4px 8px",
                            fontWeight: 600,
                            fontSize: "13px",
                            borderRadius: `8px 0 0 8px`,
                            marginRight: "4px",
                          },
                        }}
                      >
                        7.89% Yield
                      </Button>
                      <Button
                        sx={{
                          "&.MuiButton-root": {
                            textTransform: "none",
                            borderColor: "gray",
                            color: "white",
                            background: "#659BEB",
                            p: "4px 8px",
                            fontWeight: 600,
                            fontSize: "13px",
                            borderRadius: `0 8px 8px 0`,
                            minWidth: "32px",
                          },
                        }}
                      >
                        AA
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <PlaceOrderBox />
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderRadius: "12px",
                      border: `1px solid rgba(255, 255, 255, 0.12)`,
                      background:
                        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                      marginTop: "-237px",
                      borderBottom: 'none'
                    }}
                  >
                    <Typography
                      component="h1"
                      variant="h6"
                      padding={"16px"}
                      color="white"
                      noWrap
                    >
                      <b>Overview</b>
                    </Typography>
                    <Typography
                      variant="body1"
                      color="rgba(255, 255, 255, 0.6)"
                      padding={"16px"}
                      mt="-19px"
                      fontSize={"15px"}
                      lineHeight="24px"
                      mb="5px"
                    >
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English
                    </Typography>
                    {/* <hr
                      style={{
                        border: "none",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                      }}
                    /> */}
                    <ExchangeChart fromWhichPage={"blockHouseDeals"}/>
                    <br />
                    <TradingHistoryTable />

                    {/* <Box padding={"16px"}>

                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "6px", mt: '8px' }}
                      >
                        <Typography color="white" fontWeight="600" fontSize="16px">
                          ETF Details
                        </Typography>
                        <Box>
                          <Typography fontSize="14px" color="white" display={"inline"} mr="20px">
                            Product Page <img src={placeOrderArrowUp} alt="placeOrderArrowUp" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                          </Typography>
                          <Typography fontSize="14px" color="white" display={"inline"}>
                            Fact Sheet <img src={placeOrderArrowUp} alt="placeOrderArrowUp" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="body1"
                        mt="-10px"
                        color="rgba(255, 255, 255, 0.6)">
                        Last updated on jan 24, 2023
                      </Typography>

                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "4px", mt: '20px' }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          Estimated Yield Maturity
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                          7.89%
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "4px" }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          30 Day SEC Yield
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                          7.55%
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "4px" }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          Total Assets
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                          $18.5b
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "4px" }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          Liquidity
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                          $2.7b of daily trading volume
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between" }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          Weighted Average Maturity
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                          5.09 years
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "0px" }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          Credit Quality (S&P)
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"} mt="-3px">
                          0.91% <span style={{ margin: '0 3px', fontSize: '21px', color: 'rgba(255, 255, 255, 0.6)' }}>.</span> BBB
                        </Typography>
                      </Box>
                      <Box sx={{ float: 'right', width: '98px', height: '30px' }}>
                        {/* <Typography color="white" fontSize="14px" fontWeight={"bold"} align="end" pb="0px" mt="-10px">
                          51.48% - BB
                        </Typography> *}
                        <Box
                          sx={{ display: "flex", justifyContent: "space-between", pb: "0px", mt: "-12px" }}>
                          <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                            51.48% <span style={{ margin: '0 3px', fontSize: '21px', color: 'rgba(255, 255, 255, 0.6)' }}>.</span>
                          </Typography>
                          <Typography color="white" fontSize="14px" fontWeight={"bold"} mt="8px">
                            BB
                          </Typography>
                        </Box>

                        <Box
                          sx={{ display: "flex", justifyContent: "space-between", pb: "8px", mt: '-12px' }}>
                          <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                            37.68% <span style={{ margin: '0 3px', fontSize: '21px', color: 'rgba(255, 255, 255, 0.6)' }}>.</span>
                          </Typography>
                          <Typography color="white" fontSize="14px" fontWeight={"bold"} mt="8px">
                            B
                          </Typography>
                        </Box>
                      </Box>
                      <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px" fontWeight={"bold"} align="right" pb="8px" mt="42px" sx={{ textDecoration: 'underline' }}>
                        Show all 7 holdings
                      </Typography>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", pb: "4px" }}
                      >
                        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
                          Standard Deviation (Annualized)
                          <img src={placeOrderQuestion} alt="placeOrderQuestion" style={{ position: 'relative', top: '7px', width: '20px', marginLeft: '5px' }} />
                        </Typography>
                        <Typography color="white" fontSize="14px" fontWeight={"bold"}>
                          10.92%
                        </Typography>
                      </Box>
                    </Box> */}
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  {/* <TradingHistoryTable /> */}
                  <Box
                    sx={{
                      borderRadius: "12px",
                      border: `1px solid rgba(255, 255, 255, 0.12)`,
                      background:
                        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                    }}
                  >
                    <Box padding={"22px 24px"}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "6px",
                        }}
                      >
                        <Typography
                          color="white"
                          fontWeight="600"
                          fontSize="16px"
                        >
                          ETF Details
                        </Typography>
                        <Box>
                          <Typography
                            fontSize="14px"
                            color="white"
                            display={"inline"}
                            mr="20px"
                          >
                            Product Page{" "}
                            <img
                              src={placeOrderArrowUp}
                              alt="placeOrderArrowUp"
                              style={{
                                position: "relative",
                                top: "7px",
                                width: "20px",
                                marginLeft: "5px",
                              }}
                            />
                          </Typography>
                          <Typography
                            fontSize="14px"
                            color="white"
                            display={"inline"}
                          >
                            Fact Sheet{" "}
                            <img
                              src={placeOrderArrowUp}
                              alt="placeOrderArrowUp"
                              style={{
                                position: "relative",
                                top: "7px",
                                width: "20px",
                                marginLeft: "5px",
                              }}
                            />
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="body1"
                        mt="-10px"
                        color="rgba(255, 255, 255, 0.6)"
                      >
                        Last updated on jan 24, 2023
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "4px",
                          mt: "20px",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          Estimated Yield Maturity
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                        >
                          7.89%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "4px",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          30 Day SEC Yield
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                        >
                          7.55%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "4px",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          Total Assets
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                        >
                          $18.5b
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "4px",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          Liquidity
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                        >
                          $2.7b of daily trading volume
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          Weighted Average Maturity
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                        >
                          5.09 years
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "0px",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          Credit Quality (S&P)
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                          mt="-3px"
                        >
                          0.91%{" "}
                          <span
                            style={{
                              margin: "0 3px",
                              fontSize: "21px",
                              color: "rgba(255, 255, 255, 0.6)",
                            }}
                          >
                            .
                          </span>{" "}
                          BBB
                        </Typography>
                      </Box>
                      <Box
                        sx={{ float: "right", width: "98px", height: "30px" }}
                      >
                        {/* <Typography color="white" fontSize="14px" fontWeight={"bold"} align="end" pb="0px" mt="-10px">
                          51.48% - BB
                        </Typography> */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pb: "0px",
                            mt: "-12px",
                          }}
                        >
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            51.48%{" "}
                            <span
                              style={{
                                margin: "0 3px",
                                fontSize: "21px",
                                color: "rgba(255, 255, 255, 0.6)",
                              }}
                            >
                              .
                            </span>
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                            mt="8px"
                          >
                            BB
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pb: "8px",
                            mt: "-12px",
                          }}
                        >
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            37.68%{" "}
                            <span
                              style={{
                                margin: "0 3px",
                                fontSize: "21px",
                                color: "rgba(255, 255, 255, 0.6)",
                              }}
                            >
                              .
                            </span>
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                            mt="8px"
                          >
                            B
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        color="rgba(255, 255, 255, 0.6)"
                        fontSize="14px"
                        fontWeight={"bold"}
                        align="right"
                        pb="8px"
                        mt="42px"
                        sx={{ textDecoration: "underline" }}
                      >
                        Show all 7 holdings
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "4px",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6)"
                          fontSize="14px"
                        >
                          Standard Deviation (Annualized)
                          <img
                            src={placeOrderQuestion}
                            alt="placeOrderQuestion"
                            style={{
                              position: "relative",
                              top: "7px",
                              width: "20px",
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                        <Typography
                          color="white"
                          fontSize="14px"
                          fontWeight={"bold"}
                        >
                          10.92%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default DealsBox;
