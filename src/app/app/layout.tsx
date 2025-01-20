import React from 'react';

export default function Layout({ children }: Readonly<React.PropsWithChildren>): React.JSX.Element {
  return <main>{children}</main>;
}
