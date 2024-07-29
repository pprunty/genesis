'use client';

import React, { useState, useTransition } from 'react';
import { Locale } from '@/config';
import { setUserLocale } from '@/services/locale';

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  function handleSelect(value: string) {
    const locale = value as Locale;
    setSelectedValue(value);
    setIsOpen(false);
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="locale-switcher">
      <button
        aria-label={label}
        className={`locale-trigger ${isPending ? 'pending' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="locale-icon">🌍</span> {/* Use a Unicode character or an image */}
        <span className="locale-selected">{items.find(item => item.value === selectedValue)?.label}</span>
      </button>
      {isOpen && (
        <div className="locale-menu">
          {items.map((item) => (
            <div
              key={item.value}
              className={`locale-item ${item.value === selectedValue ? 'selected' : ''}`}
              onClick={() => handleSelect(item.value)}
            >
              {item.value === selectedValue && <span className="check-icon">✔️</span>} {/* Unicode checkmark */}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
