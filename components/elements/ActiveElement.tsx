import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface IActiveLink {
  href: string;
  children: any;
}

const ActiveLink: FC<IActiveLink> = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} active`;
  }
  return <Link href={href}>{React.cloneElement(children, { className, href })}</Link>;
};

export default ActiveLink;
