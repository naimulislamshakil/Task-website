import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDataAction } from '../../Redux/Action';

const List = () => {
	const dispatch = useDispatch();

	const { message } = useSelector((state) => state.allData);

	useEffect(() => {
		dispatch(getAllDataAction());
	}, [dispatch]);

	console.log(message);
	return (
		<Box>
			<Typography variant="h2">hgfadytsd6t</Typography>
		</Box>
	);
};

export default List;
