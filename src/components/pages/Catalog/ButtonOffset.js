import React from 'react';

export default function ButtonOffset({ handleOffset }) {
  return (
    <div className="text-center">
      <button
        className="btn btn-outline-primary"
        onClick={() => handleOffset()}
      >
        Загрузить ещё
      </button>
    </div>
  );
}