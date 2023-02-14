import React from 'react'
import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';

async function HomePage() {
// fetch the news data 
const news: NewsReponse = await fetchNews(categories.join(','));

console.log(news);

  return (
    <div>
      {/* NewsList - news props */}
    </div>
  )
}

export default HomePage;