import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import AddCartIcon from '@material-ui/icons/AddShoppingCart'
import DetailsIcon from '@material-ui/icons/RemoveRedEye'
import AddFavoriteIcon from '@material-ui/icons/FavoriteBorder'
import RemoveFavoriteIcon from '@material-ui/icons/Favorite'
import { Tooltip } from 'components'

const UserActions = ({
	addFavorite,
	favorite,
	isAuthenticated,
	removeFavorite,
}) => (
	<>
		{isAuthenticated && (
			<Tooltip title="Add to Cart">
				<IconButton
					aria-label="Add to Cart"
					color="inherit"
					// onClick={clickAddBtn}
				>
					<AddCartIcon color="secondary" />
				</IconButton>
			</Tooltip>
		)}
		{isAuthenticated &&
			(favorite ? (
				<Tooltip title="Remove from Favorites">
					<IconButton
						aria-label="Remove from Favorites"
						color="inherit"
						onClick={removeFavorite}
					>
						<RemoveFavoriteIcon color="error" />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title="Add to Favorites">
					<IconButton
						aria-label="Add to Favorites"
						color="inherit"
						onClick={addFavorite}
					>
						<AddFavoriteIcon color="error" />
					</IconButton>
				</Tooltip>
			))}
		<Tooltip title="Show Details">
			<IconButton
				aria-label="Show Details"
				color="inherit"
				// onClick={clickDetailsBtn}
			>
				<DetailsIcon color="action" />
			</IconButton>
		</Tooltip>
	</>
)
UserActions.propTypes = {
	addFavorite: PropTypes.func,
	favorite: PropTypes.bool,
	isAuthenticated: PropTypes.bool,
	removeFavorite: PropTypes.func,
}
export default UserActions
