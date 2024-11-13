import React from 'react';

interface PortfolioItemType {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface PortfolioItemProps {
  item: PortfolioItemType;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-item">
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </a>
  );
};

export default PortfolioItem;
