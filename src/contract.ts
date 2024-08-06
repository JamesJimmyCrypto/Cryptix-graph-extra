import {
  TokenAdded as TokenAddedEvent,
  TokenRecieved as TokenRecievedEvent,
  TokenTransferred as TokenTransferredEvent,
  TokenWithdraw as TokenWithdrawEvent
} from "../generated/Contract/Contract"
import {
  TokenAdded,
  TokenRecieved,
  TokenTransferred,
  TokenWithdraw
} from "../generated/schema"

export function handleTokenAdded(event: TokenAddedEvent): void {
  let entity = new TokenAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.price = event.params.price
  entity.creator = event.params.creator
  entity.name = event.params.name
  entity.symbol = event.params.symbol

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenRecieved(event: TokenRecievedEvent): void {
  let entity = new TokenRecieved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.from = event.params.from
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenTransferred(event: TokenTransferredEvent): void {
  let entity = new TokenTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenWithdraw(event: TokenWithdrawEvent): void {
  let entity = new TokenWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
