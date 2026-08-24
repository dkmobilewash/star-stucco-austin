import googleData from './googleReviews.json'

export interface Review {
  author: string
  rating: number
  text: string
  date: string
  authorUrl?: string
  profilePhoto?: string
}

const googleReviewAuthors = new Set(googleData.reviews.map((r) => r.author))

const googleReviews: Review[] = googleData.reviews.map((r) => ({
  author: r.author,
  rating: r.rating,
  text: r.text,
  date: r.date,
  authorUrl: r.authorUrl,
  profilePhoto: r.profilePhoto,
}))

const additionalReviews: Review[] = [
  {
    author: 'Bella Marie',
    rating: 5,
    text: 'From beginning to end the project I needed done they handled it with expert care and I am truly appreciative of the experience.',
    date: '2025-01-10',
  },
  {
    author: 'Adia Yandrisovitz',
    rating: 5,
    text: 'Star Stucco Co. was amazing! Great communication, attention to detail, went above and beyond. Definitely recommend!',
    date: '2025-02-05',
  },
  {
    author: 'DeShawn Skidmore-Haywood',
    rating: 5,
    text: 'Attention to detail is something that is appreciated and this company definitely has that.',
    date: '2024-11-20',
  },
  {
    author: 'Deshawn Skidmore',
    rating: 5,
    text: 'This is one of the most transparent and honest contractors I have been able to work with.',
    date: '2024-11-18',
  },
  {
    author: 'Bryanna Rodriguez',
    rating: 5,
    text: '10/10 recommend this company! Excellent communication skills and great with their clients.',
    date: '2025-03-01',
  },
  {
    author: 'Riasha Mariam',
    rating: 5,
    text: 'Best contractors in the state. They are so attentive to detail, they deserve every single applause.',
    date: '2025-04-10',
  },
  {
    author: 'Daniel Moreno',
    rating: 5,
    text: 'Amazing service, best in Austin for sure.',
    date: '2025-04-20',
  },
  {
    author: 'Robert Cortez',
    rating: 5,
    text: 'One of the best stuccos I have ever used. Easy to use, easy to buy, and came in the mail very quick.',
    date: '2024-08-15',
  },
  {
    author: 'Manda Panda',
    rating: 5,
    text: 'Had some worries whenever I went with them but one of the best decisions I ever made buying this stucco.',
    date: '2024-07-20',
  },
  {
    author: "Hannah's Empire",
    rating: 5,
    text: 'Really great company, definitely will be patronizing them in the future.',
    date: '2024-12-01',
  },
  {
    author: 'Aeli',
    rating: 5,
    text: 'Great service! 10/10.',
    date: '2025-05-01',
  },
  {
    author: 'Mandy Chase',
    rating: 5,
    text: 'Set up a quote for today, followed up promptly, and everything was handled professionally.',
    date: '2025-02-10',
  },
  {
    author: 'Richard Petes',
    rating: 5,
    text: 'The best and most respectful people in town.',
    date: '2024-04-15',
  },
  {
    author: 'Meff Harris',
    rating: 5,
    text: 'Worked on my house, great job.',
    date: '2024-05-01',
  },
  {
    author: 'Caden Hudson',
    rating: 5,
    text: 'Willing to help with anything.',
    date: '2024-06-10',
  },
  {
    author: 'Imagine Smith',
    rating: 5,
    text: 'Awesome business!',
    date: '2024-09-01',
  },
  {
    author: 'Nadiyah Y Muhammad',
    rating: 5,
    text: 'Great business!',
    date: '2024-09-15',
  },
  {
    author: 'Stephanie',
    rating: 5,
    text: 'Great people to work with.',
    date: '2024-10-01',
  },
  {
    author: 'Ace of Spades',
    rating: 5,
    text: 'Very good.',
    date: '2025-05-10',
  },
  {
    author: 'Thomas Avila',
    rating: 5,
    text: '',
    date: '2024-05-20',
  },
  {
    author: 'Tom Avila',
    rating: 5,
    text: '',
    date: '2024-05-22',
  },
  {
    author: 'Anjelita Reyes',
    rating: 5,
    text: '',
    date: '2024-06-15',
  },
  {
    author: 'Man Pan',
    rating: 5,
    text: '',
    date: '2024-08-01',
  },
  {
    author: 'John Carlson',
    rating: 5,
    text: '',
    date: '2025-02-25',
  },
  {
    author: 'Zion Romero',
    rating: 5,
    text: '',
    date: '2025-04-25',
  },
]

export const reviews: Review[] = [
  ...googleReviews,
  ...additionalReviews.filter((r) => !googleReviewAuthors.has(r.author)),
]

export const reviewStats = {
  totalReviews: googleData.totalReviews,
  averageRating: googleData.rating,
  platform: 'Google' as const,
  googleUrl: googleData.googleUrl,
  placeId: googleData.placeId,
}
