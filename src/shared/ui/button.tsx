import { SyntheticEvent } from 'react';

interface Button {
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick: (e: SyntheticEvent) => void;
}

export default function Button({ title = 'Click', onClick, type = 'button', disabled }: Button) {
  return (
    <button
      onClick={(e) => {
        onClick(e);
      }}
      disabled={disabled}
      type={type}
      className='cursor-pointer rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
    >
      {title}
    </button>
  );
}
