import React, { useState, useEffect } from 'react';

type TypingEffectProps = {
    texts: string[];
    delay?: number;
};

const TypingEffect: React.FC<TypingEffectProps> = ({ texts, delay = 1000 }) => {
    const [text, setText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typeSpeed, setTypeSpeed] = useState(75);
    const [isBlinking, setIsBlinking] = useState(true);
    const [typingStarted, setTypingStarted] = useState(false);

    useEffect(() => {
        const delayTimeout = setTimeout(() => setTypingStarted(true), delay);
        return () => clearTimeout(delayTimeout);
    }, []);

    useEffect(() => {
        if (!typingStarted) return;
        const handleTyping = () => {
            const currentText = texts[textIndex % texts.length];
            if (isDeleting) {
                setText(currentText.substring(0, text.length - 1));
                setTypeSpeed(20);
            } else {
                setText(currentText.substring(0, text.length + 1));
                setTypeSpeed(75);
            }

            if (!isDeleting && text === currentText) {
                setIsBlinking(true);
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsBlinking(false);
                setIsDeleting(false);
                setTextIndex(textIndex + 1);
            } else {
                setIsBlinking(false);
            }
        };

        const typingTimeout = setTimeout(handleTyping, typeSpeed);
        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, textIndex, typeSpeed, texts, typingStarted]);

    return (
        <span
            className={`relative font-bold after:inline-block after:content-['|'] ${isBlinking ? 'after:animate-blink' : ''}`}
        >
            {text}
        </span>
    );
};

export default TypingEffect;
