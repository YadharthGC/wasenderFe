import {
  Autocomplete,
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../CSS/contactsPage.scss";
import { yourNos } from "../sample";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { CheckCircleOutline, DeleteRounded } from "@mui/icons-material";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import { samDev } from "../sample";
import Groups2Icon from "@mui/icons-material/Groups2";
import axios from "axios";
import { linkNode } from "../nodelink";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [show, setShow] = useState("contacts");
  const [modalOpen, setModalOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    p: 4,
    border: "solid 1px black",
  };
  const [contactName, setContactName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [contactGrp, setContactGrp] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    try {
      handleGetContacts();
      setStatus(false);
    } catch (err) {
      console.log(err);
    }
  }, [status]);

  const handleGetContacts = async () => {
    try {
      await axios.post(`${linkNode}/getcontacts`).then((res) => {
        console.log(res.data.msgArr);
        setContacts(res.data?.msgArr?.reverse());
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async () => {
    try {
      let dataObj = [
        {
          name: contactName,
          no: contactNo,
          grp: contactGrp,
        },
      ];
      await axios
        .post(`${linkNode}/setcontacts`, {
          dataObj,
        })
        .then((res) => {
          setStatus(true);
          setContactGrp([]);
          setContactName("");
          setContactNo("");
          setModalOpen(false);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (dataObj) => {
    try {
      await axios.post(`${linkNode}/delcontacts`, { dataObj }).then((res) => {
        console.log("deleted");
        setStatus(true);
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = (dataObj) => {
    try {
      setContactName(dataObj.name);
      setContactNo(dataObj.no);
      setContactGrp(dataObj.grp);
      setModalOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ContactsPage">
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
        <div className="btnsDiv">
          <div className="viewDiv">
            <button
              className="contactBtn"
              show={show}
              onClick={() => {
                setShow("contacts");
              }}
            >
              contacts
            </button>
            {/* <button
              className="groupBtn"
              show={show}
              onClick={() => {
                setShow("groups");
              }}
            >
              groups
            </button> */}
          </div>
          <div className="createDiv">
            <button
              className="createBtn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Create {show} &#x2B;
            </button>
          </div>
        </div>
        <div className="totalDiv">
          <div className="partA">
            <div className="subPartA">{contacts.length}</div>
            <div className="subPartB">
              {show === "contacts" ? (
                <RecentActorsIcon id="phoneIcon" />
              ) : (
                <Groups2Icon id="phoneIcon" />
              )}
            </div>
          </div>
          <div className="partB">Total {show}</div>
        </div>
      </div>
      <div className="bodyB">
        <div className="searchDiv">
          <input
            className="inputSearch"
            placeholder="search"
            value={searchUser}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchUser(e.target.value);
            }}
          />
        </div>
        <div className="tableDiv">
          {show === "contacts" ? (
            <table className="tableDevices">
              <thead className="theadDev">
                <tr>
                  <th className="thA">S.no.</th>
                  <th className="thB">Contact</th>
                  <th className="thC">Number</th>
                  {/* <th className="thD">Group</th> */}
                  <th className="thE">Actions</th>
                </tr>
              </thead>
              <tbody className="tbodyDev">
                {contacts.map((data, index) => {
                  if (
                    !searchUser ||
                    (searchUser &&
                      isNaN(searchUser) &&
                      data.name
                        .toLowerCase()
                        .includes(searchUser.toLowerCase())) ||
                    (searchUser &&
                      !isNaN(searchUser) &&
                      data.no.toString().includes(searchUser.toString()))
                  ) {
                    return (
                      <tr>
                        <td className="tdA">{index}</td>
                        <td className="tdB">{data.name}</td>
                        <td className="tdC">{data.no}</td>
                        {/* <td className="tdD">
                          {data?.grp?.length &&
                            data?.grp?.map((obj, indexs) => {
                              return `${obj}${
                                indexs === data.grp.length - 1 ? "" : ", "
                              }`;
                            })}
                        </td> */}
                        <td className="tdE">
                          <ModeEditIcon
                            id="editIcon"
                            onClick={() => {
                              handleEdit(data);
                            }}
                          />
                          <DeleteRounded
                            id="deleteIcon"
                            onClick={() => {
                              handleDelete(data);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          ) : (
            <table className="tableDevices">
              <thead className="theadDev">
                <tr>
                  <th className="thA">S.no.</th>
                  <th className="thB">Group Name</th>
                  <th className="thC">Contacts</th>
                  <th className="thE">Actions</th>
                </tr>
              </thead>
              <tbody className="tbodyDev">
                {contacts.map((data, index) => {
                  return (
                    <tr>
                      <td className="tdA">{index}</td>
                      <td className="tdB">{data.name}</td>
                      <td className="tdC">{data.number}</td>

                      <td className="tdE">
                        <ModeEditIcon id="editIcon" />
                        <DeleteRounded id="deleteIcon" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <Box style={style} id="createModalDiv">
          {show === "contacts" ? (
            <>
              <div className="createTitle">
                <span className="spanX">Add New Contact</span>
              </div>
              <div className="nameDiv">
                <span className="spanText">Full Name</span>
                <span className="spanInput">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={contactName}
                    onChange={(e) => {
                      setContactName(e.target.value);
                    }}
                  />
                </span>
              </div>
              <div className="titleDiv">
                <span className="spanText">Mobile no.</span>
                <span className="spanInput">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={contactNo}
                    onChange={(e) => {
                      setContactNo(e.target.value);
                    }}
                  />
                </span>
              </div>
              {/* <div className="grpDiv">
                <span className="spanText">Group</span>
                <span className="spanInput">
                  <Autocomplete
                    onChange={
                      (e, newMember) => setContactGrp(newMember) //return new member
                    }
                    sx={{ m: 1, width: 500 }}
                    multiple
                    id="combo-box-demo"
                    options={[
                      "9080045933",
                      "9443164699",
                      "9047092699",
                      "1234567890",
                      "9876543201",
                    ]}
                    getOptionLabel={(option) => option}
                    disableCloseOnSelect
                    renderInput={(params) => {
                      return <TextField {...params} variant="outlined" />;
                    }}
                  />
                </span>
              </div> */}
              <div className="finalCreateDiv">
                <Button
                  id="finalSubmit"
                  variant="contained"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Submit
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="createTitle">
                <span className="spanX">Create New Group</span>
              </div>
              <div className="nameDiv">
                <span className="spanText">Group Name</span>
                <span className="spanInput">
                  <TextField id="outlined-basic" variant="outlined" />
                </span>
              </div>
              {/* <div className="titleDiv">
                <span className="spanText">Mobile no.</span>
                <span className="spanInput">
                  <TextField id="outlined-basic" variant="outlined" />
                </span>
              </div> */}
              <div className="grpDiv">
                <span className="spanText">Add no.</span>
                <span className="spanInput">
                  <Autocomplete
                    sx={{ m: 1, width: 500 }}
                    multiple
                    id="combo-box-demo"
                    options={[
                      "9080045933",
                      "9443164699",
                      "9047092699",
                      "1234567890",
                      "9876543201",
                    ]}
                    getOptionLabel={(option) => option}
                    disableCloseOnSelect
                    renderInput={(params) => {
                      return <TextField {...params} variant="outlined" />;
                    }}
                  />
                </span>
              </div>
              <div className="finalCreateDiv">
                <Button id="finalSubmit" variant="contained">
                  Submit
                </Button>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
