import React from 'react';
import styled from 'styled-components';

import Token from './entry_types/Token';
import ChevronIcon from '../../svg/ChevronIcon';

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: #fafafa;
    border-radius: 8px;
    cursor: pointer;
    transition: 100ms;

    :hover {
        background-color: #f0f0f1;
    }

    > div {
        width: 100%;
        padding: 0px;
        color: #272729;
        font-weight: 600;
    }

    .icon {
        margin-right: 15px;
    }
`;

const SelectTokenButton = ({ token, onClick }) => {
    return (
        <StyledContainer
            onClick={onClick}
            className='select-token-btn'
            data-test-id='sendMoneyPageSelectTokenButton'
        >
            <Token
                translateIdTitle='sendV2.selectTokenButtonTitle'
                symbol={token.onChainFTMetadata?.symbol === 'NEAR'?'NBC':token.onChainFTMetadata?.symbol}
                icon={token.onChainFTMetadata?.icon}
            />
            <ChevronIcon color='#0072ce' />
        </StyledContainer>
    );
};

export default SelectTokenButton;
