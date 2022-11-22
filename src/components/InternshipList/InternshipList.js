import React, { useState } from "react";

// Tableview import form MaterialUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { borders } from '@mui/system';

// images import
import imgQC from '../../images/qualified-candidates.svg';
import chart from '../../images/chart.svg';
import more from '../../images/more-2.svg';
import profile from '../../images/profile-2user.svg';

import './InternshipList.css';

export default function InternshipList() {

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
    <TableContainer component={Paper} sx={{maxHeight: '450px'}}>
      <Table 
        sx={{ minWidth: 650 }} 
        aria-label="internship-table"
        stickyHeader
      >
        <TableHead>
          <TableRow className="list--internship-header">
            <TableCell 
              className="internship-header-title" 
              sx={{fontFamily: 'Space Grotesk', backgroundColor: "#f6f5f9"}}
            >
              Internship Title
            </TableCell>
            <TableCell 
              className="internship-header-completion" 
              sx={{ fontFamily: 'Space Grotesk', backgroundColor: "#f6f5f9" }}
              align="left"
            >
              Completion Period
            </TableCell>
            <TableCell 
              className="internship-header-enrolled" 
              sx={{ fontFamily: 'Space Grotesk', backgroundColor: "#f6f5f9" }}
              align="left"
            >
              Total Enrolled
            </TableCell>
            <TableCell 
              className="internship-header-candidates" 
              sx={{ fontFamily: 'Space Grotesk', backgroundColor: "#f6f5f9" }}
            >
              Qualified Candidates
            </TableCell>
            <TableCell className="internship-header-img" sx={{backgroundColor: "#f6f5f9"}}></TableCell>
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
              <TableCell sx={{ fontFamily: 'Space Grotesk' }} className="list--internship-title">
                <h3>{data.name}</h3>
                <p>{data.description}</p>
              </TableCell>
              <TableCell className="list--internship-completion" sx={{ fontFamily: 'Space Grotesk' }} align="left"><p>{data.days}</p></TableCell>
              <TableCell className="list--internship-enrolled" sx={{ fontFamily: 'Space Grotesk' }} align="left"><p>{data.enrolled}</p></TableCell>
              <TableCell className="list--internship-candidates" align="left">
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