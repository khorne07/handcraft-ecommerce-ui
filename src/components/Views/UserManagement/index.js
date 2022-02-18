import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'components/App/axios'
import UserManagementTable from './UserManagement'
import { listAllUsers, deleteUser } from 'store/userReducer/actions'

const Container = () => {
	const dispatch = useDispatch()
	const usersList = useSelector((state) => state.user.usersList)
	const columns = [
		{ id: 'id', label: 'Id', minWidth: 100 },
		{ id: 'userName', label: 'Username', minWidth: 170 },
		{ id: 'email', label: 'Email', minWidth: 170 },
		{
			id: 'authLevel',
			label: 'Role',
			minWidth: 170,
			format: (value) =>
				value === 1 ? 'User' : value === 3 ? 'Admin' : 'Owner',
		},
		{ id: 'edit', label: 'Edit', minWidth: 40 },
		{ id: 'delete', label: 'Delete', minWidth: 40 },
	]
	useEffect(() => {
		axios
			.get('/users')
			.then((res) => dispatch(listAllUsers(res.data)))
			.catch((error) => console.log(error))
	}, [])

	const handleDelete = (id) => {
		axios
			.delete(`/users/${id}`)
			.then(() => dispatch(deleteUser(id)))
			.catch((error) => console.log(error))
	}
	// const handleEdit = (id) => {}
	return (
		usersList && (
			<UserManagementTable
				clickDelete={(id) => handleDelete(id)}
				columns={columns}
				// clickEdit={() => handleEdit(id)}
				rows={usersList}
			/>
		)
	)
}
Container.propTypes = {
	id: PropTypes.number,
}
export default Container
