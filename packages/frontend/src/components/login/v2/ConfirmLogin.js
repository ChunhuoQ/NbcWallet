import React, { useEffect, useState } from 'react';
import { Translate } from 'react-localize-redux';

import ConnectWithPrivateShard from './ConnectWithPrivateShard';
import GrantFullAccessModal from './GrantFullAccessModal';
import NetworkFeeAllowance from './NetworkFeeAllowance';
import PermissionItem from './PermissionItem';
import LoginStyle from './style/LoginStyle.css';
import { LOGIN_ACCESS_TYPES } from '../../../routes/LoginWrapper';
import AlertBanner from '../../common/AlertBanner';
import FormButton from '../../common/FormButton';
import FormButtonGroup from '../../common/FormButtonGroup';
import Container from '../../common/styled/Container.css';
import SafeTranslate from '../../SafeTranslate';
import SwapGraphic from '../../svg/SwapGraphic';
import { useSelector } from 'react-redux';
import { selectLoginError } from '../../../redux/slices/activeAccount';

export default ({
    signedInAccountId,
    onClickCancel,
    onClickConnect,
    loginAccessType,
    appReferrer,
    contractId,
    publicKey,
    contractIdUrl,
    successUrlIsValid,
    privateShardInfo,
}) => {
    const [loggingIn, setLoggingIn] = useState(false);
    const [loginRetryCount, setLoginRetryCount] = useState(0);
    const [showGrantFullAccessModal, setShowGrantFullAccessModal] = useState(false);
    const isLoginError = useSelector(selectLoginError);

    useEffect(() => {
        if (isLoginError) {
            setLoggingIn(false);
        }
    }, [loginRetryCount, isLoginError]);

    const handleClickConnect = async () => {
        setLoginRetryCount((s) => s + 1);
        try {
            setLoggingIn(true);
            await onClickConnect();
        } catch {
            setLoggingIn(false);
        }
    };

    return (
        <>
            <Container className='small-centered border'>
                <LoginStyle className='confirm-login'>
                    <SwapGraphic className='swap-graphic' />
                    <h3>
                        <Translate id='login.v2.connectConfirm.title' />
                        <div>{signedInAccountId}</div>
                    </h3>
                    <div className='desc'>
                        <Translate>
                            {({ translate }) => (
                                <SafeTranslate
                                    id='login.v2.connectConfirm.desc'
                                    data={{
                                        contractIdUrl: contractIdUrl,
                                        appReferrer:
                                            appReferrer || translate('sign.unknownApp'),
                                        accessType: translate(
                                            `login.v2.connectConfirm.${loginAccessType}`
                                        ),
                                    }}
                                />
                            )}
                        </Translate>
                    </div>
                    {privateShardInfo && (
                        <div className='desc'>
                            <ConnectWithPrivateShard
                                privateShardInfo={privateShardInfo}
                            />
                        </div>
                    )}
                    {loginAccessType === LOGIN_ACCESS_TYPES.LIMITED_ACCESS ? (
                        <LimitedAccessUI />
                    ) : (
                        <FullAccessUI />
                    )}
                    {publicKey &&
                        loginAccessType === LOGIN_ACCESS_TYPES.LIMITED_ACCESS &&
                        !privateShardInfo && (
                            <NetworkFeeAllowance
                                contractId={contractId}
                                contractIdUrl={contractIdUrl}
                            />
                        )}
                    <FormButtonGroup>
                        <FormButton
                            onClick={onClickCancel}
                            color='gray-blue'
                            disabled={loggingIn}
                            data-test-id='dapp-deny'
                        >
                            <Translate id='button.cancel' />
                        </FormButton>
                        <FormButton
                            onClick={() => {
                                if (loginAccessType === LOGIN_ACCESS_TYPES.FULL_ACCESS) {
                                    setShowGrantFullAccessModal(true);
                                } else {
                                    handleClickConnect();
                                }
                            }}
                            disabled={loggingIn || !successUrlIsValid}
                            sending={loggingIn}
                            sendingString='button.connecting'
                            data-test-id='dapp-grant'
                        >
                            <Translate id='button.connect' />
                        </FormButton>
                    </FormButtonGroup>
                </LoginStyle>
            </Container>
            {showGrantFullAccessModal && (
                <GrantFullAccessModal
                    open={showGrantFullAccessModal}
                    onClose={() => setShowGrantFullAccessModal(false)}
                    onConfirm={handleClickConnect}
                    signedInAccountId={signedInAccountId}
                    appReferrer={appReferrer}
                    contractId={contractId}
                    contractIdUrl={contractIdUrl}
                    loggingIn={loggingIn}
                />
            )}
        </>
    );
};

const LimitedAccessUI = () => (
    <>
        <PermissionItem translateId='login.v2.connectConfirm.permissions.viewAddress' />
        <PermissionItem translateId='login.v2.connectConfirm.permissions.viewBalance' />
        <PermissionItem translateId='login.v2.connectConfirm.permissions.callMethodsOnContract' />
        <PermissionItem
            permitted={false}
            translateId='login.v2.connectConfirm.permissions.notTransferTokens'
        />
    </>
);

const FullAccessUI = () => (
    <>
        <PermissionItem translateId='login.v2.connectConfirm.permissions.viewAddress' />
        <PermissionItem translateId='login.v2.connectConfirm.permissions.viewBalance' />
        <PermissionItem translateId='login.details.createNewAccounts' />
        <PermissionItem translateId='login.details.transferTokens' />
        <PermissionItem translateId='login.details.deploySmartContracts' />
        <PermissionItem translateId='login.details.callFunctions' />
        <PermissionItem translateId='login.details.stakeAndUnstake' />
        <PermissionItem translateId='login.details.createAndDeleteAccessKeys' />
        <AlertBanner title='login.v2.connectConfirm.fullAccessWarning' theme='warning' />
    </>
);
