// PortfolioPage.tsx
import React from 'react';
import PortfolioItem from './_components/PortfolioItem';
import portfolioData from '@/data/portfolioTestData.json';

const PortfolioPage = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="portfolio-list">
        {portfolioData.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
