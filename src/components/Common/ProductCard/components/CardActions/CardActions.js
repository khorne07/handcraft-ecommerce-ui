import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CardActions } from '@material-ui/core'
import { GridContainer } from 'components'
import AdminCardActions from './components/AdminCardActions'
import UserCardActions from './components/UserCardActions'

const ProductCardActions = ({ id, isAdmin, isAuthenticated, ...props }) => {
	return (
		<CustomCardActions>
			<GridContainer justify="space-around">
				<UserCardActions id={id} isAuthenticated={isAuthenticated} />
				{isAdmin && <AdminCardActions id={id} {...props} />}
			</GridContainer>
		</CustomCardActions>
	)
}
ProductCardActions.propTypes = {
	id: PropTypes.number,
	isAdmin: PropTypes.bool,
	isAuthenticated: PropTypes.bool,
}
export default ProductCardActions

const CustomCardActions = styled(CardActions)`
	max-height: 48px;
`
