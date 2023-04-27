import { CloseFullscreen } from '@mui/icons-material';
import {
	Box,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllDataAction } from '../../Redux/Action';

const List = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { message } = useSelector((state) => state.allData);

	useEffect(() => {
		dispatch(getAllDataAction());
	}, [dispatch]);

	const edit = (id) => {
		navigate(`/edit/${id}`);
	};
	return (
		<Box>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">NAME</TableCell>
							<TableCell align="center">SELECTOR</TableCell>
							<TableCell align="center">EDIT BUTTON</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{message.data &&
							message.data.map((row) => (
								<TableRow
									key={row.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row" align="center">
										{row.name}
									</TableCell>
									<TableCell align="center">{row.selector}</TableCell>
									<TableCell align="center">
										<Button onClick={() => edit(row._id)} variant="outlined">
											EDIT
										</Button>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default List;
