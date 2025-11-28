'use client';

import { Button } from "@repo/ui/button";


export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center h-screen">
        <div>
        This button should be styled with uniwind 👇
        </div>
        <div className="mt-4">
          <Button />
        </div>
      </main>

  );
}
