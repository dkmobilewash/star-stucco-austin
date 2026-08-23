import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const PLACE_ID = 'ChIJ0VY9HLtLW4YRoRzhoDm1iWQ'
const API_KEY = process.env.GOOGLE_PLACES_API_KEY

if (!API_KEY) {
  console.error('GOOGLE_PLACES_API_KEY environment variable is required')
  process.exit(1)
}

const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews,url&key=${API_KEY}`

async function fetchReviews() {
  console.log('Fetching reviews from Google Places API...')

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${res.statusText}`)
  }

  const data = await res.json()

  if (data.status !== 'OK') {
    throw new Error(`Places API error: ${data.status} - ${data.error_message || ''}`)
  }

  const { result } = data
  const output = {
    fetchedAt: new Date().toISOString(),
    placeId: PLACE_ID,
    name: result.name,
    rating: result.rating,
    totalReviews: result.user_ratings_total,
    googleUrl: result.url,
    reviews: (result.reviews || []).map((r) => ({
      author: r.author_name,
      authorUrl: r.author_url || '',
      profilePhoto: r.profile_photo_url || '',
      rating: r.rating,
      text: r.text || '',
      date: new Date(r.time * 1000).toISOString().split('T')[0],
      relativeTime: r.relative_time_description,
    })),
  }

  const outPath = join(__dirname, '..', 'src', 'data', 'googleReviews.json')
  writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n')
  console.log(`Wrote ${output.reviews.length} reviews to src/data/googleReviews.json`)
  console.log(`Rating: ${output.rating} (${output.totalReviews} reviews)`)
}

fetchReviews().catch((err) => {
  console.error('Failed to fetch reviews:', err.message)
  process.exit(1)
})
