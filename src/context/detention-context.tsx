import React, { createContext, useContext, useEffect, useState } from 'react';

export interface DetentionCase {
  name: string;
  dangerousLevel: string;
  detentionDate: string;
  detentionDays: number | '';
  dateOfAcceptance: string;
}

interface DetentionContextType {
  cases: DetentionCase[];
  updateCase: (idx: number, value: Partial<DetentionCase>) => void;
  addCase: () => void;
  removeCase: (idx: number) => void;
}

const STORAGE_KEY = 'detentionCases';
const DetentionContext = createContext<DetentionContextType | undefined>(undefined);

export const useDetention = () => {
  const ctx = useContext(DetentionContext);
  if (!ctx) throw new Error('useDetention must be used within DetentionProvider');
  return ctx;
};

export const DetentionProvider = ({ children }: { children: React.ReactNode }) => {
  const [cases, setCases] = useState<DetentionCase[]>(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) return JSON.parse(data);
    return [
      { name: '', dangerousLevel: '', detentionDate: '', detentionDays: 0, dateOfAcceptance: '' },
    ];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
  }, [cases]);

  const updateCase = (idx: number, value: Partial<DetentionCase>) => {
    setCases(prev => prev.map((item, i) => i === idx ? { ...item, ...value } : item));
  };

  const addCase = () => {
    setCases(prev => [
      ...prev,
      { name: '', dangerousLevel: '', detentionDate: '', detentionDays: 0, dateOfAcceptance: '' },
    ]);
  };

  const removeCase = (idx: number) => {
    setCases(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <DetentionContext.Provider value={{ cases, updateCase, addCase, removeCase }}>
      {children}
    </DetentionContext.Provider>
  );
}; 