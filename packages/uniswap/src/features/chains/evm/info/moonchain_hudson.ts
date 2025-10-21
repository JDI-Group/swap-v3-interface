import { CurrencyAmount, Token } from '@uniswap/sdk-core'
import { MOONCHAIN_LOGO } from 'ui/src/assets'
import { Chain as BackendChainId } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks'
import { DEFAULT_NATIVE_ADDRESS_LEGACY, getQuicknodeEndpointUrl } from 'uniswap/src/features/chains/evm/rpc'
import { buildChainTokens } from 'uniswap/src/features/chains/evm/tokens'
import {
  GqlChainId,
  NetworkLayer,
  RPCType,
  UniverseChainId,
  UniverseChainInfo,
} from 'uniswap/src/features/chains/types'
import { Platform } from 'uniswap/src/features/platforms/types/Platform'
import { ElementName } from 'uniswap/src/features/telemetry/constants'
import { moonchainHudson } from '@moonchain-mch/metadata'
const tokens = buildChainTokens({
  stables: {
    // USDC on BNB has non-default decimals
    USDC: new Token(UniverseChainId.MoonchainHudson, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC', 'USD Coin'),
    // USDT on BNB has non-default decimals
    USDT: new Token(UniverseChainId.MoonchainHudson, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD'),
  },
})

export const MOONCHAIN_HUDSON_CHAIN_INFO = {
  ...moonchainHudson,
  testnet: true,
  id: UniverseChainId.MoonchainHudson,
  platform: Platform.EVM,
  assetRepoNetworkName: undefined,
  backendChain: {
    chain: BackendChainId.MoonchainHudson as GqlChainId,
    backendSupported: true,
    nativeTokenBackendAddress: undefined,
  },
  blockPerMainnetEpochForChainId: 177888,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://bridge.mchain.ai',
  docs: 'https://docs.mchain.ai',
  elementName: ElementName.ChainBNB,
  explorer: {
    name: 'Moonchain Hudson Explorer',
    url: 'https://explorer.mchain.ai/',
    apiURL: 'https://explorer.mchain.ai/api',
  },
  interfaceName: 'moonchain_hudson',
  label: 'Moonchain Hudson',
  logo: MOONCHAIN_LOGO,
  name: 'Moonchain Hudson Testnet',
  nativeCurrency: {
    name: 'Moonchain Hudson',
    symbol: 'MCH',
    decimals: 18,
    address: DEFAULT_NATIVE_ADDRESS_LEGACY,
    logo: MOONCHAIN_LOGO,
  },
  networkLayer: NetworkLayer.L1,
  pendingTransactionsRetryOptions: undefined,
  rpcUrls: {
    [RPCType.Public]: { http: [getQuicknodeEndpointUrl(UniverseChainId.MoonchainHudson)] },
    [RPCType.Default]: { http: ['https://rpc.mchain.ai'] },
    [RPCType.Interface]: { http: [getQuicknodeEndpointUrl(UniverseChainId.MoonchainHudson)] },
  },
  spotPriceStablecoinAmountOverride: CurrencyAmount.fromRawAmount(tokens.USDC, 100e18),
  tokens,
  statusPage: undefined,
  supportsV4: true,
  urlParam: 'bnb',
  wrappedNativeCurrency: {
    name: 'Wrapped MCH',
    symbol: 'WMCH',
    decimals: 18,
    address: '0x1C5b8F35933d4C9BD0B49ca0b4F91475E1a6501b',
  },
  tradingApiPollingIntervalMs: 200,
} as const satisfies UniverseChainInfo
