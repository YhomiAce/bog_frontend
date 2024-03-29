import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from 'react'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
  FaFileDownload,
} from "react-icons/fa";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useFilters,
  usePagination,
} from "react-table";
import { useNavigate } from "react-router-dom";
// import { BsThreeDotsVertical } from "react-icons/bs";
import { useMemo } from "react";
import * as moment from "moment";
// import { SuccessAlert } from "../../../../services/endpoint";
// import toaster from "toasted-notes";
// import "toasted-notes/src/styles.css";
// import Axios from "../../../../config/config";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useExportData } from "react-table-plugins";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { BsThreeDotsVertical } from "react-icons/bs";
import Swal from "sweetalert2";
import {
  approveProjectToStart,
  DispatchProject,
} from "../../../../redux/actions/ProjectAction";
import DispatchProjectModal from "../../clientDashboard/pages/Modals/DispatchProject";

// export table files

function getExportFileBlob({ columns, data, fileType, fileName }) {
  if (fileType === "csv") {
    // CSV example
    const headerNames = columns // eslint-disable-next-line
      .filter((c) => c.Header != "Action")
      .map((col) => col.exportValue);
    const csvString = Papa.unparse({ fields: headerNames, data });
    return new Blob([csvString], { type: "text/csv" });
  } else if (fileType === "xlsx") {
    // XLSX example

    const header = columns // eslint-disable-next-line
      .filter((c) => c.Header != "Action")
      .map((c) => c.exportValue);
    const compatibleData = data.map((row) => {
      const obj = {};
      header.forEach((col, index) => {
        obj[col] = row[index];
      });
      return obj;
    });

    let wb = XLSX.utils.book_new();
    let ws1 = XLSX.utils.json_to_sheet(compatibleData, {
      header,
    });
    XLSX.utils.book_append_sheet(wb, ws1, "React Table Data");
    XLSX.writeFile(wb, `${fileName}.xlsx`);

    // Returning false as downloading of file is already taken care of
    return false;
  }
  //PDF example
  if (fileType === "pdf") {
    const headerNames = columns // eslint-disable-next-line
      .filter((c) => c.Header != "Action")
      .map((column) => column.exportValue);
    const doc = new jsPDF();
    doc.autoTable({
      head: [headerNames],
      body: data,
      styles: {
        minCellHeight: 9,
        halign: "left",
        valign: "center",
        fontSize: 11,
      },
    });
    doc.save(`${fileName}.pdf`);

    return false;
  }

  // Other formats goes here
  return false;
}

