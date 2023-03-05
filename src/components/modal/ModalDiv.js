import React, { useState } from "react";
import "./Modal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Crosshair, Plus } from "react-feather";
function ModalDiv({showModal,setShowModal,refresher}) {
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  const [background,setBackground]=useState('#F9F5EB');
  const [foreground,setForeground]=useState("#fff");
  const [priority,setPriority]=useState('normal');

  const handleAdd=()=>{
    const savedData = JSON.parse(localStorage.getItem('myNotes')) || [];
    if(!title || !content)
    {
      return alert("Title and Content is required");
    }
    let newData={
      id:Date.now(),
      title,
      content,
      priority,
      background,
      foreground,
      date:new Date().toLocaleDateString(),
    }
    savedData.push(newData);
    localStorage.setItem('myNotes',JSON.stringify(savedData))
    setTitle('');
    setContent('');
    setPriority('normal');
    setShowModal(false);
    // window.location.reload();
    refresher();
  }
  const handleCancel = () =>{
    setTitle('');
    setContent('');
    setPriority('normal');
    setShowModal(false);
  }
   const handleColor = (bg,fg)=>{
    setBackground(bg);
    setForeground(fg);
   }
  return (
    <>
      <Modal show={showModal} onHide={()=>setShowModal(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="form-control mb-3" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <label>Priority</label>
          <select className="form-control mb-3 px-2 py-2"  value={priority} onChange={(e)=>setPriority(e.target.value)} >
            <option value="normal" >Normal</option>
            <option value="high" >High</option>
          </select>
          <textarea
            className="form-control"
            style={{ height: "180px" }}
            placeholder="Enter Notes..."
            value={content} onChange={(e)=>setContent(e.target.value)} 
          ></textarea>
          <br></br>
          {/* for theme selection */}
          <DropdownButton id="dropdown-basic-button" title="Select Theme">
            <Dropdown.Item href="#/action-1">
              <div className="d-flex" onClick={()=>handleColor('#B4E4FF','#DFFFD8')}>
                <div
                  className="circle mx-3"
                  style={{ backgroundColor: "#B4E4FF" }}
                ></div>
                <div
                  className="circle"
                  style={{ backgroundColor: "#DFFFD8" }}
                ></div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <div className="d-flex" onClick={()=>handleColor( "#F5E9CF","#BFDCE5")}>
                <div
                  className="circle mx-3"
                  style={{ backgroundColor: "#F5E9CF" }}
                ></div>
                <div
                  className="circle"
                  style={{ backgroundColor: "#BFDCE5" }}
                ></div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <div className="d-flex" onClick={()=>handleColor( "#EDDBC7","#F9F5E7")}>
                <div
                  className="circle mx-3"
                  style={{ backgroundColor: "#EDDBC7" }}
                ></div>
                <div
                  className="circle"
                  style={{ backgroundColor: "#F9F5E7" }}
                ></div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-4">
              <div className="d-flex" onClick={()=>handleColor( "#82AAE3","#BFEAF5")}>
                <div
                  className="circle mx-3"
                  style={{ backgroundColor: "#82AAE3" }}
                ></div>
                <div
                  className="circle"
                  style={{ backgroundColor: "#BFEAF5" }}
                ></div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-5">
              <div className="d-flex" onClick={()=>handleColor( "#439A97","#CBEDD5")}>
                <div
                  className="circle mx-3"
                  style={{ backgroundColor: "#439A97" }}
                ></div>
                <div
                  className="circle"
                  style={{ backgroundColor: "#CBEDD5" }}
                ></div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-5">
              <div className="d-flex" onClick={()=>handleColor( "#F1D3B3","#DBA39A")}>
                <div
                  className="circle mx-3"
                  style={{ backgroundColor: "#F1D3B3" }}
                ></div>
                <div
                  className="circle"
                  style={{ backgroundColor: "#DBA39A" }}
                ></div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-6">
              <div className="d-flex" onClick={()=>handleColor( "#A0C3D2", "#EAE0DA")}>
                <div
                  className="circle mx-3 shadow"
                  style={{ backgroundColor: "#A0C3D2" }}
                ></div>
                <div
                  className="circle"
                  style={{ backgroundColor: "#EAE0DA" }}
                ></div>
              Default</div>
            </Dropdown.Item>
          </DropdownButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel} >
           Cancel
          </Button>
          <Button variant="primary"  onClick={handleAdd} >
           <Plus/> Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDiv;
