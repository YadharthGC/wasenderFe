import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { createTheme } from "@mui/material/styles";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleSendTwoToneIcon from "@mui/icons-material/ScheduleSendTwoTone";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DrawIcon from "@mui/icons-material/Draw";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import DevicesFoldIcon from "@mui/icons-material/DevicesFold";

import { CircularProgress, Divider, Modal } from "@mui/material";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SendIcon from "@mui/icons-material/Send";
import ReplyIcon from "@mui/icons-material/Reply";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactsPage from "./contactsPage";
import SendPage from "./sendPage";
import DevicesPage from "./devicesPage";
import "../CSS/fileArea.scss";

export default function FileArea() {
  const theme = createTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
    } catch (err) {
      console.log(err);
    }
  });

  const StyledDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(() => ({
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
  }));

  return (
    <Box id="fileArea" sx={{ display: "flex" }}>
      <StyledDrawer id="leftContentComponent" variant="permanent" open={open}>
        <List sx={{ height: "80%" }}>
          <ListItem
            onClick={() => {
              // setComponent("dashboard");
            }}
            key={"WhatsappIcon"}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
              onClick={() => {
                // navigate("dashboard");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <WhatsAppIcon id="dashBoardIcon" />
              </ListItemIcon>
              <ListItemText
                id="dashBoardText"
                primary={"WhatsappIcon"}
                sx={{ opacity: open ? 1 : 0, color: "black", fontSize: "30px" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            onClick={() => {}}
            key={"DashBoard"}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
              onClick={() => {
                navigate("dashboard");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <DashboardIcon id="dashBoardIcon" />
              </ListItemIcon>
              <ListItemText
                id="dashBoardText"
                primary={"DashBoard"}
                sx={{ opacity: open ? 1 : 0, color: "black", fontSize: "30px" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            onClick={() => {
              // setComponent("dashboard");
            }}
            key={"devices"}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
              onClick={() => {
                navigate("./devices");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <DevicesFoldIcon id="dashBoardIcon" />
              </ListItemIcon>
              <ListItemText
                id="dashBoardText"
                primary={"Devices"}
                sx={{ opacity: open ? 1 : 0, color: "black", fontSize: "30px" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Contacts"} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
              onClick={() => {
                navigate("./contacts");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <PeopleAltIcon id="calendarIcon" />
              </ListItemIcon>
              <ListItemText
                id="calendarText"
                primary={"Contacts"}
                sx={{ opacity: open ? 1 : 0, color: "black" }}
              />
            </ListItemButton>
          </ListItem>
          {/* <ListItem
            onClick={() => {
              navigate("people");
            }}
            key={"Templates"}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <DrawIcon id="peopleIcon" />
              </ListItemIcon>
              <ListItemText
                id="peopleText"
                primary={"Templates"}
                sx={{ opacity: open ? 1 : 0, color: "black" }}
              />
            </ListItemButton>
          </ListItem> */}
          <ListItem
            onClick={() => {
              navigate("./send");
            }}
            key={"Send"}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <SendIcon id="schedule" />
              </ListItemIcon>
              <ListItemText
                id="peopleText"
                primary={"Send"}
                sx={{ opacity: open ? 1 : 0, color: "black" }}
              />
            </ListItemButton>
          </ListItem>
          {/* <ListItem
            onClick={() => {
              navigate("crowd");
            }}
            key={"Reply"}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <ReplyIcon />
              </ListItemIcon>
              <ListItemText
                id="peopleText"
                primary={"Reply"}
                sx={{ opacity: open ? 1 : 0, color: "black" }}
              />
            </ListItemButton>
          </ListItem> */}
        </List>
        <Divider />
        <List>
          <ListItem key={"Profile"} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
              onClick={() => {
                window.localStorage.removeItem("admin");
                window.localStorage.removeItem("adminID");
                navigate("/");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <AccountCircleIcon id="logoutIcon" />
              </ListItemIcon>
              <ListItemText
                id="dashBoardText"
                primary={"Profile"}
                sx={{ opacity: open ? 1 : 0, color: "black", fontSize: "30px" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Logout"} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
              onClick={() => {
                window.localStorage.removeItem("admin");
                window.localStorage.removeItem("adminID");
                navigate("/");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <ExitToAppIcon id="logoutIcon" />
              </ListItemIcon>
              <ListItemText
                id="dashBoardText"
                primary={"Logout"}
                sx={{ opacity: open ? 1 : 0, color: "black", fontSize: "30px" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </StyledDrawer>
      <Box
        id="rightContent"
        component="main"
        sx={{
          flexGrow: 2,
          height: "100vh",
        }}
      >
        <Typography paragraph sx={{ fontFamily: "Nunito Sans, sans-serif" }}>
          {/* <ContactsPage /> */}
          {/*  */}
          <Routes>
            <Route path="/devices" element={<DevicesPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/send" element={<SendPage />} />
          </Routes>
        </Typography>
      </Box>
    </Box>
  );
}
