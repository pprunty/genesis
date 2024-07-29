"use client";

// pages/snap-scroll-view.tsx
import React, { useState, useEffect } from 'react';
import { SnapScrollView, SnapScrollViewItem } from '@/components/SnapScrollView'; // Adjust path as necessary
import PageLoader from "@/components/PageLoader";

const mockData = [
  { id: 'section1', content: 'Section 1 Content' },
  { id: 'section2', content: 'Section 2 Content' },
  { id: 'section3', content: 'Section 3 Content' },
  { id: 'section4', content: 'Section 4 Content' },
  { id: 'section5', content: 'Section 5 Content' },
];

const SnapScrollPage = () => {
 const [fetchedArticles, setFetchedArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await mockFetchArticles();
        setFetchedArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <PageLoader/>;
  }

  return (
    <SnapScrollView items={mockData} enableDynamicRouting={false}>
      {mockData.map(item => (
        <SnapScrollViewItem key={item.id}>
          <div style={{ padding: '20px', textAlign: 'center', fontSize: '24px' }}>
            {item.content}
          </div>
        </SnapScrollViewItem>
      ))}
    </SnapScrollView>
  );
};

export default SnapScrollPage;
