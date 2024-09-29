import { Box } from "@mui/material";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { FC, useMemo } from "react";

type Iprops = {};

export const MaterialTable: FC<Iprops> = (props) => {
  interface Person {
    name: string;
    age: number;
  }
  const data: Person[] = [
    {
      name: "John", // key "name" matches `accessorKey` in ColumnDef down below
      age: 30, // key "age" matches `accessorKey` in ColumnDef down below
    },
    {
      name: "Sara",
      age: 25,
    },
  ];

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        muiTableHeadCellProps: { style: { color: "green" } }, //custom props
        enableHiding: false, //disable a feature for this column
      },
      {
        accessorKey: "age", //id required if you use accessorFn instead of accessorKey
        header: "Age",
        Header: <i style={{ color: "red" }}>Age</i>, //optional custom markup
        Cell: ({ cell }) => <i>{cell.getValue<number>().toLocaleString()}</i>, //optional custom cell render
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    autoResetAll: false,
    columns,
    data,
    enableRowSelection: true, //enable some features
    enableColumnOrdering: true, //enable a feature for all columns
    enableGlobalFilter: false, //turn off a feature
  });
  return <MaterialReactTable table={table} />;
  return <>this is table</>;
};
