import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
	const briefcase = <BusinessCenterIcon />;
	const school = <SchoolIcon />;
	return (
		<ResumeStyled>
			<Title title={'Resume'} span={'resume'} />
			<InnerLayout>
				<div className='small-title'>
					<SmallTitle icon={briefcase} title={'Working Experience'} />
				</div>
				<div className='resume-content'>
					<ResumeItem
						year={'2020 - 2021'}
						title={'Design & Development'}
						subTitle={'Buybydeal'}
						text={'Buybydeal is an online supermarket and food delivery app.'}
					/>
					<ResumeItem
						year={'2020 - Present'}
						title={'Web & Mobile Design'}
						subTitle={'Freelance'}
						text={'UI/UX Designer.'}
					/>
				</div>
				<div className='small-title u-small-title-margin'>
					<SmallTitle icon={school} title={'Educational Qualifications'} />
				</div>
				<div className='resume-content '>
					<ResumeItem
						year={'2015 - 2019   '}
						title={'B.E - Computer Science'}
						subTitle={'Anna University'}
						text={''}
					/>
					<ResumeItem
						year={'2013 - 2015'}
						title={'HSC'}
						subTitle={'Adarsh Matric. Hr. Sec. School'}
						text={' '}
					/>
				</div>
			</InnerLayout>
		</ResumeStyled>
	);
}

const ResumeStyled = styled.section`
	.small-title {
		padding-bottom: 3rem;
	}
	.u-small-title-margin {
		margin-top: 4rem;
	}

	.resume-content {
		border-left: 2px solid var(--border-color);
	}
`;
export default Resume;
