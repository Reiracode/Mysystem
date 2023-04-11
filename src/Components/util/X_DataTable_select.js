import React, { useState, useEffect } from "react";
import { useTable, usePagination,useRowSelect } from "react-table";
import { Checkbox } from '../util/Check';

export const DataTable = ({
  columns,
  data,
  onRowSelectStateChange,
  onRowClickFunc,
  fetchData,
  pageCount: controlledPageCount
}) => {
  const {
    // getTableProps,
    // getTableBodyProps,
    // headerGroups,
    // rows,
    // prepareRow,
    // selectedFlatRows,
    // state: { selectedRowIds },
    // page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    rows,
    selectedFlatRows,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
      stateReducer: (newState, action) => {
        console.log(action.id);
        if (action.type === "toggleRowSelected") {
          newState.selectedRowIds = {
            [action.id]: true
          }
        }
        console.log(newState)
        return newState;
      },
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
          // Cell: ({ row }) => {
          //   return <Checkbox {...row.getToggleRowSelectedProps()} />;
          // },
          Cell: ({ row }) => <><Checkbox {...row.getToggleRowSelectedProps()} {...row.values} /></>
          //HERE : You pass your rows' values to your component
        },
        ...columns,
      ]);

    }
  )

  // Row-select state change
  useEffect(() => {
    onRowSelectStateChange(selectedRowIds)
    // console.log(selectedRowIds)
    // console.log(selectedFlatRows.map((row) => row.original))
    // const all = selectedFlatRows.map((row) => row)
    // console.log(all)
    // console.log(selectedFlatRows)
  },[onRowSelectStateChange, selectedRowIds]);

  // useEffect(() => {
  //   fetchData({ pageIndex, pageSize })
  // }, [fetchData, pageIndex, pageSize])


  // useEffect(() => onRowSelectStateChange(selectedFlatRows.map((row) => row.original))
  //   , [onRowSelectStateChange, selectedFlatRows]);
  // Render the UI for your table
  return (
    <>
      <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {/* {rows.slice(0, 10).map((row, i) => {
            prepareRow(row)
            return (
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
            )
          })} */}

          {page.map((row, i) => {
            prepareRow(row)
            return (
 
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
            )
          })}


        </tbody>
      </table>


      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
  
 
    </>
  )
}

 