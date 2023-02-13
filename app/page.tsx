import React from 'react'
import { categories } from '../constants';

async function HomePage() {
// fetch the news data 
const news: NewsResponse = await fetchNews(categories.join(','));

  return (
    <div>
      {/* NewsList - news props */}
    </div>
  )
}

export default HomePage;