import { useEffect, useRef, useState } from 'react';

export function useTypingEffect(
  phrases: string[],
  { typeSpeed = 90, deleteSpeed = 45, pauseTime = 1600 }: {
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
  } = {},
) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];

    if (!isDeleting && text === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }
    if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const next = isDeleting
      ? current.slice(0, text.length - 1)
      : current.slice(0, text.length + 1);

    timeoutRef.current = setTimeout(
      () => setText(next),
      isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseTime]);

  return text;
}
