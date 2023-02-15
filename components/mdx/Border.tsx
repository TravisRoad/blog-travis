export default function Border({ children }: any) {
  return (
    <div className="relative mt-2 rounded-lg border-4 border-dashed border-nord-7/40 py-0 px-2">
      {children}
    </div>
  );
}
