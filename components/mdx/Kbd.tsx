import React from "react";

function Kbd({ str }: { str: string }) {
  return (
    <kbd className="rounded-lg border border-nord-4 bg-nord-5 px-2 py-1.5 text-sm font-semibold text-nord-0 dark:border-gray-500 dark:bg-gray-600 dark:text-nord-4">
      {str}
    </kbd>
  );
}

export default Kbd;
