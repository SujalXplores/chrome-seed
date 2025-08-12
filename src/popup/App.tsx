import type React from 'react';

export const App: React.FC = () => {
  return (
    <div className="w-[400px] h-[500px] p-4 bg-white">
      <h1 className="text-2xl font-bold text-gray-800">Chrome Extension</h1>
      <p className="mt-2 text-gray-600">
        Welcome to your new Chrome extension! Modify this file to start building
        your extension.
      </p>
    </div>
  );
};
