import React, { useState } from "react";
import { Box, Typography, Grid, Button, Paper, Stack } from "@mui/material";

const steps = [
  {
    title: "Personalized Mentoring",
    description: "Counselling",
    status: "In Progress",
    image: "/student.svg",
    tag: "1",
  },
  {
    title: "Career Mapping",
    description: "Psychometric Test",
    status: "Not Taken",
    image: "/computer.svg",
    tag: "2",
  },
  {
    title: "Admission Service",
    description: "Profile Building",
    status: "Completed",
    image: "/setting.svg",
    tag: "3",
  },
  {
    title: "Post Enrollment Support",
    description: "",
    status: "",
    image: "/notebook.svg",
    tag: "4",
  },
];

const StudyAbroadJourney = () => {
  const [showDown, setShowDown] = useState(false);
  const [showDownDown, setShowDownDown] = useState(false);

  return (
    <Box
      sx={{ padding: "2rem", backgroundColor: "#f9f9f9", minHeight: "100vh" }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        ~Track Your Study Abroad Journey~
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: "1rem",
                textAlign: "center",
                backgroundColor: "#e7f4f7",
                position: "relative",
              }}
            >
              {/* Add image here */}
              <img
                src={step.image}
                alt={step.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />

              {/* Circular tag in top-right corner */}
              <Paper
                sx={{
                  position: "absolute",
                  top: "-3%",
                  right: "-8%",
                  width: "30px",
                  height: "30px",
                  color: "#00999E",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: "bolder",
                }}
              >
                {step.tag}
              </Paper>

              <Typography variant="h6" color="primary" gutterBottom>
                {step.title}
              </Typography>
            </Paper>
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 3,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#00999E",
                }}
                size="small"
                onClick={() => setShowDown(true)}
              >
                View More
              </Button>
            </Stack>
          </Grid>
        ))}
        {showDown && (
          <>
            <Paper
              sx={{
                width: "98%",
                height: "226px",
                top: "583px",
                padding: "54px 0px 0px 0px",
                borderRadius: "10px",
                border: "1px solid 0px 0px 0px",
                justify: "space-between",
                mt: "50px",
                marginLeft: 3.5,
              }}
            >
              <Grid
                container
                spacing={4}
                justifyContent="space-around"
                alignItems="center"
              >
                {/* Counselling Box */}
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "180px",
                      height: "125px",
                      padding: "16px 0px 0px 0px",
                      gap: "10px",
                      borderRadius: "12px",
                      backgroundColor: "#00999E",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    onClick={() => setShowDownDown(true)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "147px",
                        height: "30px",
                      }}
                    >
                      <Typography>Counselling</Typography>
                      <Box
                        sx={{
                          bgcolor: "#B1FCFF",
                          width: "120px",
                          borderRadius: 5,
                          display: "flex",
                          direction: "row",
                          justifyContent: "space-around",
                          nt: 1,
                          marginLeft: 2,
                        }}
                      >
                        <Box
                          sx={{
                            height: "12px",
                            width: "12px",
                            border: "4px solid #FFE8E8",
                            borderRadius: "50%",
                            backgroundColor: "#F67A07",
                          }}
                        />
                        <Box
                          sx={{
                            color: "black",
                            marginRight: 1,
                          }}
                        >
                          {" In Progress "}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      ml: 3,
                      fontWeigth: "bolder",
                      fontSize: 21,
                      color: "#00999E",
                    }}
                  >
                    {" "}
                    {">"}{" "}
                  </Typography>
                </Grid>

                {/* Psychometric Test Box */}
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "180px",
                      height: "125px",
                      padding: "16px 0px 0px 0px",
                      gap: "10px",
                      borderRadius: "12px",
                      backgroundColor: "#00999E",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    onClick={() => setShowDownDown(true)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "147px",
                        height: "30px",
                      }}
                    >
                      <Typography>Psychometric Test</Typography>
                      <Box
                        sx={{
                          bgcolor: "#B1FCFF",
                          width: "120px",
                          borderRadius: 5,
                          display: "flex",
                          direction: "row",
                          justifyContent: "space-around",
                          nt: 1,
                          marginLeft: 2,
                        }}
                      >
                        <Box
                          sx={{
                            height: "12px",
                            width: "12px",
                            border: "4px solid #828282",
                            borderRadius: "50%",
                            backgroundColor: "#1C1C1C",
                          }}
                        />
                        <Box
                          sx={{
                            color: "black",
                            marginRight: 1,
                          }}
                        >
                          {" Not Token "}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      ml: 3,
                      fontWeigth: "bolder",
                      fontSize: 21,
                      color: "#00999E",
                    }}
                  >
                    {" "}
                    {">"}{" "}
                  </Typography>
                </Grid>

                {/* Profile Building Box */}
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "180px",
                      height: "125px",
                      padding: "16px 0px 0px 0px",
                      gap: "10px",
                      borderRadius: "12px",
                      backgroundColor: "#00999E",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    onClick={() => setShowDownDown(true)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "147px",
                        height: "30px",
                      }}
                    >
                      <Typography>Profile Building</Typography>
                      <Box
                        sx={{
                          bgcolor: "#B1FCFF",
                          width: "120px",
                          borderRadius: 5,
                          display: "flex",
                          direction: "row",
                          justifyContent: "space-around",
                          nt: 1,
                          marginLeft: 2,
                        }}
                      >
                        <Box
                          sx={{
                            height: "12px",
                            width: "12px",
                            border: "4px solid #20CF10",
                            borderRadius: "50%",
                            backgroundColor: "white",
                          }}
                        />
                        <Box
                          sx={{
                            color: "black",
                            marginRight: 1,
                          }}
                        >
                          {" Completed "}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      ml: 3,
                      fontWeigth: "bolder",
                      fontSize: 21,
                      color: "#00999E",
                    }}
                  >
                    {" "}
                    {">"}{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </>
        )}
      </Grid>
      {showDownDown && (
        <>
          <Paper
            sx={{
              marginTop: "20px",
              height: "505px",
              display: "flex",
              direction: "row",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                width: "246.48px",
                height: "128px",

                opacity: "0px",
                display: "flex",
                direction: "row",
              }}
            >
              <Box
                sx={{
                  width: "208px",
                  height: "128px",
                  padding: "12px",
                  gap: "12px",
                  borderRadius: "20px",
                  opacity: "0px",
                  bgcolor: "#00999E",
                  marginTop: "157.5px",
                  marginLeft: "50px",
                }}
              >
                Counselling
              </Box>
              <Box sx={{}}></Box>
              <Box
                sx={{
                  marginTop: "220.5px",
                  marginLeft: "50px",
                }}
              >
                {">"}
              </Box>
            </Box>
            <Box
              sx={{
                width: "662px",
                height: "439px",
                padding: "32px 32.04px 13px 33.96px",
                borderRadius: "10px",
                border: "1px",
                opacity: "0px",
                backgroundColor: "black",
                margin: "12px",
                marginLeft: "34px",
                backgroundColor: "#E2FEFF",
              }}
            >
              <Typography variant="h4" align="center" gutterBottom>
                Counselling
              </Typography>
              <Typography variant="subtitle2" align="center" gutterBottom>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur.
              </Typography>
              <Box
                sx={{
                  width: "596px",
                  height: "292px",
                  borderRadius: "10px",
                  border: "1px",
                  opacity: "0px",
                  bgcolor: "#FFFFFF",
                  mt: 6,
                  marginLeft: "28px",
                }}
              >
                <Typography variant="div">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      marginTop: "20px",
                    }}
                  >
                    <Typography>YES</Typography>
                    <Typography>R</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                      p: 1,
                    }}
                  >
                    <Typography>DATA</Typography>
                    <Typography>23 AUGUST 2024</Typography>
                    <Typography>Time</Typography>
                    <Typography>10.00AM-12.00AM</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                      p: 1,
                    }}
                  >
                    <Typography>Counselor name</Typography>
                    <Typography>Mr. Abhishek Verma</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                      p: 1,
                    }}
                  >
                    <Typography>Counselling Form</Typography>
                    <Button variant="contained">Download</Button>
                  </Box>

                  <Typography
                    variant="div"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      p: 1,
                    }}
                  >
                    <Typography>Counselling schedule</Typography>
                    <Button variant="contained">schedule</Button>
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </>
      )}
      <Box
        sx={{
          width: "662px",
          height: "439px",
          padding: "32px",
          borderRadius: "10px",
          border: "1px solid #ccc", // Ensure border is visible
          backgroundColor: "#E2FEFF",
          margin: "12px auto", // Center horizontally in the parent container
          display: "flex", // Enable flexbox
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
     <Box
  sx={{
    width: "570px",
    height: "265px",
    padding: "16px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center", // Center-align text content
    gap: "8px", // Space between the elements
  }}
>
  <Typography
    variant="h1"
    sx={{
      fontSize: "32px", // Adjust size as needed
      fontWeight: "bold",
      color: "#FF0000", // Red color for "WRONG"
    }}
  >
    WRONG
  </Typography>
  <Typography
    variant="h4"
    sx={{
      fontSize: "20px", // Adjust size as needed
      fontWeight: "bold",
      color: "#333", // Grey or black for the secondary message
    }}
  >
    Sorry! You are not Eligible
  </Typography>
  <Typography
    variant="body2"
    sx={{
      fontSize: "14px",
      color: "#666", // Lighter text color for the description
    }}
  >
    Lorem ipsum dolor sit amet consectetur. Leo morbi risus morbi ullamcorper
    volutpat amet lectus vulputate pharetra. Lectus sit ultricies cras curabitur.
  </Typography>
</Box>

      </Box>
    </Box>
  );
};

export default StudyAbroadJourney;
