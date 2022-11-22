import React, { useState } from "react";

// Tableview import form MaterialUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { border, borders } from '@mui/system';

// images import
import imgQC from '../../images/qualified-candidates.svg';
import chart from '../../images/chart.svg';
import more from '../../images/more-2.svg';
import profile from '../../images/profile-2user.svg';
import arrowDown from '../../images/arrow-square-down.svg';

import './InternshipList.css';

export default function InternshipList() {

  // mock data to render on screen
  const [mockData, setMockData] = useState([
    {
      name: "Product Design GVI",
      description: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: "120",
      enrolled: "20,000"
    },
    {
      name: "Product Design GVI",
      description: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: "120",
      enrolled: "20,000"
    },
    {
      name: "Product Design GVI",
      description: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: "120",
      enrolled: "20,000"
    },
    {
      name: "Product Design GVI",
      description: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: "120",
      enrolled: "20,000"
    },
    {
      name: "Product Design GVI",
      description: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: "120",
      enrolled: "20,000"
    },
    {
      name: "Product Design GVI",
      description: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: "120",
      enrolled: "20,000"
    },
    {
      name: "Product Design GVI",
      description: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: "120",
      enrolled: "20,000"
    },
    {
      name: "Product Design GVI",
      description: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: "120",
      enrolled: "20,000"
    },
    {
      name: "Product Design GVI",
      description: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: "120",
      enrolled: "20,000"
    }
  ]);


  return (
    <TableContainer sx={{maxHeight: '450px'}}>
      <Table 
        sx={{ minWidth: 650, backgroundColor: '#fff', borderRadius: '20px'}} 
        aria-label="internship-table"
        stickyHeader
      >
        <TableHead style={{}}>
          <TableRow sx={{}}>
            <TableCell
              sx= {{
                backgroundColor: '#f4f5f9', 
                borderTopLeftRadius: '20px',
              }}
              className="internship-title-header"
            >
              <p>Internship Title <img src={arrowDown} alt=""/></p> 
            </TableCell>
            <TableCell
              className="internship-completion-header"
              align="left"
              sx={{
                backgroundColor: '#f4f5f9',
                border: '0.01'
              }}
            >
              <p>Completion Period <img src={arrowDown} alt=""/></p>
            </TableCell>
            <TableCell
              className="internship-enrolled-header"
              align="left"
              sx={{
                backgroundColor: '#f4f5f9',
                border: '0.02',
              }}
            >
              <p>Total Enrolled <img src={arrowDown} alt=""/></p>

            </TableCell>
            <TableCell
              className="internship-candidates-header"
              sx={{
                backgroundColor: '#f4f5f9',
                border: '0.03'
              }}
            >
              <p>Qualified Candidates <img src={arrowDown} alt=""/></p>
            </TableCell>
            <TableCell sx={{
              backgroundColor: '#f4f5f9', 
              borderTopRightRadius: '20px', 
            }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {mockData.map((data) => (
            <TableRow 
              key={data.name}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell sx={{ fontFamily: 'Space Grotesk' }}>
                <h3 className="internship-name">{data.name}</h3>
                <p className="internship-description">{data.description}</p>
              </TableCell>
              <TableCell sx={{ fontFamily: 'Space Grotesk' }} align="left">
                <p className="internship-days">{data.days} days</p>
                <p className="internship-date-created">(created on 10/12/2021)</p>
              </TableCell>
              <TableCell sx={{ fontFamily: 'Space Grotesk' }} align="left">
                <p className="internship-enrolled">{data.enrolled}</p>
              </TableCell>
              <TableCell align="left">
                <img src={imgQC} alt=""/>
              </TableCell>
              <TableCell className="list-img">
                <img src={chart} alt=""/>
                <img src={profile} alt=""/>
                <img src={more} alt=""/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}