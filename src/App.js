import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';

function App() {
	return (
		<Box>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/list" element={<List />} />
			</Routes>
		</Box>
	);
}

export default App;
