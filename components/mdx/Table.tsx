function Table({ children }: any) {
  return (
    <div className="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
      <div className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      <div className="relative overflow-auto rounded-lg">
        <div className="mt-8 mb-8 overflow-hidden shadow-sm">
          <table className="w-full table-auto border-collapse text-sm">
            {children}
          </table>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
    </div>
  );
}

export default Table;
