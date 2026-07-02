import { thinStoneVeneerData } from '../../data/service-locations/thin-stone-veneer'
import ServiceLocationTemplate from '../ServiceLocationTemplate'

export default function ThinStoneVeneerLocation() {
  return <ServiceLocationTemplate serviceSlug="thin-stone-veneer" data={thinStoneVeneerData} />
}
