export enum Status {
  ACTIVE = 'active',
  FEATURED = 'featured',
  DELETED = 'deleted'
}

export type Auction = {
  id: number,
  name: string,
  slug: string,
  description: string,
  status: Status
}
