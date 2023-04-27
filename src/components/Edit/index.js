import {
	Button,
	CssBaseline,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataAction, getDataByIdAction } from '../../Redux/Action';

const Edit = () => {
	const [value, setValue] = useState('');
	const [name, setName] = useState('');
	const { id } = useParams();
	const dispatch = useDispatch();

	const { message: singleData } = useSelector((state) => state.getSingleData);
	const { message } = useSelector((state) => state.datas);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		dispatch(getDataByIdAction(id));
		dispatch(getDataAction());
	}, [dispatch, id]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const input = { name, selector: value };
	};

	return (
		<Box>
			<Grid container>
				<Grid
					item
					xs={10}
					md={12}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						margin: 'auto',
					}}
				>
					<CssBaseline />
					<Box marginTop={'80px'}>
						<Typography component="h4" variant="p" textAlign="center">
							EDIT
						</Typography>
						<Box
							component="form"
							onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 1 }}
						>
							<TextField
								margin="normal"
								required
								fullWidth
								id="name"
								defaultValue={singleData.name}
								onBlur={(e) => setName(e.target.value)}
								label="Name"
								name="name"
								autoComplete="text"
								autoFocus
							/>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Selector</InputLabel>
								<Select
									required
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={value}
									label="Selector"
									onChange={handleChange}
								>
									{message.map((data, i) =>
										data.product.map((value) => (
											<MenuItem value={value}>{value}</MenuItem>
										))
									)}
								</Select>
							</FormControl>

							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								SAVE
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Edit;
