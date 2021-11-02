import React from 'react';
import styled from 'styled-components';

function ComingSoon() {
	return (
		<SoonStyled>
			<h1>Launching Soon...</h1>
		</SoonStyled>
	);
}

const SoonStyled = styled.section`
	display: flex;
	justify-content: center;
	padding: 10rem;
`;

export default ComingSoon;
