import { useMemo , useEffect, useState} from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { useContext } from 'react';
import userContext from '@/context/usersContext';
import Spinner from './spinnerloader';
import UserModal from './userUpdateModal';


const TableAdmin = () => {
  const [list, setList] = useState([])
  const {userlist, setUserlist}= useContext(userContext);
useEffect(()=>{
  console.log("this is the user list",JSON.stringify(list))
  setList(userlist)
},[userlist])
useEffect(()=>{},[list])
  //should be memoized or stable
  const columns = useMemo(
    () => [
      // {
      //   accessorKey: 'id', //access nested data with dot notation
      //   header: 'ID',
      //   size: 150,
      // },
      {
        accessorKey: 'id',
        header: 'modify',
        size: 10,
        Cell: ({cell})=>{
          return <><UserModal id={cell.getValue()}/></>
        }
      },
      {
        accessorKey: 'username',
        header: 'Name',
        size: 10,
      },
      {
        accessorKey: 'age', //normal accessorKey
        header: 'age',
        size: 5,
      },
      {
        accessorKey: 'Jobtitle',
        header: 'Designation',
        size: 15,
      },
      {
        accessorKey: 'purchased',
        header: 'purchased',
        size: 10,
      },
      {
        accessorKey: 'totalsales',
        header: 'Spend',
        size: 10,
        Cell: ({cell})=>{
          return <p>₹ {cell.getValue()}</p>
        }
      },
      {
        accessorKey: 'working',
        header: 'Working',
        size: 10,
      },
    ],
    [],
  );

    const table =  useMaterialReactTable({
    columns,
    data :userlist, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    paginationDisplayMode: 'pages',
    initialState: { pagination: { pageSize: 5 } },
  });
  

  return<> 
  {userlist.length >0 ?<MaterialReactTable table={table} /> : <Spinner />}
 
  </> ;
};

export default TableAdmin;
