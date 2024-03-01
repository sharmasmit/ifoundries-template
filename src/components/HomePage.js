import React from "react";
import LeftSideMenu from "./LeftSideMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowLeft,
  faArrowRight,
  faCircleUp,
} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <>
      <div className="homePage">
        <LeftSideMenu />
        <div className="home-box">
          <div className="small-box">
            <div
              className="smallBox-child"
              style={{ borderRight: "1px solid #CCCCCC" }}
            >
              <h6>Total Number Of Projects</h6>
              <h1>100</h1>
            </div>
            <div
              className="smallBox-child"
              style={{ borderRight: "1px solid #CCCCCC" }}
            >
              <h6>Upcoming Project Renewals</h6>
              <h1>5</h1>
            </div>
            <div
              className="smallBox-child"
              style={{ borderRight: "1px solid #CCCCCC" }}
            >
              <h6>Total Project Status</h6>
              <h5 style={{ marginTop: "1.25rem" }}>
                Overdue <b>0</b>
              </h5>
              <h5>
                Design Phase <b>39</b>
              </h5>
              <h5>
                Closed <b>22</b>
              </h5>
            </div>
            <div className="smallBox-child">
              <h6>Projects Allocated</h6>
              <h5 style={{ marginTop: "1.25rem" }}>
                Jovie <b>32</b>
              </h5>
              <h5>
                Zahid <b>31</b>
              </h5>
              <h5>
                Han Feng <b>24</b>
              </h5>
            </div>
          </div>

          <div className="large-box">
            <div className="crud-btn-box">
              <div className="input-icon">
                <input type="text" placeholder="Search" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
              </div>
              <div className="crud-btns">
                <button type="submit">Add</button>
                <button type="submit" className="delBtn">
                  Delete
                </button>
                <button type="submit">Filter</button>
              </div>
            </div>

            <div className="table-head">
              <table>
                <thead>
                  <tr>
                    <th>
                      <select>
                        <option>Name</option>
                      </select>
                    </th>
                    <th>Project Manager</th>
                    <th>Dev. Team</th>
                    <th>Dev. Name</th>
                    <th>Status</th>
                    <th>Progress [%]</th>
                    <th>Project Type</th>
                    <th>Sales person</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <label className="label-container">
                        <input type="checkbox" id="option-1" />
                        <span className="checkMark"></span>
                      </label>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <label className="label-container">
                        <input type="checkbox" id="option-1" />
                        <span className="checkMark"></span>
                      </label>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <label className="label-container">
                        <input type="checkbox" id="option-1" />
                        <span className="checkMark"></span>
                      </label>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <label className="label-container">
                        <input type="checkbox" id="option-1" />
                        <span className="checkMark"></span>
                      </label>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <label className="label-container">
                        <input type="checkbox" id="option-1" />
                        <span className="checkMark"></span>
                      </label>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <label className="label-container">
                        <input type="checkbox" id="option-1" />
                        <span className="checkMark"></span>
                      </label>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <label className="label-container">
                        <input type="checkbox" id="option-1" />
                        <span className="checkMark"></span>
                      </label>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <label className="label-container">
                        <input type="checkbox" id="option-1" />
                        <span className="checkMark"></span>
                      </label>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <label className="label-container">
                        <input type="checkbox" id="option-1" />
                        <span className="checkMark"></span>
                      </label>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <label className="label-container">
                        <input type="checkbox" id="option-1" />
                        <span className="checkMark"></span>
                      </label>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="entries-next">
            <div className="entries">
              <div className="selectBox">
                <button type="submit" id="dropdownBTN">
                  25
                </button>
              </div>
              <h5 style={{ marginLeft: "0.938rem" }}>1-25 of 100</h5>
            </div>

            <div className="next-prev">
              <button
                type="submit"
                className="prev"
                disabled
                style={{ backgroundColor: "#CCCCCC" }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button type="submit" className="activeBtn active">
                1
              </button>
              <button type="submit" className="activeBtn">
                2
              </button>
              <button type="submit" className="activeBtn">
                3
              </button>
              <button
                type="submit"
                className="next"
                style={{ marginRight: "0" }}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <FontAwesomeIcon icon={faCircleUp} className="upArrow-icon" />
        </div>
      </div>
    </>
  );
}
export default HomePage;
