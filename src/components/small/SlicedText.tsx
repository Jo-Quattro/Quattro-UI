import "./SlicedText.css";

import type { ReactNode } from "react";

function SlicedText({ children }: { children: ReactNode }) {


  return (
    <section
      className="flex bg-[url('/images/blood-splatter-unsplash-opacity.png')] bg-top-right bg-contain
    justify-center items-center rounded-4xl z-1
    w-45 h-12 p-5"
    >
      <h2
                style={{ "--text": `"${children}"` } as React.CSSProperties}
        className="slice uppercase font-bold text-[2.3rem]"
      >
       {children}
      </h2>
    </section>
  );
}

export default SlicedText;
