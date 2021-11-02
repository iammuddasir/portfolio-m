import React from 'react';
import styled from 'styled-components';
import InstaIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';

function HomePage() {
	return (
		<HomePageStyled>
			<div className='particle-con'>
				<Particle />
			</div>
			<div className='typography'>
				<h1>
					Hi, I'm <span>Muddasir Vanekar</span>
				</h1>
				<p>UI/UX Designer & Front-End Developer</p>
				<div className='icons'>
					<a
						href='https://www.linkedin.com/in/muddasir-vanekar-029ab2126/'
						className='icon i-linkedin'>
						<LinkedInIcon />
					</a>
					<a href='https://github.com/iammuddasir' className='icon i-github'>
						<GithubIcon />
					</a>
					<a
						href='https://www.instagram.com/m._____v/'
						className='icon i-insta'>
						<InstaIcon />
					</a>
				</div>
			</div>
		</HomePageStyled>
	);
}

const HomePageStyled = styled.header`
	width: 100%;
	height: 100vh;
	position: relative;

	.typography {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 80%;
		p {
			font-size: 1.5rem;
		}
		.icons {
			display: flex;
			justify-content: center;
			margin-top: 1rem;
			.icon {
				display: flex;
				align-items: center;
				justify-content: center;
				transition: all 0.4s ease-in-out;
				cursor: pointer;
				&:hover {
					color: var(--primary-color);
				}
				&:not(:last-child) {
					margin-right: 1rem;
				}
				svg {
					margin: 0.5rem;
				}
			}
			.i-insta {
				&:hover {
					color: red;
				}
			}
			.i-github {
				&:hover {
					color: #5f4687;
				}
			}
		}
	}
`;

export default HomePage;
