import React, { useEffect, useState } from 'react';
import { Input, Table } from 'antd';
import axios from 'axios';

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
  const [searchText, setSearchText] = useState("")
//   let results = 20;
//   let page = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log('START GET Here')
        const result = await axios.get('http://localhost:8080/getRandomUsers?results=10&page=1');
        // console.log('END OF GET')
        // console.log('Print RESULT .........')
        // console.log(result.data)
        const users = result.data.map((user: any, index: number) => ({
          key: index.toString(),
          name: user.name,
          location: user.location,
          email: user.email,
          age: user.age,
          phone: user.phone,
          cell: user.cell,
          picture: user.picture.split(',')[2]
        }));
        console.log(result)
        setData(users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filteredValue: [searchText],
      onFilter: (value: any, record: any) => {
        return String(record.name).toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        String(record.location).toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        String(record.email).toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        String(record.age).toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        String(record.phone).toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        String(record.cell).toLocaleLowerCase().includes(value.toLocaleLowerCase());
      }
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
      },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Cell',
      dataIndex: 'cell',
      key: 'cell',
    },
    {
      title: 'Picture',
      dataIndex: 'picture',
      key: 'picture',
      render: (picture: string) => <img src={picture} alt="User" />, //style={{ width: 50, height: 50 }} />,
    },
  ];

  return (
    <div className='table'>
    <Input.Search placeholder='Search here..' 
        style={{marginBottom: 8, width: '20%'}}
        onSearch={value => {setSearchText(value)}}
        onChange={(e) => {setSearchText(e.target.value)}}
    />
    <Table<User>
      columns={columns}
      dataSource={data}
      pagination={false}
    />
    </div>
  );
};

export default UserTable;
