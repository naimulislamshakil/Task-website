import {
	AppBar,
	Container,
	CssBaseline,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	Box,
	Grid,
} from '@mui/material';

import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import navigation from '../../constant/navigation';
import { Link } from 'react-router-dom';
import '../../index.css';

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	return (
		<Box>
			<CssBaseline />
			<AppBar position="static">
				<Grid container>
					<Grid item xs={6} md={12} className="nav-padding">
						<Toolbar disableGutters>
							<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
								<IconButton
									size="large"
									edge="start"
									color="inherit"
									aria-label="menu"
									sx={{ mr: 2 }}
									onClick={handleOpenNavMenu}
								>
									<MenuIcon />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorElNav}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'left',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'left',
									}}
									open={Boolean(anchorElNav)}
									onClose={handleCloseNavMenu}
									sx={{
										display: { xs: 'block', md: 'none' },
									}}
								>
									{navigation.map((page, i) => (
										<MenuItem key={i} onClick={handleCloseNavMenu}>
											<Link
												to={page.link}
												textAlign="center"
												style={{
													textDecoration: 'none',
													fontSize: '18px',
													color: 'black',
												}}
											>
												{page.name}
											</Link>
										</MenuItem>
									))}
								</Menu>
							</Box>
							<Link
								to="/"
								style={{
									textDecoration: 'none',
									fontSize: '18px',
									color: 'white',
								}}
							>
								<Box
									sx={{
										display: {
											xs: 'none',
											md: 'flex',
											justifyContent: 'center',
										},
									}}
								>
									<Typography>Test Website</Typography>
								</Box>
							</Link>

							<Box
								sx={{
									flexGrow: 1,
									display: { xs: 'none', md: 'flex', justifyContent: 'center' },
								}}
							>
								{navigation.map((page, i) => (
									<MenuItem key={i} onClick={handleCloseNavMenu}>
										<Link
											to={page.link}
											textAlign="center"
											style={{
												textDecoration: 'none',
												fontSize: '18px',
												color: 'white',
											}}
										>
											{page.name}
										</Link>
									</MenuItem>
								))}
							</Box>
						</Toolbar>
					</Grid>
				</Grid>
			</AppBar>
		</Box>
	);
};

export default Navbar;
