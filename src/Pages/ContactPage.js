import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ContactItem from '../Components/ContactItem';
import InstaIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function ContactPage() {
	const phone = <PhoneIcon />;
	const email = <EmailIcon />;

	return (
		<MainLayout>
			<Title title={'Contact'} span={'Contact'} />
			<ContactPageStyled>
				<InnerLayout className={'contact-section'}>
					<div className='left-content'>
						<div className='contact-title'>
							<h4>Get In Touch</h4>
						</div>
					</div>
					<div className='right-content'>
						<ContactItem
							title={'Phone'}
							icon={phone}
							cont1={'+91-9944047678'}
						/>
						<ContactItem
							title={'Email'}
							icon={email}
							cont1={'v.muddasir@gmail.com'}
						/>
					</div>
					<div className='bottom-content'>
						<div className='icons'>
							<a
								href='https://www.linkedin.com/in/muddasir-vanekar-029ab2126/'
								className='icon i-linkedin'>
								<LinkedInIcon />
							</a>
							<a
								href='https://github.com/iammuddasir'
								className='icon i-github'>
								<GithubIcon />
							</a>
							<a
								href='https://www.instagram.com/m._____v/'
								className='icon i-insta'>
								<InstaIcon />
							</a>
						</div>
					</div>
				</InnerLayout>
			</ContactPageStyled>
		</MainLayout>
	);
}

const ContactPageStyled = styled.section`
	.contact-section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 2rem;
		@media screen and (max-width: 978px) {
			grid-template-columns: repeat(1, 1fr);
		}
		.right-content {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			@media screen and (max-width: 502px) {
				width: 70%;
			}
		}
		.contact-title {
			h4 {
				text-align: center;
				color: var(--white-color);
				padding: 8rem 0;
				font-size: 1.8rem;
			}
		}
	}
	.icons {
		display: flex;
		justify-content: center;
		margin-top: 8rem;
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
`;

export default ContactPage;
