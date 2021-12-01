// import Image from 'next/image'
// import Link from 'next/link'
// import { BlurData } from '@/components/BlurImage'
import { Link } from 'remix'

function AuctionCard({
  className = '',
  auction
}) {
  const imageUrl = auction.auction_images.length ? auction.auction_images[0].public_url : null

  return (
    <Link
      to={`/auctions/${auction.id}/${auction.slug}`}
      xprefetch="intent"
      title={auction.name}
      className={`shadow-sm rounded p-3 border border-gray-100 ${className}`}
    >
      { imageUrl ? <img
        src={imageUrl}
        title={auction.name}
        alt={auction.name}
        width="250"
        height="250"
        layout="intrinsic"
        placeholder="blur"
      /> : null }

      <h2 className="text-lg font-medium overflow-ellipsis overflow-hidden sm:truncate">
        {auction.name}
      </h2>
    </Link>
  )
}

export default AuctionCard
