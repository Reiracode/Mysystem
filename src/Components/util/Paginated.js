import React, { useMemo ,useEffect} from "react";
import { useTable, usePagination, useRowSelect } from "react-table";
import { Checkbox } from '../util/Check';

import "./table.css";
//#a27e7e54
export const Paginated = ({
  columns,
  data,
  onRowSelectStateChange,
  onRowClickFunc
}) => {
  const {
    // rows,
    // selectedFlatRows,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    state: { selectedRowIds },
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
       stateReducer: (newState, action) => {
        // console.log(action.id);
        if (action.type === "toggleRowSelected") {
          newState.selectedRowIds = {
            [action.id]: true
          }
        }
        console.log(newState)
        return newState;
      }
    },
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <><Checkbox {...row.getToggleRowSelectedProps()} {...row.values} /></>
          //HERE : You pass your rows' values to your component
        },
        ...columns,
      ]);
    }
  );

  const { pageIndex, pageSize } = state;

  useEffect(() => {
    onRowSelectStateChange(selectedRowIds)
  }, [onRowSelectStateChange, selectedRowIds]);


  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              // <tr {...row.getRowProps()}>
              //   {row.cells.map((cell) => {
              //     return (
              //       <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              //     );
              //   })}
              // </tr>
              <tr
                {...row.getRowProps()}
                className="odd:bg-white even:bg-gray-100"
                onClick={() => row.toggleRowSelected()}
              >
                {row.cells.map(cell => {
                  return <td onClick={() => onRowClickFunc(row, cell)} {...cell.getCellProps()}>
                    {cell.render('Cell')}</td>
                })}
              </tr>

            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
