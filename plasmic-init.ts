import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "ny3mEzXaK2tiLgmD2qTkMm",
      token: "u7UAxcgleHyauiNRz6PG4wMh4o6248rQyaaf6P8FxJF1EbE5hRDWGWmnJuNrRXU6VAaKUdHEOA6e33bEUtQ0w",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
import React, { ReactNode } from 'react';

export interface HelloWorldProps {
  children?: ReactNode;
  className?: string;
  verbose?: boolean;
}

export function HelloWorld({ children, className, verbose }: HelloWorldProps) {
  return (
    <div className={className} style={{ padding: '20px' }}>
      <p>Hello there! {verbose && 'Really nice to meet you!'}</p>
      <div>{children}</div>
    </div>
  );
}