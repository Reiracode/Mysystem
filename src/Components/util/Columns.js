// import { format } from "date-fns";
export const COLUMNS = [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'First Name1',
          // accessor: 'first_name',
          // accessor: 'name.firstname',
          accessor: 'title',
        },
        {
          Header: 'Last Name',
          // accessor: 'last_name',
          // accessor: 'name.lastname',
          accessor: 'category',
        },
        // {
        //   Header: 'title',
        //   accessor: 'title',
        // },
        // {
        //   Header: 'price',
        //   accessor: 'price',
        // },
      ],
    },
    {
      Header: 'Info',
      columns: [
        {
          Header: 'id',
          accessor: 'id',
        }
      ],
    },
  ]
   

// export const COLUMNS = [
//   {
//     Header: "Id",
//     Footer: "Id",
//     accessor: "id",
//     disableFilters: true,
//     sticky: "left"
//   },
//   {
//     Header: "First Name",
//     Footer: "First Name",
//     accessor: "first_name",
//     sticky: "left"
//   },
//   {
//     Header: "Last Name",
//     Footer: "Last Name",
//     accessor: "last_name",
//     sticky: "left"
//   },
//   {
//     Header: "Date of Birth",
//     Footer: "Date of Birth",
//     accessor: "date_of_birth",
//     // Cell: ({ value }) => {
//     //   return format(new Date(value), "dd/MM/yyyy");
//     // }
//   },
//   {
//     Header: "Country",
//     Footer: "Country",
//     accessor: "country"
//   },
//   {
//     Header: "Phone",
//     Footer: "Phone",
//     accessor: "phone"
//   },
//   {
//     Header: "Email",
//     Footer: "Email",
//     accessor: "email"
//   },
//   {
//     Header: "Age",
//     Footer: "Age",
//     accessor: "age"
//   }
// ];

// export const GROUPED_COLUMNS = [
//   {
//     Header: "Id",
//     Footer: "Id",
//     accessor: "id"
//   },
//   {
//     Header: "Name",
//     Footer: "Name",
//     columns: [
//       {
//         Header: "First Name",
//         Footer: "First Name",
//         accessor: "first_name"
//       },
//       {
//         Header: "Last Name",
//         Footer: "Last Name",
//         accessor: "last_name"
//       }
//     ]
//   },
//   {
//     Header: "Info",
//     Footer: "Info",
//     columns: [
//       {
//         Header: "Date of Birth",
//         Footer: "Date of Birth",
//         accessor: "date_of_birth"
//       },
//       {
//         Header: "Country",
//         Footer: "Country",
//         accessor: "country"
//       },
//       {
//         Header: "Phone",
//         Footer: "Phone",
//         accessor: "phone"
//       }
//     ]
//   }
// ];