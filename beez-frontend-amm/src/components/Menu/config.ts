import { MenuEntry } from '@pancakeswap-libs/uikit'
import {priceContracts, beezPriceContracts} from '../../constants/eggPriceContracts'

const hnyAddr = priceContracts.cakeAddress
const beezAddr = beezPriceContracts.beezAddress

const config: MenuEntry[] = [
 /*  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://safebeez.github.io/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange HNY',
        href: '/swap/?outputCurrency='.concat(hnyAddr)
      },
      {
        label: 'HNY Liquidity',
        href: '/add/BNB/'.concat(hnyAddr)
      },
      {
        label: 'Exchange BEEZ',
        href: '/swap/?outputCurrency='.concat(beezAddr)
      },
      {
        label: 'BEEZ Liquidity',
        href: '/add/BNB/'.concat(beezAddr)
      }
    ],
  },
  {
    label: 'Honeycomb',
    icon: 'FarmIcon',
    href: 'https://safebeez.github.io/',
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: 'https://safebeez.github.io//',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'HNY on PancakeSwap',
        href: 'https://pancakeswap.info/token/'.concat(hnyAddr),
      },
      {
        label: 'BEEZ on PancakeSwap',
        href: 'https://pancakeswap.info/token/'.concat(beezAddr),
      }, */
      /* {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/e',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currenc',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-ee7cbecdd23a16dfa5573df54d98f7caae03019',
      }, */
 /*    ],
  }, */
/*   {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://gfi-finance/',
      }
    ],
  }, */
 /*  {
    label: 'Partnership?',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Apply Here',
        href: 'https://github.codefi/',
      },
      {
        label: 'Info',
        href: 'https://github.defi/g',
      },
    ],
  }, */
]

export default config
