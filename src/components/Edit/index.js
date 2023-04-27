import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<Box>
			<Typography>gfjhsdgjgds</Typography>
		</Box>
	);
};

export default Edit;
