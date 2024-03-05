import React from "react";

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms));

export default async function About() {
  await sleep(400);
  return (
    <main className="flex h-full bg-orange-100 flex-col items-center justify-center p-24">
      <div>About</div>
    </main>
  );
}