export default function ProjectsTable({ status }) {
  // let   allProjects = useSelector((state) => state.orders.  allProjects);
  let allProjects = useSelector((state) => state.allprojects.projects);
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState("");

  const openModal = (id) => {
    setProjectId(id);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  if (status) {
    // console.log(status)
    allProjects = allProjects.filter(project => project.status === status);
    // console.log(allProjects)
    // if (status === "in_review") {
    //   allProjects = allProjects.filter(
    //     (where) => where.approvalStatus === status
    //   );
    //   console.log({ allProjects });
    // } else {
    //   allProjects = allProjects.filter(
    //     (where) => where.approvalStatus !== status
    //   );
    // }
  }
  else{
    allProjects = allProjects.filter(project => project.approvalStatus === 'pending' || project.approvalStatus === 'in review')
  }
  
  //   const formatNumber = (number) => {
  //     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const gotoDetailsPage = (id) => {
    navigate(`/dashboard/projectadmindetails?projectId=${id}`);
  };
  const gotoProjectFile = (id) => {
    navigate(`/dashboard/projectfile?projectId=${id}`);
  };

  const gotoServiceRequest = (id) => {
    navigate(`/dashboard/service-request/${id}`);
  };

  const formatStatus = (status) => {
    switch (status) {
      case "in_review":
        return (
          <p className="px-2 py-1 text-yellow-700 bg-yellow-100 w-24 rounded-md fw-600">
            Awaiting Approval
          </p>
        );
      case "dispatched":
        return (
          <p className="px-2 py-1 text-blue-700 bg-blue-100 w-24 rounded-md fw-600">
            Dispatched
          </p>
        );
      case "approved":
        return (
          <p className="px-2 py-1 text-green-700 bg-green-100 w-24 rounded-md fw-600">
            Approved
          </p>
        );
      case "disapproved":
      case "cancel":
        return (
          <p className="px-2 py-1 text-red-700 bg-red-100 w-28 rounded-md fw-600">
            Cancelled
          </p>
        );
      case "close":
        return (
          <p className="px-2 py-1 text-red-700 bg-red-100 w-28 rounded-md fw-600">
            Closed
          </p>
        );
      case "pending":
        return (
          <p className="px-2 py-1 text-blue-700 bg-green-100 w-24 rounded-md fw-600">
            Pending
          </p>
        );
      case "completed":
        return (
          <p className="px-2 py-1 text-green-700 bg-green-100 w-24 rounded-md fw-600">
            Completed
          </p>
        );
      case "ongoing":
        return (
          <p className="px-2 py-1 text-blue-700 bg-blue-100 w-24 rounded-md fw-600">
            Ongoing
          </p>
        );
      case "draft":
        return "Draft";
      default:
        return status;
    }
  };
  const formatProductType = (projectTypes) => {
    switch (projectTypes) {
      case "land_survey":
        return <p className="">Land Survey</p>;
      case "building_approval":
        return <p className=" ">Building Approval</p>;
      case "contractor":
        return <p className="">Contractor</p>;
      case "construction_drawing":
        return <p className="">Construction Drawing</p>;
      case "geotechnical_investigation":
        return <p className="">Geotechnical Investigation</p>;
      default:
        return status;
    }
  };

  const approveProjectForCommencement = (id, hasApproved) => {
    Swal.fire({
      title: hasApproved ? "Approve Project" : "Disapprove Project",
      text: hasApproved
        ? "Approve Project to commence?"
        : "Disapprove Project?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4BB543",
      cancelButtonColor: "#3085d6",
      confirmButtonText: hasApproved ? "Yes Commence" : "Yes Disapprove",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.value) {
        const payload = {
          projectId: id,
          isApproved: hasApproved,
        };
        dispatch(approveProjectToStart(payload));
      }
    });
  };

  const dispatchProjectToPartners = (score) => {
    const payload = {
      score,
      projectId,
    };
    dispatch(DispatchProject(payload));
  };

  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row, index) => index + 1, //RDT provides index by default
      },
      {
        Header: "Project ID		",
        accessor: "projectSlug",
      },
      {
        Header: " Service Type",
        accessor: "projectTypes",
        Cell: (props) => formatProductType(props.value),
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Project Status	",
        accessor: "status",
        Cell: (props) => formatStatus(props.value),
      },
      {
        Header: "Due Date",
        accessor: "createdAt",
        Cell: (props) => moment(props.value).format("MM /D /YYYY "),
      },
      {
        Header: "Action",
        accessor: "id",
        Cell: (row) => (
          <Menu placement="left-start" className="w-16">
            <MenuHandler>
              <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none">
                <BsThreeDotsVertical className="text-2xl" />
              </Button>
            </MenuHandler>
            <MenuList>
              {row.cell.row.original.approvalStatus === "in_review" && (
                <MenuItem onClick={() => gotoDetailsPage(row.value)}>
                  View Details
                </MenuItem>
              )}
              {row.cell.row.original.status === "ongoing" && (
                <MenuItem onClick={() => gotoDetailsPage(row.value)}>
                  View Details
                </MenuItem>
              )}
              {row.cell.row.original.approvalStatus === "pending" && (
                <>
                  <MenuItem onClick={() => gotoProjectFile(row.value)}>
                    View Submission
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      approveProjectForCommencement(row.value, true)
                    }
                  >
                    Approve Project
                  </MenuItem>
                </>
              )}
              {row.cell.row.original.approvalStatus === "approved" &&
                row.cell.row.original.status !== "ongoing" && (
                  <MenuItem onClick={() => openModal(row.value)}>
                    Post Project
                  </MenuItem>
                )}
              {row.cell.row.original.approvalStatus === "in_review" &&
                row.cell.row.original.status !== "ongoing" && (
                  <MenuItem
                    onClick={() =>
                      approveProjectForCommencement(row.value, true)
                    }
                  >
                    Approve Project
                  </MenuItem>
                )}

              {row.cell.row.original.status === "dispatched" && (
                <MenuItem onClick={() => gotoServiceRequest(row.value)}>
                  View Request
                </MenuItem>
              )}
              {row.cell.row.original.status !== "ongoing" &&
                row.cell.row.original.status !== "dispatched" && (
                  <MenuItem
                    className="bg-red-600 text-white hover:text-white hover:bg-red-500"
                    onClick={() =>
                      approveProjectForCommencement(row.value, false)
                    }
                  >
                    Decline Project
                  </MenuItem>
                )}
            </MenuList>
          </Menu>
        ),
      },
    ],
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const data = useMemo(() => allProjects, [allProjects]);

  return (
    <>
      {open && (
        <DispatchProjectModal
          closeModal={closeModal}
          dispatchProject={dispatchProjectToPartners}
        />
      )}
      <div className="overflow-hidden px-4 bg-white py-8 rounded-md">
        <Table columns={columns} data={data} className="" />
      </div>
    </>
  );
}

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="flex items-center h-9 overflow-hidden  lg:w-64  rounded-md">
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        className="px-2 py-1 h-full border-2 border-gray-400 rounded-l-md w-10/12  outline-none"
      />
      <p className="w-2/12 h-full center-item rounded-r-md bg-primary ">
        <FontAwesomeIcon
          icon={faSearch}
          className="text-xl py-1 rounded-r-md bg-primary text-white text-center"
        />
      </p>
    </div>
  );
}

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    exportData,
  } = useTable(
    {
      columns,
      data,
      getExportFileBlob,
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useExportData
  );

  return (
    <>
      <div className="lg:flex items-center mb-5 justify-between">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <div className="flex mt-5 lg:mt-0">
          <Menu>
            <MenuHandler>
              <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none flex items-center">
                Export <FaFileDownload className="text-2xl" />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem
                onClick={() => {
                  exportData("csv", true);
                }}
              >
                Export as CSV
              </MenuItem>
              <MenuItem
                onClick={() => {
                  exportData("xlsx", true);
                }}
              >
                Export as Excel
              </MenuItem>
              <MenuItem
                onClick={() => {
                  exportData("pdf", true);
                }}
              >
                Export as PDF
              </MenuItem>
            </MenuList>
          </Menu>
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) =>
              column.Filter ? (
                <div
                  className="fs-300 px-3 flex py-2 rounded-md bg-light"
                  key={column.id}
                >
                  {/* <label for={column.id} className="fw-600 flex ">{column.render("Header")}: </label> */}
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
              <table
                {...getTableProps()}
                className="items-center w-full bg-transparent border-collapse"
              >
                <thead className="thead-light bg-light">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          scope="col"
                          className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left"
                          {...column.getHeaderProps()}
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="bg-white" {...getTableBodyProps()}>
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              className="border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 py-4 text-left"
                              {...cell.getCellProps()}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
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
            Page{" "}
            <strong>
              {state.pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <select
            value={state.pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            className="border border-gray-400 px-2 p-1 fs-400 lg:text-xl"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <FaAngleDoubleLeft />
          </button>{" "}
          <button
            className="border border-gray-400 px-2 p-1 fs-400 lg:text-xl"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <FaAngleLeft />
          </button>{" "}
          <button
            className="border border-gray-400 px-2 p-1 fs-400 lg:text-xl"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <FaAngleRight />
          </button>{" "}
          <button
            className="border border-gray-400 px-2 p-1 fs-400 lg:text-xl"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </>
  );
};

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
      className="bg-light outline-none p-1"
    >
      <option value="">All Services</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
