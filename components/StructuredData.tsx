'use client';

import { useEffect, useId } from 'react';

interface StructuredDataProps {
  data: object | object[];
}

/**
 * Component to inject structured data (JSON-LD) into the page
 * Supports single object or array of objects
 */
export function StructuredData({ data }: StructuredDataProps) {
  const id = useId();
  const uniqueId = `structured-data-${id.replace(/:/g, '-')}`;

  useEffect(() => {
    const schemas = Array.isArray(data) ? data : [data];
    
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `${uniqueId}-${index}`;
      document.head.appendChild(script);
    });
    
    return () => {
      schemas.forEach((_, index) => {
        const scriptToRemove = document.getElementById(`${uniqueId}-${index}`);
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      });
    };
  }, [data, uniqueId]);

  return null;
}
