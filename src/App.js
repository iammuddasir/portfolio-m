import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import styled from 'styled-components';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';
import ComingSoon from './Pages/ComingSoon';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, Switch as Switching } from 'react-router';
import Switch from '@material-ui/core/Switch';
import { IconButton } from '@material-ui/core';

function App() {
	const [theme, setTheme] = useState('dark-theme');
	const [checked, setChecked] = useState(false);
	const [navToggle, setNavToggle] = useState(false);

	useEffect(() => {
		document.documentElement.className = theme;
	}, [theme]);

	const themeToggler = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme');
			setChecked(false);
		} else {
			setTheme('light-theme');
			setChecked(true);
		}
	};

	return (
		<div className='App'>
			<Sidebar navToggle={navToggle} />

			<div className='theme'>
				<div className='light-dark-mode'>
					<div className='left-content'>
						<Brightness4Icon />
					</div>
					<div className='right-content'>
						<Switch
							value=''
							checked={checked}
							inputProps={{ 'aria-label': '' }}
							size='medium'
							onClick={themeToggler}
						/>
					</div>
				</div>
			</div>

			<div className='ham-burger-menu'>
				<IconButton onClick={() => setNavToggle(!navToggle)}>
					<MenuIcon />
				</IconButton>
			</div>

			<MainContentStyled>
				<Switching>
					<Route path='/' exact>
						<HomePage />
					</Route>
					<Route path='/about' exact>
						<AboutPage />
					</Route>
					<Route path='/resume' exact>
						<ResumePage />
					</Route>
					<Route path='/portfolios' exact>
						<PortfoliosPage />
					</Route>
					<Route path='/contact' exact>
						<ContactPage />
					</Route>
					<Route path='/comingsoon' exact>
						<ComingSoon />
					</Route>
				</Switching>
			</MainContentStyled>
		</div>
	);
}

const MainContentStyled = styled.main`
	position: relative;
	margin-left: 16.3rem;
	min-height: 100vh;
	@media screen and (max-width: 1200px) {
		margin-left: 0;
	}
`;

export default App;
