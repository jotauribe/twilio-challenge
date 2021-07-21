import React from 'react';
import './Autocomplete.styles.css';
import { useBooleanRef } from '../../hooks';

const getVisibleOptions = (options = [], value) => {
  if (!value) return options;
  return options?.filter(o => o.label?.includes?.(value) && o.label !== value);
};

export default function Autocomplete({ value, options = [], onChange }) {
  const [focused, setFocused] = React.useState(false);
  const [ignoreBlur, setIgnoreBlur] = useBooleanRef(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => !ignoreBlur.current && setFocused(false);

  const visibleOptions = getVisibleOptions(options, value);
  const isMenuOpen = focused && value && visibleOptions?.length > 0;

  return (
    <div className="autocomplete">
      <input
        value={value}
        className="input"
        placeholder="Type a username"
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={(event) => onChange(event?.target?.value)}
      />

      <div
        className="options"
        onTouchStart={() => setIgnoreBlur(true)}
        onMouseEnter={() => setIgnoreBlur(true)}
        onMouseLeave={() => setIgnoreBlur(false)}
      >
        {isMenuOpen &&
          visibleOptions.map((o) => (
            <div
              key={o.value}
              className="option"
              onClick={() => (setIgnoreBlur(false), onChange(o.label))}
            >
              {o.label}
            </div>
          ))}
      </div>
    </div>
  );
}
