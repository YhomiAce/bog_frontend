import React, {  useEffect } from 'react'
// import { BsThreeDotsVertical } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
// import Spinner from '../../../layouts/Spinner';
import { getUsers } from '../../../../redux/actions/UserAction';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useTable, useGlobalFilter, useAsyncDebounce, useFilters, usePagination } from "react-table";
// import { useNavigate } from "react-router-dom";
import { useMemo, useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";


export function UsersTable({status, userType}){

  const dispatch = useDispatch()
  // const isLoading = useSelector((state) => state.users.isLoading);

  useEffect (() => {

    dispatch(getUsers())
      
  }, [dispatch]) 

  let users = useSelector((state) => state.users.users);
  // let users = clients.filter().filter()

  if (userType) {
    users = users.filter(where => where.userType === userType)
}
if (status) {
  users = users.filter(where => where.status === status)
}

    const formatStatus = (status) => {
      switch (status) {
          case "isAcive":
              return <p className="px-2 py-1 text-blue-700 bg-blue-100 w-24 rounded-md fw-600">Active</p>
          

          default: return <p className="px-2 py-1 text-orange-700 bg-orange-100 w-24 rounded-md fw-600">Inactive</p>
      }

  }
  const formatType = (userType) => {
    switch (userType) {
        case "private_client":
            return <p>Private Client</p>
        case "corporate_client":
          return <p>Corporate Client</p>
        case "vendor":
          return <p>Product Partner</p>
        case "professional":
          return <p>Service Partner</p>

        default: return userType
    }

}


    const columns = useMemo(
        () => [
          {
            Header: 'S/N',
            accessor: ( row, index) => index + 1  //RDT provides index by default
          },
          {
            Header: "Full Name",
            accessor: "name",
          },
          {
            Header: "Email",
            accessor: "email",
            
          },
          {
            Header: "Phone Number",
            accessor: "phone",
          },
          {
            Header: "Client Type",
            accessor:  'userType',
            Filter: SelectColumnFilter, 
            filter: 'includes',
            Cell: (props) => formatType(props.value)
            
          },
          {
            Header: "Status",
            accessor: "isActive",
            Cell: (props) => formatStatus(props.value)
          },
          {
            Header: 'Action',
            accessor: 'id',
            // Cell: (row) => <button className="btn1" onClick={() => gotoDetailsPage(row.value)}><BsThreeDotsVertical /></button>,
          },
        ],
        []
      );

    
      const data = useMemo(() => users, [users]);
    
      return (
        <>
          <div className="overflow-hidden px-4 bg-white py-8 rounded-md">
            <Table columns={columns} data={data}  className=""/>
          </div>
        </>
      );

}

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  
    return (
      <div className="flex items-center h-9 overflow-hidden  lg:w-64  rounded-md">
        <input
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
          className="px-2 py-1 h-full border-2 border-gray-400 rounded-l-md w-10/12  outline-none"
        />
        <p className="w-2/12 h-full center-item rounded-r-md bg-primary "><FontAwesomeIcon icon={faSearch} className="text-xl py-1 rounded-r-md bg-primary text-white text-center"/></p>
      </div>
    )
  }

const Table = ({columns, data}) => {

    const tableRef = useRef(null);

                const { onDownload } = useDownloadExcel({
                    currentTableRef: tableRef.current,
                    filename: 'Users table',
                    sheet: 'Users'
                })

    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, state, preGlobalFilteredRows, setGlobalFilter, page, canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize, } =
    useTable({
      columns,
      data,
    }, 
    useFilters,
    useGlobalFilter, usePagination );

    

    return (
        <>
            <div className="flex items-center mb-5 justify-between">
                <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
                <div className="flex">
                  <button onClick={onDownload} className="pr-3"> Export excel </button>
                  {headerGroups.map((headerGroup) =>
                      headerGroup.headers.map((column) =>
                      column.Filter ? (
                          <div className="fs-500 px-3 py-2 rounded-md bg-light" key={column.id}>
                              <label for={column.id} className="fw-600 ">{column.render("Header")}: </label>
                              {column.render("Filter")}
                          </div>
                      ) : null
                      )
                  )}
                </div>                
                
            </div>
        <div className="mt-2 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-gray-200 sm:rounded-lg">
                        <table {...getTableProps()} className="items-center w-full bg-transparent border-collapse" ref={tableRef}>
                            <thead className="thead-light bg-light">
                                {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                    <th 
                                    scope="col"
                                    className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left"
                                    {...column.getHeaderProps()}>{column.render("Header")}</th>
                                    ))}
                                </tr>
                                ))}
                            </thead>
                            <tbody
                                className="bg-white"
                                {...getTableBodyProps()}>
                                {page.map((row, i) => {
                                prepareRow(row);
                                return (
                                    <tr 
                                        {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 py-4 text-left" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                    })}
                                    </tr>
                                );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="pagination mt-8 flex justify-between items-center">
            <div>
                <span>
                Page{' '}
                <strong>
                    {state.pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
                </span>
                <select
                value={state.pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}
                >
                {[5, 10, 20].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                    </option>
                ))}
                </select>
            </div>
            <div>
                <button className="border border-gray-400 px-2 p-1 text-xl" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <FaAngleDoubleLeft/>
                </button>{' '}
                <button className="border border-gray-400 px-2 p-1 text-xl" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <FaAngleLeft/>
                </button>{' '}
                <button className="border border-gray-400 px-2 p-1 text-xl" onClick={() => nextPage()} disabled={!canNextPage}>
                    <FaAngleRight/>
                </button>{' '}
                <button className="border border-gray-400 px-2 p-1 text-xl" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <FaAngleDoubleRight/>
                </button>
            </div>
        </div>
        </>
      );
}

// dropdown filter for table

export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
      const options = new Set();
      preFilteredRows.forEach((row) => {
        options.add(row.values[id]);
      });
      return [...options.values()];
    }, [id, preFilteredRows]);
  
    // Render a multi-select box
    return (
      <select
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        className="bg-light outline-none"
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }