import {
	Box,
	Button,
	Checkbox,
	CssBaseline,
	FormControl,
	FormControlLabel,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createDataAction, getDataAction } from '../../Redux/Action/index';

const Home = () => {
	const [value, setValue] = useState('');
	const [name, setName] = useState('');
	const [checkbox, setCheckbox] = useState(false);
	const dispatch = useDispatch();

	const { message } = useSelector((state) => state.datas);
	const { message: mes, error, loading } = useSelector((state) => state.create);

	console.log({ mes, error, loading });

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		dispatch(getDataAction());
	}, [dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const input = { name, selector: value };
		dispatch(createDataAction(input));
	};

	if (error) {
		toast.error(error.message);
	}

	if (mes.status === 'Success') {
		console.log('yety');
		toast.success(mes.message);
	}
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
							Please enter your name and pick the Sectors you are currently
							involved in.
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
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Agree to terms & condition."
								onClick={() => setCheckbox(!checkbox)}
							/>
							{checkbox === true && (
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
								>
									SAVE
								</Button>
							)}
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
