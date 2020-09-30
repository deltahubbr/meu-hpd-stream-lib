import React from 'react';

export default function Icone({
  icone = '',
  color = '#ffffff',
  size = '22px',
  ...rest
}) {
  return (
    <i
      className={rest.className ? `${icone} ${rest.className}` : icone}
      style={{
        fontSize: size,
        color,
      }}
      {...rest}
    />
  );
}
