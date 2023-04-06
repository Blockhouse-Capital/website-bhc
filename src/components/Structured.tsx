import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";

// component
import DASHBOARDHEADER_SIDEBAR from "./liquidityComponent/dashboardHeder_Sidebar";
import DepositBox from "./DepositBox";

// Images
import placeOrderArrowUp from "../Images/placeOrder/placeOrderArrowUp.png";
import placeOrderQuestion from "../Images/placeOrder/placeOrderQuestion.png";
import singaporIcon from "../Images/structured/singapore.png";
import { HomeHR } from "./landingPageComponents/CustomComponents";

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

        <DASHBOARDHEADER_SIDEBAR />

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
                      alignItems: "center",
                      borderRadius: "12px",
                      border: `1px solid rgba(255, 255, 255, 0.12)`,
                      background: "#23252F",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "12px 16px",
                        borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
                        height: "108px",
                      }}
                    >
                      <Box sx={{ marginBlock: "auto" }}>
                        <Typography
                          color="white"
                          sx={{
                            fontSize: "36px",
                            fontWeight: "700",
                            fontFamily: "open sans",
                            marginTop: "-5px",
                          }}
                        >
                          SGB-ETF
                        </Typography>
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
                          Sovereign Bond
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
                      <Box>
                        <img
                          src={singaporIcon}
                          alt="singaporIcon"
                          style={{ marginLeft: "-15px" }}
                          width="46px"
                          height="46px"
                        />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                        gap: "15px",
                        padding: "12px 16px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          color="rgba(255, 255, 255, 0.6);"
                          fontSize="14px"
                        >
                          Current Deposits
                        </Typography>
                        <Typography
                          color="white"
                          fontWeight="600"
                          fontSize="14px"
                        >
                          5,941.2 ETH
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          "& .MuiLinearProgress-root": {
                            borderRadius: "2px !important",
                            background: "rgba(9, 13, 20, 0.48)",
                            height: "6px",
                          },
                          "& .MuiLinearProgress-bar1Determinate": {
                            borderRadius: "2px !important",
                            background: "white",
                          },
                        }}
                      >
                        <LinearProgress variant="determinate" value={50} />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          pb: "6px",
                        }}
                      >
                        <Typography
                          fontSize="14px"
                          color="rgba(255, 255, 255, 0.6)"
                        >
                          Max Capacity
                        </Typography>
                        <Typography
                          color="white"
                          fontWeight="600"
                          fontSize="14px"
                        >
                          20k ETH
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <DepositBox />
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      border: `1px solid rgba(255, 255, 255, 0.12)`,
                      background:
                        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                      marginTop: "-130px",
                    }}
                  >
                    <Typography
                      component="h1"
                      variant="h6"
                      padding={"24px"}
                      color="white"
                      fontSize={"17px"}
                      noWrap
                    >
                      <b>It is okay that it is repeated</b>
                    </Typography>
                    <Typography
                      variant="body1"
                      color="rgba(255, 255, 255, 0.6)"
                      padding={"24px"}
                      mt="-40px"
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
                      <br />
                      <br />
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English
                    </Typography>
                    <hr
                      style={{
                        border: "none",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      border: `1px solid rgba(255, 255, 255, 0.12)`,
                      background:
                        "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                    }}
                  >
                    <Box>
                      <Box padding={"22px 24px 0px 24px"}>
                          <Typography
                            color="white"
                            fontWeight="600"
                            fontSize="16px"
                            mb={"12px"}
                            sx={{textDecoration: 'underline', cursor: 'pointer'}}
                          >
                            ETF Details
                          </Typography>
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
                      </Box>

                      <Box padding={"0px 24px 22px 24px"}>
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
                            Price
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            SGD 145.69
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
                            NAV
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                            marginLeft={"24px"}
                          >
                            03/31/23
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            SGD 145.42
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
                            INAV
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            N.A.
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
                            Fund Percent Preminum
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            N.A.
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
                            52 WK H
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            03/24/23
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            SGD 146.58
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
                            52 WK L
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            09/29/22
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            SGD 136.45
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pb: "4px",
                          }}
                        >
                          <Typography color="white" fontSize="14px">
                            Options
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            No
                          </Typography>
                        </Box>
                      </Box>
                      <HomeHR />

                      <Typography
                        color="white"
                        fontSize="16px"
                        sx={{
                          marginLeft: "-2px",
                          backgroundColor: "#202432",
                          p: "3px 7px 3px 10px",
                          m: "10px 7px",
                        }}
                      >
                        <b>Trading Data</b>
                      </Typography>
                      <Box padding={"0px 24px 22px 24px"}>
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
                            Bid Ask Spread
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            N.A.
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
                            90D Avg Agg Vol
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            1.0K
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
                            Implied Liquidity
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            N.A.
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
                            Market Cap
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            SGD 120.41M
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
                            Shares Out
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            826.5K
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
                            Total Assets
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            SGD 120.19M
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        color="white"
                        fontSize="16px"
                        sx={{
                          marginLeft: "-2px",
                          backgroundColor: "#202432",
                          p: "3px 7px 3px 10px",
                          m: "-10px 7px 10px 7px",
                        }}
                      >
                        <b>@ Comparative Returns | COMP {">>"}</b>
                      </Typography>
                      <HomeHR />
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            padding={"12px 8px"}
                            sx={{
                              pt: "20px",
                              width: "100%",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "15px",
                              }}
                            >
                              <Box sx={{ width: "100%", mt: "-25px" }}>
                                <Box
                                  sx={{
                                    display: "flex",
                                  }}
                                >
                                  <Typography
                                    color="white"
                                    fontSize="16px"
                                    sx={{
                                      marginLeft: "-2px",
                                      backgroundColor: "#202432",
                                      p: "3px 7px 3px 7px",
                                      width: "50%",
                                    }}
                                  >
                                    <b>Rtn %</b>
                                  </Typography>
                                  <Box
                                    sx={{
                                      marginLeft: "-2px",
                                      backgroundColor: "#202432",
                                      width: "25%",
                                      ml: "6px",
                                      pt: "3px",
                                      pr: "8px",
                                    }}
                                  >
                                    <Typography
                                      color="white"
                                      fontSize="16px"
                                      align="right"
                                    >
                                      <b>KV4</b>
                                    </Typography>
                                  </Box>
                                  <Box
                                    sx={{
                                      marginLeft: "-2px",
                                      backgroundColor: "#202432",
                                      width: "25%",
                                      ml: "6px",
                                      pt: "3px",
                                      pr: "8px",
                                    }}
                                  >
                                    <Typography
                                      color="white"
                                      fontSize="16px"
                                      align="right"
                                    >
                                      <b>CFIISGL</b>
                                    </Typography>
                                  </Box>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pr: "8px",
                                    pl: "6px",
                                    pt: "5px",
                                    textAlign: "right",
                                  }}
                                >
                                  <Typography
                                    color="rgba(255, 255, 255, 0.6)"
                                    fontSize="16px"
                                    sx={{ width: "50%" }}
                                    align="left"
                                  >
                                    1 Month
                                  </Typography>
                                  <Typography
                                    color="#3fff4c"
                                    fontSize="16px"
                                    sx={{ width: "25%" }}
                                    fontWeight={"bold"}
                                  >
                                    3.99%
                                  </Typography>
                                  <Typography
                                    color="#3fff4c"
                                    fontSize="16px"
                                    sx={{ width: "25%" }}
                                    fontWeight={"bold"}
                                  >
                                    3.37%
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pr: "8px",
                                    pl: "6px",
                                    pt: "5px",
                                    textAlign: "right",
                                  }}
                                >
                                  <Typography
                                    color="rgba(255, 255, 255, 0.6)"
                                    fontSize="16px"
                                    sx={{ width: "50%" }}
                                    align="left"
                                  >
                                    3 Month
                                  </Typography>
                                  <Typography
                                    color="#3fff4c"
                                    fontSize="16px"
                                    sx={{ width: "25%" }}
                                    fontWeight={"bold"}
                                  >
                                    1.33%
                                  </Typography>
                                  <Typography
                                    color="#3fff4c"
                                    fontSize="16px"
                                    sx={{ width: "25%" }}
                                    fontWeight={"bold"}
                                  >
                                    0.99%
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pr: "8px",
                                    pl: "6px",
                                    pt: "5px",
                                    textAlign: "right",
                                  }}
                                >
                                  <Typography
                                    color="rgba(255, 255, 255, 0.6)"
                                    fontSize="16px"
                                    sx={{ width: "50%" }}
                                    align="left"
                                  >
                                    YTD
                                  </Typography>
                                  <Typography
                                    color="#3fff4c"
                                    fontSize="16px"
                                    sx={{ width: "25%" }}
                                    fontWeight={"bold"}
                                  >
                                    1.24%
                                  </Typography>
                                  <Typography
                                    color="#3fff4c"
                                    fontSize="16px"
                                    sx={{ width: "25%" }}
                                    fontWeight={"bold"}
                                  >
                                    0.9%
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pr: "8px",
                                    pl: "6px",
                                    pt: "5px",
                                    textAlign: "right",
                                  }}
                                >
                                  <Typography
                                    color="rgba(255, 255, 255, 0.6)"
                                    fontSize="16px"
                                    sx={{ width: "50%" }}
                                    align="left"
                                  >
                                    1 Year
                                  </Typography>
                                  <Typography
                                    color="#3fff4c"
                                    fontSize="16px"
                                    sx={{ width: "25%" }}
                                    fontWeight={"bold"}
                                  >
                                    0.63%
                                  </Typography>
                                  <Typography
                                    color="#3fff4c"
                                    fontSize="16px"
                                    sx={{ width: "25%" }}
                                    fontWeight={"bold"}
                                  >
                                    0.38%
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pr: "8px",
                                    pl: "6px",
                                    pt: "5px",
                                    textAlign: "right",
                                  }}
                                >
                                  <Typography
                                    color="rgba(255, 255, 255, 0.6)"
                                    fontSize="16px"
                                    sx={{ width: "50%" }}
                                    align="left"
                                  >
                                    3 Year
                                  </Typography>
                                  <Typography
                                    color="#f85c5c"
                                    fontSize="16px"
                                    sx={{ width: "25%" }}
                                    fontWeight={"bold"}
                                  >
                                    -2.37%
                                  </Typography>
                                  <Typography
                                    color="#f85c5c"
                                    fontSize="16px"
                                    sx={{ width: "25%" }}
                                    fontWeight={"bold"}
                                  >
                                    -1.74%
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pr: "8px",
                                    pl: "6px",
                                    pt: "5px",
                                    textAlign: "right",
                                  }}
                                >
                                  <Typography
                                    color="rgba(255, 255, 255, 0.6)"
                                    fontSize="16px"
                                    sx={{ width: "50%" }}
                                    align="left"
                                  >
                                    5 Year
                                  </Typography>
                                  <Typography
                                    color="#3fff4c"
                                    fontSize="16px"
                                    sx={{ width: "25%" }}
                                    fontWeight={"bold"}
                                  >
                                    1.11%
                                  </Typography>
                                  <Typography
                                    color="#3fff4c"
                                    fontSize="16px"
                                    sx={{ width: "25%" }}
                                    fontWeight={"bold"}
                                  >
                                    1.31%
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <HomeHR />
                      <Box
                        sx={{
                          marginLeft: "-2px",
                          backgroundColor: "#202432",
                          p: "3px 7px 3px 10px",
                          m: "10px 7px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography color="white" fontSize="16px">
                          <b>Top Fund Hlds | MHD {">>"}</b>
                        </Typography>
                        <Typography color="white" fontSize="16px">
                          <b>Net Fund</b>
                        </Typography>
                      </Box>
                      <Box padding={"0px 24px 22px 24px"}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pb: "4px",
                          }}
                        >
                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                          >
                            SIGB 3 09/01/24
                          </Typography>
                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                          >
                            8.412%
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
                            fontSize="16px"
                          >
                            SIGB 3 1/2 03/01/27
                          </Typography>
                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                          >
                            8.100%
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
                            fontSize="16px"
                          >
                            SIGB 2 7/8 09/01/30
                          </Typography>
                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                          >
                            7.161%
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
                            fontSize="16px"
                          >
                            SIGB 2 1/4 08/01/36
                          </Typography>
                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                          >
                            6.458%
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
                            fontSize="16px"
                          >
                            SIGB 2 1/8 06/01/26
                          </Typography>
                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                          >
                            6.293%
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
                            fontSize="16px"
                          >
                            SIGB 2 3/8 06/01/25
                          </Typography>
                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                          >
                            6.289%
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
                            fontSize="16px"
                          >
                            SIGB 2 7/8 07/01/29
                          </Typography>
                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                          >
                            5.689%
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
                            fontSize="16px"
                          >
                            SIGB 2 3/4 03/01/46
                          </Typography>
                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                          >
                            5.665%
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
                            fontSize="16px"
                          >
                            SIGB 3 3/8 09/01/33
                          </Typography>
                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                          >
                            5.407%
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
                            fontSize="16px"
                          >
                            SIGB 2 3/4 04/01/42
                          </Typography>
                          <Typography
                            color="rgba(255, 255, 255, 0.6)"
                            fontSize="16px"
                          >
                            4.806%
                          </Typography>
                        </Box>
                      </Box>
                      <HomeHR />

                      <Typography
                        color="white"
                        fontSize="16px"
                        sx={{
                          marginLeft: "-2px",
                          backgroundColor: "#202432",
                          p: "3px 7px 3px 10px",
                          m: "10px 7px",
                        }}
                      >
                        <b>Holdings Statistics</b>
                      </Typography>
                      <Box padding={"0px 24px 22px 24px"}>
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
                            YAS Modified Duration
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            8.037
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
                            OAS Effective Duration
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            8.12
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
                            OAS Duration Cpverage Ratio
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            1.000
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
                            Rebalancing Frequency
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            Monthly
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
                            Replication Strategy
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            Optimised
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
                            Fund Holdings As Of Date
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            03/31/23
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
                            Fund Number Of Holdings
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            22
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
                            NAV Pricing Methodology
                          </Typography>
                          <Typography
                            color="white"
                            fontSize="14px"
                            fontWeight={"bold"}
                          >
                            Primary Market Close
                          </Typography>
                        </Box>
                      </Box>
                      {/* 
                      <Box>
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
                        </Typography> /}
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
                      </Box> */}
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
