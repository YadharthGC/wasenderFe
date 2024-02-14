import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { samDev } from "../sample";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { DeleteRounded } from "@mui/icons-material";
import "../CSS/devicesPage.scss";

export default function DevicesPage() {
  const [devices, setDevices] = useState(samDev);
  return (
    <div className="devicesPage">
      <div className="header">
        <div className="title">My Devices</div>
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
        <div className="totalDiv">
          <div className="partA">
            <div className="subPartA">5</div>
            <div className="subPartB">
              <PhoneAndroidIcon id="phoneIcon" />
            </div>
          </div>
          <div className="partB">Total Devices</div>
        </div>
        <div className="activeDiv">
          <div className="partA">
            <div className="subPartA">5</div>
            <div className="subPartB">
              <CheckCircleIcon id="activeIcon" />
            </div>
          </div>
          <div className="partB">Active Devices</div>
        </div>
        <div className="unactiveDiv">
          <div className="partA">
            <div className="subPartA">5</div>
            <div className="subPartB">
              <ErrorIcon id="inActiveIcon" />
            </div>
          </div>
          <div className="partB">Inactive Devices</div>
        </div>
      </div>
      <div className="bodyB">
        <div className="searchDiv">
          <input className="inputSearch" placeholder="search" />
        </div>
        <div className="tableDiv">
          <table className="tableDevices">
            <thead className="theadDev">
              <tr>
                <th className="thA">S.no.</th>
                <th className="thB">Device Name</th>
                <th className="thC">Number</th>
                <th className="thD">Devices</th>
                <th className="thE">Actions</th>
              </tr>
            </thead>
            <tbody className="tbodyDev">
              {devices.map((data, index) => {
                return (
                  <tr>
                    <td className="tdA">{index}</td>
                    <td className="tdB">{data.name}</td>
                    <td className="tdC">{data.number}</td>
                    <td className="tdD">
                      <span
                        className={
                          data.status === "active" ? "greenRound" : "redRound"
                        }
                      >
                        &#x2B24;
                      </span>
                      {data.status}
                    </td>
                    <td className="tdE">
                      <QrCodeScannerIcon id="scanIcon" />
                      <ModeEditIcon id="editIcon" />
                      <DeleteRounded id="deleteIcon" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
