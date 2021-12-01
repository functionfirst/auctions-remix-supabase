import AuctionCard from '~/components/AuctionCard'

export default function AuctionList({ auctions }) {
  return (
    <div className="grid gap-6 sm:grid-cols-4">
      {
        auctions.map(auction => (
          <AuctionCard
            key={auction.id.toString()}
            auction={auction}
            className="border"
          />
        ))
      }
    </div>
  )
}
