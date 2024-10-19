import React from 'react';
import { Logo } from './logo';
import { AccountInfo } from './account-info';
import styles from './header.module.scss';
import { MultiWallet } from '@/features/multiwallet/ui/wallet';
import { Divider } from '@chakra-ui/react'

type Props = {
  isAccountVisible: boolean;
};

export function Header({ isAccountVisible }: Props) {

  return (
    <header className={styles.header}>
      <Logo />
      
      <Divider orientation="horizontal" borderColor="black.300" height="75px" width="70%" mx={4} />

      {isAccountVisible && <MultiWallet/>}
    </header>
  );
}