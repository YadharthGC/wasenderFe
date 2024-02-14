import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Button, Grid } from "@mui/material";
import { yourNos } from "../sample";
import SendIcon from "@mui/icons-material/Send";
import "../CSS/sendPage.scss";
import dayjs from "dayjs";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { linkNode } from "../nodelink";
import axios from "axios";

export default function SendPage() {
  const [numbers, setNumbers] = useState(yourNos);
  const options = [9080045933, 9876543210, 9123456780, 94433164699];

  useEffect(() => {
    try {
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSend = async () => {
    try {
      await axios.post(`${linkNode}/sendmsg`).then((res) => {
        console.log(res.data.masg);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sendPage">
      <div className="header">
        <div className="title">My Contacts</div>
        <div className="subPart">
          <div className="notifyDiv">
            <NotificationsActiveIcon id="notifyIcon" />
          </div>
          <div className="accountDiv">
            <AccountCircleIcon id="accountIcon" />
          </div>
          <div className="userName">DemoUser</div>
        </div>
      </div>
      <div className="bodyA">
        <Grid container xs={12}>
          <Grid item xs={3}>
            <div className="fromDiv">
              <div className="fromTitle">From</div>
              <div className="fromSelect">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo fromSelect"
                  options={options}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="toDiv">
              <div className="toTitle">to</div>
              <div className="toSelect">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo toSelect"
                  options={options}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="scheduleDiv">
              <div className="dayTitle">Date and Time</div>{" "}
              <div className="dateDiv">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    id="dateTimePick"
                    defaultValue={dayjs(new Date())}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="sendBtnDiv">
              <Button
                variant="contained"
                onClick={() => {
                  handleSend();
                }}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="bodyB">
        <Grid container>
          {/* <Grid item xs={2}>
            <div className="addTeps">
              <div className="mediaBtnDiv">
                <Button id="mediaBtnDiv" variant="contained">
                  Media
                </Button>
              </div>
              <div className="btnBtnDiv">
                <Button id="btnBtnDiv" variant="contained">
                  Button
                </Button>
              </div>
            </div>
          </Grid> */}
          send
          <Grid item xs={12}>
            <div className="msgsDiv">
              <div className="msgsTitle">Messages</div>
              <div className="msgsArea">
                <textarea id="textArea"></textarea>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
