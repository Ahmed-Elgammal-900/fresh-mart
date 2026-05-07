import { CartRefContext } from '@/context/CartRefContext';
import { useContext } from 'react';

export const useCartRef = () => useContext(CartRefContext);
