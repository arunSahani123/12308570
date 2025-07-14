import React, { createContext, useState, useEffect } from 'react';
import logger from '../utils/logger';

export const URLContext = createContext();

const generateUniqueID = () => {
  return Math.random().toString(36).substr(2, 6);
};

export const URLProvider = ({ children }) => {
  const [urlData, setUrlData] = useState(() => {
    const storedData = localStorage.getItem('urlData');
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('urlData', JSON.stringify(urlData));
  }, [urlData]);

  const addURL = ({ originalURL, shortcode, validity }) => {
    // Check for shortcode collision
    const isCustom = !!shortcode;
    const shortCodeToUse = shortcode || generateUniqueID();

    if (urlData.some(entry => entry.shortCode === shortCodeToUse)) {
      logger.error(`Shortcode collision: ${shortCodeToUse}`);
      return { error: 'Shortcode already exists.' };
    }

    const createdAt = new Date();
    const expiryDate = new Date(createdAt.getTime() + validity * 60000);

    const newEntry = {
      originalURL,
      shortCode: shortCodeToUse,
      createdAt,
      expiryDate,
      clicks: [],
    };

    setUrlData(prev => [...prev, newEntry]);
    logger.info(`Shortened URL: ${shortCodeToUse} for ${originalURL}`);
    return { shortCode: shortCodeToUse, expiryDate };
  };

  const recordClick = (shortCode, source) => {
    setUrlData(prev =>
      prev.map(entry => {
        if (entry.shortCode === shortCode) {
          const now = new Date();
          return {
            ...entry,
            clicks: [...entry.clicks, { timestamp: now, source, location: 'unknown' }]
          };
        }
        return entry;
      })
    );
  };

  const getStats = () => {
    return urlData;
  };

  return (
    <URLContext.Provider value={{ urlData, addURL, recordClick, getStats }}>
      {children}
    </URLContext.Provider>
  );
};