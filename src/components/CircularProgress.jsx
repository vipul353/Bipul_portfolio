import { useState, useEffect, useRef } from 'react';
import './CircularProgress.css';

export const CircularProgress = ({ percentage, name, size = 120 }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const containerRef = useRef(null);

    const radius = (size - 10) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (animatedPercentage / 100) * circumference;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        // Animate the percentage
                        let currentPercentage = 0;
                        const increment = percentage / 60; // 60 frames for smooth animation
                        const timer = setInterval(() => {
                            currentPercentage += increment;
                            if (currentPercentage >= percentage) {
                                setAnimatedPercentage(percentage);
                                clearInterval(timer);
                            } else {
                                setAnimatedPercentage(Math.floor(currentPercentage));
                            }
                        }, 25); // Update every 25ms for smooth animation
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the element is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [percentage, hasAnimated]);

    return (
        <div className="circular-progress-container" ref={containerRef}>
            <svg width={size} height={size} className="circular-progress">
                {/* Background circle */}
                <circle
                    className="progress-bg"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth="8"
                />
                {/* Progress circle */}
                <circle
                    className="progress-bar"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
                {/* Percentage text */}
                <text
                    x="50%"
                    y="50%"
                    className="progress-text"
                    dominantBaseline="middle"
                    textAnchor="middle"
                >
                    {animatedPercentage}%
                </text>
            </svg>
            <p className="skill-name">{name}</p>
        </div>
    );
};
