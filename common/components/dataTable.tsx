import { ViewModel } from "@backend/utils";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FunctionComponent } from "react";

type columnDef<U extends string> = GridColDef & { field: U };

export type Column<T> = columnDef<Exclude<keyof ViewModel<T>, number | symbol>>;
interface AllItemsProps<T> {
	data: ViewModel<T>[];
	columns: Column<T>[];
	title: string;
}

const DataTable: FunctionComponent<AllItemsProps<any>> = ({ data, columns, title }) => {
	return (
		<>
			<h1>{title}</h1>
			{data.length > 0 ? (
				<Box sx={{ height: 300, width: "30%" }}>
					<DataGrid rows={data} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
				</Box>
			) : (
				<p>No Records Found</p>
			)}
		</>
	);
};

export default DataTable;
