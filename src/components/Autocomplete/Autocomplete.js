import React from 'react';
import './Autocomplete.styles.css';

const getVisibleOptions = (options, value) =>
  !value ? options : options.filter((o) => o.label?.includes?.(value));

export default function Autocomplete({ value, options = [], onChange }) {
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

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
      {isMenuOpen && (
        <div className="options">
          {visibleOptions.map((o) => (
            <div className="option" onClick={() => onChange(o.label)}>
              {o.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
