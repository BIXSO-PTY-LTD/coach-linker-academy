'use client';
import { LazyMotion, domMax, m } from 'framer-motion';

import { I_Children } from '#shared/typescript';

export function MotionLazy({ children }: I_Children) {
    return (
        <LazyMotion strict features={domMax}>
            <m.div style={{ height: '100%' }}> {children} </m.div>
        </LazyMotion>
    );
}
