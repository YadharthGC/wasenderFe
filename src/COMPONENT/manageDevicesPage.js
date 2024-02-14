import React, { useEffect, useState } from "react";
import "../SCSS/manageDevicesPage.scss";
import { countryCode } from "../countryCode";
import { useNavigate } from "react-router-dom";
import { linkNode } from "../nodelink";
import axios from "axios";
import { DeleteRounded } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import QrCodeIcon from "@mui/icons-material/QrCode";
import qrimg from "../images/qr.jpg";
import { useDispatch, useSelector } from "react-redux";
import { funSetDevice } from "../reactRedux/action";

export default function ManageDevicesPage() {
  const device = useSelector((state) => state.contactReducer.device);
  const [auth, setAuth] = useState(false);
  const [chance, setChance] = useState(false);
  const [showQr, setShowQr] = useState(true);
  const [qqq, setq] = useState("");
  const insID = "instance77445";
  const insTok = "gwab0rhjqpa8d539";
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      console.log(device);
      setAuth(device.authenthicate);
      if (auth || device.authenthicate) {
        console.log("hrl");
        handleMessageStatus();
      }
    } catch (err) {
      console.log(err);
    }
    //https://api.ultramsg.com/instance77445/instance/qr?token=gwab0rhjqpa8d539
  }, [auth]);

  const handleVerifyB = async () => {
    try {
      console.log(device);
      let dataObj = {
        ...device,
        instanceID: "instance77445",
        token: "gwab0rhjqpa8d539",
      };
      await axios.post(`${linkNode}/qrcode`, dataObj).then((res) => {
        setChance(true);
        let i = 0;
        let startFun = async () => {
          i++;
          if (i === 20) {
            clearInterval(startRun);
            setChance(false);
            //instance status
            handleInstanceStatus(dataObj);
            //
          }
        };
        let startRun = setInterval(startFun, 1000);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleVerify = async () => {
    let dataObj = {
      ...device,
      instanceID: "instance77445",
      token: "gwab0rhjqpa8d539",
    };
    handleInstanceStatus(dataObj);
  };

  const handleInstanceStatus = async (dataObj) => {
    try {
      console.log(dataObj);
      await axios.post(`${linkNode}/instance`, dataObj).then(async (res) => {
        console.log(res.data.message);
        if (
          res.data?.message?.status?.accountStatus?.status === "authenticated"
        ) {
          setAuth(true);

          dispatch(funSetDevice({ ...dataObj, authenthicate: true }));
          await handleInstanceChange(dataObj);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInstanceChange = async (dataObj) => {
    try {
      await axios
        .post(`${linkNode}/instancechange`, { dataObj, type: "status" })
        .then((res) => {
          console.log(res);
          setAuth(true);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleMessageStatus = async () => {
    try {
      console.log("messStat");
      await axios.post(`${linkNode}/instancedetails`, device).then((res) => {
        console.log(res.data.message.messages_statistics);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="manageDevicesPage">
      <div className="header">
        <div className="headerTitle">Manage Devices</div>
      </div>
      <div className="bodyA">
        <div className="manBox">
          <table className="manTable">
            <thead className="tabHead">
              <tr>
                <th className="thA">Auth Status</th>
                <th className="thB">Device ID</th>
                <th className="thC">Device Token</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tdA">
                  <div className="content">
                    {auth ? "Authenthicated" : "standBy"}
                  </div>
                </td>
                <td className="tdB">
                  <div className="content">##98765</div>
                </td>
                <td className="tdC">
                  <div className="content">1qa2fg4y67uji89k</div>
                </td>
                <td className="tdD">
                  <button className="rocketBtn delbtn">
                    <span className="rocketIcon">
                      <DeleteRounded id="rocketIcon" />
                    </span>
                    <span className="rocketTitle">Delete</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bodyB">
        {console.log(auth, "Auth", "CHance", chance)}
        {!auth && !chance ? (
          <div className="manB authFalse">
            <div className="manBDiv">
              <div className="firstText">
                Instance WhatsApp #77445 is not authorized and sent on standby
              </div>
              <div className="firstText">
                To authorize again, click 'Verify'
              </div>
              <div className="firstBtn">
                <div
                  class="submitInDiv"
                  onClick={() => {
                    handleVerify();
                  }}
                >
                  Verify
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {!auth && chance ? (
          <div className="manB">
            <div className="whatsAppText">
              <div className="textTitle">
                To send and receive Messages, authorize the instance
              </div>
              <div className="whatsappList">
                <ol>
                  <li>Open WhatsApp on your Mobile</li>
                  <li>
                    Tap
                    <span className="textIcons">
                      <MoreVertIcon />
                    </span>
                    --- Settings ---
                    <span className="textIcons">
                      <QrCodeIcon />
                    </span>
                    --- Scan QR
                  </li>
                  <li>Capture Code</li>
                </ol>
              </div>
            </div>
            <div className="qrcode">
              <img
                src="https://api.ultramsg.com/instance77445/instance/qr?token=gwab0rhjqpa8d539"
                //src={`https://api.ultramsg.com/${device.instanceID}/instance/qr?token=${device.token}`}
                //src={`https://api.ultramsg.com/${insID}/instance/qr?token=${insTok}`}
                alt="qrTag"
                className="qrTag"
              ></img>
            </div>
          </div>
        ) : (
          ""
        )}

        {auth ? (
          <div className="manB">
            true
            {/* <div className="whatsAppText">
              <div className="textTitle">
                To send and receive Messages, authorize the instance
              </div>
              <div className="whatsappList">
                <ol>
                  <li>Open WhatsApp on your Mobile</li>
                  <li>
                    Tap
                    <span className="textIcons">
                      <MoreVertIcon />
                    </span>
                    --- Settings ---
                    <span className="textIcons">
                      <QrCodeIcon />
                    </span>
                    --- Scan QR
                  </li>
                  <li>Capture Code</li>
                </ol>
              </div>
            </div>
            <div className="qrcode">
              <img src={qrimg} className="qrTag" alt="qrcode" />
            </div> */}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
