// Lists we use as fallbacks on chains that our backend doesn't support
const COINGECKO_AVAX_LIST = 'https://tokens.coingecko.com/avalanche/all.json'
// MoonchainHudson token list - update this URL after hosting the list
const MOONCHAIN_HUDSON_LIST = 'https://raw.githubusercontent.com/JDI-Group/swap-v2-tokens/refs/heads/main/tokenlist-hudson.json'

export const DEFAULT_INACTIVE_LIST_URLS: string[] = [COINGECKO_AVAX_LIST, MOONCHAIN_HUDSON_LIST]
