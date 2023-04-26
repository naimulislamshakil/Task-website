import { Copyright } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControl,
	FormControlLabel,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	ThemeProvider,
	Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
							// onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 1 }}
						>
							<TextField
								margin="normal"
								required
								fullWidth
								id="name"
								label="Name"
								name="name"
								autoComplete="text"
								autoFocus
							/>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Age</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value="10"
									label="Age"

									// onChange={handleChange}
								>
									<Typography variant="p" style={{ paddingLeft: '5px' }}>
										jhysadgyas
									</Typography>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Agree to terms & condition."
							/>
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

export default Home;
