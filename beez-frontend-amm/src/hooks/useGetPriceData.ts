import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useMulticallContract } from './useContract'
import ERC20_INTERFACE from '../constants/abis/erc20'
import {priceContracts, beezPriceContracts} from '../constants/eggPriceContracts'

type ApiResponse = {
  prices: {
    [key: string]: string
  }
  update_at: string
}

/**
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
 */
const api = 'https://api.pancakeswap.com/api/v1/price'

export const useGetPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(multicallContract){
          const {cakeAddress, busdAddress, lpAddress} = priceContracts;
          const calls = [
            [cakeAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
            [busdAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
          ];

          const [resultsBlockNumber, result] = await multicallContract.aggregate(calls);
          const [cakeAmount, busdAmount] = result.map(r=>ERC20_INTERFACE.decodeFunctionResult("balanceOf", r));
          const cake = new BigNumber(cakeAmount);
          const busd = new BigNumber(busdAmount);
          const cakePrice = busd.div(cake).toNumber();
          setData(cakePrice)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract])

  return data
}
export const useGetBeezPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(multicallContract){
          const {beezAddress, wbnbAddress, lpAddress, priceFeedAddress} = beezPriceContracts;
          const balanceCalls = [
            [beezAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
            [wbnbAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
            [priceFeedAddress, ERC20_INTERFACE.encodeFunctionData("latestRoundData", [])]
          ];
          const [resultsBlockNumber, result] = await multicallContract.aggregate(balanceCalls);

          const [beezAmount, bnbAmount] = result.map(r=>ERC20_INTERFACE.decodeFunctionResult("balanceOf", r));
          const beez = new BigNumber(beezAmount);
          const bnb = new BigNumber(bnbAmount);
          const beezPerBnb = bnb.div(beez).toNumber();

          const latestRoundData = [
            [priceFeedAddress, ERC20_INTERFACE.encodeFunctionData("latestRoundData", [])]
          ];
          const [resultsBlockNumber2, result2] = await multicallContract.aggregate(latestRoundData);

          const roundData = await result2.map(r=>ERC20_INTERFACE.decodeFunctionResult("latestRoundData", r));
          const bnbUSD = ( new BigNumber(roundData[0].answer._hex) ).toNumber() / 1e8

          const beezUsdPrice = beezPerBnb * bnbUSD

          setData(beezUsdPrice)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract])

  return data
}