import * as nearApiJs from 'near-api-js';
import { parseNearAmount } from 'near-api-js/lib/utils/format';

export default {
    ACCOUNT_HELPER_URL: 'https://api-testnet.nearblocks.io/v1/kitwallet',
    ACCOUNT_KITWALLET_HELPER_URL: 'https://helper.testnet.nearprotocol.com',
    ACCOUNT_ID_SUFFIX: 'testnet',
    ACCESS_KEY_FUNDING_AMOUNT: nearApiJs.utils.format.parseNearAmount('0.25'),
    DISABLE_CREATE_ACCOUNT: false,
    EXPLORE_APPS_URL: 'https://awesomenear.com/',
    EXPLORE_DEFI_URL: 'https://awesomenear.com/categories/defi/',
    EXPLORER_URL: 'https://testnet.nearblocks.io',
    GLEAP_FRONTEND_API_KEY: 'Pc07nwsDmsVoWYJJj9BgES87xE7RCW74',
    HIDE_SIGN_IN_WITH_LEDGER_ENTER_ACCOUNT_ID_MODAL: false,
    INDEXER_SERVICE_URL: 'https://api-testnet.nearblocks.io/v1/kitwallet',
    INDEXER_FASTNEAR_SERVICE_URL: 'https://api.fastnear.com',
    INDEXER_NEARBLOCK_SERVICE_URL: 'https://api-testnet.nearblocks.io',
    INDEXER_NEARBLOCK_EXPERIMENTAL_SERVICE_URL: 'https://api-testnet.nearblocks.io',
    LINKDROP_GAS: '100000000000000',
    LOCKUP_ACCOUNT_ID_SUFFIX: 'lockup.devnet',
    MIN_BALANCE_FOR_GAS: nearApiJs.utils.format.parseNearAmount('0.05'),
    MIN_BALANCE_TO_CREATE: nearApiJs.utils.format.parseNearAmount('0.1'),
    MOONPAY_API_KEY: 'pk_test_wQDTsWBsvUm7cPiz9XowdtNeL5xasP9',
    MOONPAY_API_URL: 'https://api.moonpay.com',
    MOONPAY_BUY_URL: 'https://buy.moonpay.io?apiKey=',
    TRANSAK_API_KEY: '449da987-df12-4239-9e4e-9d5495062902',
    TRANSAK_BUY_URL: 'https://staging-global.transak.com/',
    UTORG_ORDER_URL: 'https://app.utorg.pro/direct/wallet.near.org/',
    MULTISIG_CONTRACT_HASHES: [
        // https://github.com/near/core-contracts/blob/fa3e2c6819ef790fdb1ec9eed6b4104cd13eb4b7/multisig/src/lib.rs
        '7GQStUCd8bmCK43bzD8PRh7sD2uyyeMJU5h8Rj3kXXJk',
        // https://github.com/near/core-contracts/blob/fb595e6ec09014d392e9874c2c5d6bbc910362c7/multisig/src/lib.rs
        'AEE3vt6S3pS2s7K6HXnZc46VyMyJcjygSMsaafFh67DF',
        // https://github.com/near/core-contracts/blob/636e7e43f1205f4d81431fad0be39c5cb65455f1/multisig/src/lib.rs
        '8DKTSceSbxVgh4ANXwqmRqGyPWCuZAR1fCqGPXUjD5nZ',
        // https://github.com/near/core-contracts/blob/f93c146d87a779a2063a30d2c1567701306fcae4/multisig/res/multisig.wasm
        '55E7imniT2uuYrECn17qJAk9fLcwQW4ftNSwmCJL5Di',
    ],
    MULTISIG_MIN_AMOUNT: '4',
    NETWORK_ID: 'default',
    //https://rpc.testnet.near.org
    NODE_URL: 'http://206.238.196.207:3030/',
    NODE_ARCHIVAL_URL: 'https://archival-rpc.testnet.near.org',
    REACT_APP_USE_TESTINGLOCKUP: true,
    //75d1dabd0ab646329fad8a3e7d6c761d
    //SENTRY_DSN:
      //  'https://cc721d003629f34a9c666113318391d0@o398573.ingest.sentry.io/5254526',
    SENTRY_RELEASE: 'development',
    SHOW_PRERELEASE_WARNING: false,
    SMS_BLACKLIST: [],
    STAKING_GAS_BASE: '25000000000000', // 25 Tgas
    WHITELISTED_CONTRACTS: ['meta.pool.testnet'],
    NEAR_TOKEN_ID: 'wrap.testnet',
    FARMING_CLAIM_GAS: parseNearAmount('0.00000000015'),
    FARMING_CLAIM_YOCTO: '1',
    REF_FINANCE_API_ENDPOINT: 'https://testnet-indexer.ref-finance.com',
    REF_FINANCE_CONTRACT: 'ref-finance-101.testnet',
    USN_CONTRACT: 'usdn.testnet',
    USDT_CONTRACT: 'usdt.fakes.testnet',
    HAPI_PROTOCOL_ADDRESS: 'proxy.contracts.sergei24.testnet',
    CALIMERO_URL: 'https://app.calimero.network',
};
