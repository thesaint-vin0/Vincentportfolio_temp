import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type AudioContextValue = {
  enabled: boolean;
  toggle: () => void;
};

const AudioCtx = createContext<AudioContextValue | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(
      '/pluck.mp3',
    );
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = 'none';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setEnabled((prev) => {
      const next = !prev;
      if (next) {
        audio.play().catch(() => setEnabled(false));
      } else {
        audio.pause();
      }
      return next;
    });
  };

  return (
    <AudioCtx.Provider value={{ enabled, toggle }}>{children}</AudioCtx.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
}
