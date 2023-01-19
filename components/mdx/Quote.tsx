export default function QuoteComponent({ cite, subcite, url, children }: any) {
  return (
    <div className="relative mx-2 break-inside-avoid-page rounded-lg px-2 py-4">
      <div
        className="absolute top-1 mr-2 text-3xl leading-none text-slate-500/20"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-14 w-14 fill-slate-500/20"
          style={{ transform: "scale(-1, -1)" }}
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z" />
        </svg>
      </div>
      <div className="pl-8 pr-2 text-sm">{children}</div>
      {cite && (
        <div className="not-prose pr-2 text-right opacity-70">
          {url ? (
            <a href={url}>
              <p className="text-sm font-bold">{cite}</p>
            </a>
          ) : (
            <p className="text-sm font-bold">{cite}</p>
          )}
          {subcite && <p className="text-base">{subcite}</p>}
        </div>
      )}
    </div>
  );
}

export function Quote({ children }: { children: any }) {
  return (
    <div className="relative my-4">
      <svg
        viewBox="0 0 48 48"
        className=" absolute z-0 h-14 w-14 scale-x-[-0.7] scale-y-[0.7] fill-nord-9/50 dark:fill-nord-9/80"
        aria-hidden="true"
      >
        <g>
          <path d="M18.686,6.513H0.001v16.35h10.628c-0.098,10.181-9.584,12.104-9.584,12.104s-0.05,0.341,0,6.521   c15.815-3.034,17.499-14.931,17.636-18.625h0.004v-0.102c0.021-0.632,0-1.028,0-1.028V6.513z" />
          <path d="M47.99,21.732V6.513H29.306v16.35h10.629c-0.098,10.181-9.584,12.104-9.584,12.104s-0.05,0.341,0,6.521   c15.815-3.034,17.499-14.931,17.636-18.625h0.004v-0.102C48.011,22.129,47.99,21.732,47.99,21.732z" />
        </g>
      </svg>
      <div className="z-10 pt-5 pl-5 font-[550] italic">{children}</div>
    </div>
  );
}
