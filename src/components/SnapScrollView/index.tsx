"use client";

import React, { useEffect, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation';
import { debounce } from 'lodash';

const SnapContainer = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  /* Smoother snap scrolling */
  scroll-behavior: smooth;

  /* Hide scrollbar for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SnapItem = styled.div`
  scroll-snap-align: start;
  flex: 0 0 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
  transform: translate3d(0, 0, 0);
`;

interface SnapScrollViewProps {
  children: React.ReactNode;
  items: { id: string }[];
  enableDynamicRouting?: boolean;  // New prop to control dynamic routing
}

const SnapScrollView: React.FC<SnapScrollViewProps> = ({ children, items, enableDynamicRouting = true }) => {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateURL = useCallback((index: number) => {
    if (enableDynamicRouting && index >= 0 && index < items.length) {
      const newPath = `/articles/${items[index].id}`;
      window.history.replaceState({ path: newPath }, '', newPath);
    }
  }, [enableDynamicRouting, items]);

  const handleScroll = useCallback(
    debounce(() => {
      const snapContainer = containerRef.current;
      if (snapContainer) {
        const index = Math.round(snapContainer.scrollTop / snapContainer.clientHeight);
        if (index !== currentIndex) {
          setCurrentIndex(index);
          updateURL(index);
        }
      }
    }, 100),
    [currentIndex, updateURL]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      handleScroll.cancel();
    };
  }, [handleScroll]);

  useEffect(() => {
    if (enableDynamicRouting) {
      const articleId = pathname.split('/').pop();
      const index = items.findIndex(item => item.id === articleId);
      const snapContainer = containerRef.current;
      if (snapContainer && index !== -1 && index !== currentIndex) {
        snapContainer.scrollTo({
          top: index * snapContainer.clientHeight,
          behavior: 'smooth',
        });
        setCurrentIndex(index);
      }
    }
  }, [pathname, items, currentIndex, enableDynamicRouting]);

  return (
    <SnapContainer ref={containerRef}>
      {children}
    </SnapContainer>
  );
};

interface SnapScrollViewItemProps {
  children: React.ReactNode;
}

const SnapScrollViewItem: React.FC<SnapScrollViewItemProps> = ({ children }) => {
  return <SnapItem>{children}</SnapItem>;
};

export { SnapScrollView, SnapScrollViewItem };
