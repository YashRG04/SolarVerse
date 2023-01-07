import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import './Mybook.css'
import { MyBookingData } from '../../assets/data/MyBookingData';
const Mybook = () => {
  return (
    // <h1>Mybook</h1>
    <div className="mybookcontainer">
      <h1>My Bookings</h1>
      <Table className="bookcontain" >
        <Thead className="bookhead">
          <Tr className="bookblock">
            <Th>Service ID</Th>
            <Th>Service Name</Th>
            <Th>Date</Th>
            <Th>Location</Th>
            <Th>Area</Th>
            <Th>Cost</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {MyBookingData.map((item, index) => (
            <Tr>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td>{item.date}</Td>
              <Td>{item.location}</Td>
              <Td>{item.area}</Td>
              <Td>{item.cost}</Td>
              <Td className="bookstatus">{item.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Mybook