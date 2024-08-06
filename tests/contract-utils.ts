import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  TokenAdded,
  TokenRecieved,
  TokenTransferred,
  TokenWithdraw
} from "../generated/Contract/Contract"

export function createTokenAddedEvent(
  token: Address,
  price: BigInt,
  creator: Address,
  name: string,
  symbol: string
): TokenAdded {
  let tokenAddedEvent = changetype<TokenAdded>(newMockEvent())

  tokenAddedEvent.parameters = new Array()

  tokenAddedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenAddedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  tokenAddedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  tokenAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  tokenAddedEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )

  return tokenAddedEvent
}

export function createTokenRecievedEvent(
  token: Address,
  from: BigInt,
  amount: BigInt
): TokenRecieved {
  let tokenRecievedEvent = changetype<TokenRecieved>(newMockEvent())

  tokenRecievedEvent.parameters = new Array()

  tokenRecievedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenRecievedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromUnsignedBigInt(from))
  )
  tokenRecievedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokenRecievedEvent
}

export function createTokenTransferredEvent(
  token: Address,
  to: Address,
  amount: BigInt
): TokenTransferred {
  let tokenTransferredEvent = changetype<TokenTransferred>(newMockEvent())

  tokenTransferredEvent.parameters = new Array()

  tokenTransferredEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tokenTransferredEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokenTransferredEvent
}

export function createTokenWithdrawEvent(
  token: Address,
  to: Address,
  amount: BigInt
): TokenWithdraw {
  let tokenWithdrawEvent = changetype<TokenWithdraw>(newMockEvent())

  tokenWithdrawEvent.parameters = new Array()

  tokenWithdrawEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenWithdrawEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tokenWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokenWithdrawEvent
}
