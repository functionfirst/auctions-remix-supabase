import { supabase } from '~/libs/initSupabase'
import { Link, useLoaderData } from 'remix'
import type { Auction } from '~/models/Auction'

export const loader = async () => {
  const { data: auctions } = await supabase.from<Auction>('auctions').select('id, name, slug, enabled, auction_images(public_url)').limit(10)

  return auctions
}

export default function Discover() {  
  const auctions: Auction[] = useLoaderData<Auction[]>()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h1 className="font-semibold text-2xl mb-4">
        Discover
      </h1>

      <ul>
        {auctions.map(auction => (
          <li key={auction.slug}>
            <Link to={auction.slug}>{auction.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
