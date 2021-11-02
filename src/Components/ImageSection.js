import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
function ImageSection() {
	return (
		<ImageSectionStyled>
			<div className='right-content'>
				<h4>
					I am <span>Muddasir Vanekar</span>
				</h4>
				<p className='paragraph'>
					UI/UX designer & Front-End developer. I am a guy who likes making
					weird things with web technologies. I like to resolve design problems,
					create smart user interface and imagine useful interaction, developing
					rich web experiences & web applications.
				</p>
				<div className='about-info'>
					<div className='info-title'>
						<p>Full Name</p>
						<p>Age</p>
						<p>Nationality </p>
						<p>Languages </p>
						<p>Location</p>
						<p>Service</p>
					</div>
					<div className='info'>
						<p>: Muddasir Vanekar</p>
						<p>: 24</p>
						<p>: Indian </p>
						<p>: Urdu, Hindi, English </p>
						<p>: Vellore, India</p>
						<p>: Freelance</p>
					</div>
				</div>
				<PrimaryButton title={'Download Cv'} />
			</div>
		</ImageSectionStyled>
	);
}

const ImageSectionStyled = styled.div`
	margin-top: 5rem;
	display: flex;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		.left-content {
			margin-bottom: 2rem;
		}
	}
	.right-content {
		width: 100%;
		h4 {
			font-size: 2rem;
			color: var(--white-color);
			span {
				font-size: 2rem;
			}
		}
		.paragraph {
			padding: 1rem 0;
		}
		.about-info {
			display: flex;
			padding-bottom: 1.4rem;
			.info-title {
				padding-right: 3rem;
				p {
					font-weight: 600;
				}
			}
			.info-title,
			.info {
				p {
					padding: 0.3rem 0;
				}
			}
		}
	}
`;
export default ImageSection;
