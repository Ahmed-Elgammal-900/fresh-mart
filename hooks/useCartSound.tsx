'use client';
import { useCallback } from 'react';

export function useCartSound() {
    const play = useCallback(() => {
        const ctx = new AudioContext();

        const chime = ctx.createOscillator();
        const chimeGain = ctx.createGain();

        const chimeFilter = ctx.createBiquadFilter();
        chimeFilter.type = 'highpass';
        chimeFilter.frequency.value = 600;

        chime.connect(chimeFilter);
        chimeFilter.connect(chimeGain);
        chimeGain.connect(ctx.destination);

        chime.type = 'sine';
        chime.frequency.setValueAtTime(880, ctx.currentTime + 0.04);
        chime.frequency.setValueAtTime(1100, ctx.currentTime + 0.08);

        chimeGain.gain.setValueAtTime(0.0, ctx.currentTime);
        chimeGain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.06);
        chimeGain.gain.exponentialRampToValueAtTime(
            0.001,
            ctx.currentTime + 0.3
        );

        chime.start(ctx.currentTime + 0.04);
        chime.stop(ctx.currentTime + 0.3);
        chime.onended = () => {
            ctx.close();
        };
    }, []);

    return { play };
}
