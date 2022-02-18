import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	withTheme,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import RemoveIcon from '@material-ui/icons/DeleteForever'
import { Tooltip } from 'components'

const UserManagementTable = ({ clickDelete, columns, rows, theme }) => {
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}
	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}
	return (
		<TablePaper>
			<TableWrapper>
				<Table aria-label="sticky table">
					<TableHeader theme={theme}>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									align={column.align}
									key={column.id}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow hover key={row.id} role="checkbox" tabIndex={-1}>
										{columns.map((column) => {
											const value = row[column.id]
											return column.id === 'edit' ? (
												<TableCell
													align="right"
													key={`Edit${row.id}`}
													style={{ minWidth: '40px' }}
												>
													<Tooltip title="Edit">
														<IconButton
															aria-label="Edit"
															color="inherit"
															// onClick={clickEditBtn}
														>
															<EditIcon color="secondary" />
														</IconButton>
													</Tooltip>
												</TableCell>
											) : column.id === 'delete' ? (
												<TableCell
													align="right"
													key={`Delete${row.id}`}
													style={{ minWidth: '40px' }}
												>
													<Tooltip title="Delete">
														<IconButton
															aria-label="Delete"
															color="inherit"
															onClick={() => clickDelete(row.id)}
														>
															<RemoveIcon color="error" />
														</IconButton>
													</Tooltip>
												</TableCell>
											) : (
												<TableCell align={column.align} key={column.id}>
													{column.format && typeof value === 'number'
														? column.format(value)
														: value}
												</TableCell>
											)
										})}
									</TableRow>
								)
							})}
					</TableBody>
				</Table>
			</TableWrapper>
			<TablePagination
				component="div"
				count={rows.length}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
				page={page}
				rowsPerPage={rowsPerPage}
				rowsPerPageOptions={[10, 25, 100]}
			/>
		</TablePaper>
	)
}
UserManagementTable.propTypes = {
	clickDelete: PropTypes.func,
	columns: PropTypes.array,
	rows: PropTypes.array,
	theme: PropTypes.shape(),
}
export default withTheme(UserManagementTable)

const TableWrapper = styled(TableContainer)`
	max-height: 100%;
`
const TablePaper = styled(Paper)`
	width: 100%;
`
const TableHeader = styled(TableHead)`
	background-color: ${({ theme }) => theme.palette.primary.dark};
`
