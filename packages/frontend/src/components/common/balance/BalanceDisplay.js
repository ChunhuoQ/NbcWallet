import BN from 'bn.js';
import React from 'react';
import { Translate } from 'react-localize-redux';
import styled from 'styled-components';

import FiatBalance from './FiatBalance';
import { formatNearAmount, showInYocto, YOCTO_NEAR_THRESHOLD } from './helpers';
import CONFIG from '../../../config';
import classNames from '../../../utils/classNames';

const StyledContainer = styled.div`
    white-space: nowrap;
    line-height: normal;

    .dots {
        color: #4a4f54;
        margin: 0 12px 0 0;

        :after {
            content: '.';
            animation: link 1s steps(5, end) infinite;

            @keyframes link {
                0%,
                20% {
                    color: rgba(0, 0, 0, 0);
                    text-shadow: 0.3em 0 0 rgba(0, 0, 0, 0), 0.6em 0 0 rgba(0, 0, 0, 0);
                }
                40% {
                    color: #4a4f54;
                    text-shadow: 0.3em 0 0 rgba(0, 0, 0, 0), 0.6em 0 0 rgba(0, 0, 0, 0);
                }
                60% {
                    text-shadow: 0.3em 0 0 #4a4f54, 0.6em 0 0 rgba(0, 0, 0, 0);
                }
                80%,
                100% {
                    text-shadow: 0.3em 0 0 #4a4f54, 0.6em 0 0 #4a4f54;
                }
            }
        }
    }

    &.subtract {
        .near-amount {
            :before {
                content: '-';
            }
        }
    }

    &:not(.fiat-only) {
        .fiat-amount {
            color: #72727a;
            font-weight: 400;
            margin-top: 2px;
            font-size: 13px;
        }
    }
`;

const BalanceDisplay = ({
    amount,
    showSymbolNEAR = true,
    className,
    showBalanceInNEAR = true,
    showBalanceInUSD = true,
    nearTokenFiatValueUSD,
    showAlmostEqualSignUSD,
    showSignUSD,
    showSymbolUSD,
    totalAmount,
    showGenericSymbol = false,
    symbol,
    'data-test-id': testId,
}) => {
    const amountToShow = amount && formatNearAmount(amount);

    const getSymbol = () => {
        if (symbol) {
            return ` ${symbol}`;
        }
        if (showGenericSymbol) {
            return ' Ⓣ';
        }
        if (showSymbolNEAR) {
            return ` ${CONFIG.NEAR_ID}`;
        }
        return '';
    };

    const handleShowInYocto = (amount) => {
        if (new BN(amount).lte(YOCTO_NEAR_THRESHOLD)) {
            return showInYocto(amount);
        } else {
            return '';
        }
    };

    return (
        <StyledContainer
            title={handleShowInYocto(amount)}
            className={classNames([
                'balance',
                className,
                {
                    'fiat-only': !showBalanceInNEAR,
                },
            ])}
            data-test-id={testId}
        >
            {showBalanceInNEAR && (
                <>
                    {amount ? (
                        <div className='near-amount'>
                            {amountToShow}
                            {getSymbol().includes('near') ? 'NBC' : getSymbol()}
                        </div>
                    ) : (
                        <div className='dots tokensLoading'>
                            <Translate id='loadingNoDots' />
                        </div>
                    )}
                </>
            )}
            {showBalanceInUSD && (
                <div className='fiat-amount'>
                    <FiatBalance
                        totalAmount={totalAmount}
                        amount={amount}
                        nearTokenFiatValueUSD={nearTokenFiatValueUSD}
                        showAlmostEqualSignUSD={showAlmostEqualSignUSD}
                        showSignUSD={showSignUSD}
                        showSymbolUSD={showSymbolUSD}
                    />
                </div>
            )}
        </StyledContainer>
    );
};

export default BalanceDisplay;
