import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTable, Column } from 'react-table';

interface User {
  name: string;
  location: string;
  email: string;
  age: number;
  phone: string;
  cell: string;
  picture:string;
}

const UserTable: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<User[]>('http://localhost:8080/getRandomUsers?results=10&page=1');
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  const columns: Column<User>[] = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Location',
        accessor: 'location'
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Cell',
        accessor: 'cell',
      },
      {
        Header: 'Picture',
        accessor: 'picture',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue', width: '100%' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
