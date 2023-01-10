import Image from "next/image";

export function DialogLeft({ children }: { children: any }): JSX.Element {
  return (
    <div className="not-prose flex flex-row">
      <div> </div>
      <div>{children}</div>
    </div>
  );
}

export function DialogRight() {
  return <div>Dialog</div>;
}
