"use client"
import React, { useState, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
    {
        heading: 'Innovation',
        shorten_desc: 'Stay current',
        description: 'Over 100 articles published monthly',
        link: 'latest',
    },
    {
        heading: 'Technology',
        shorten_desc: 'Trusted insights',
        description: '20+ volunteers on our team',
        link: 'join',
    },
    {
        heading: 'Testimonials',
        shorten_desc: 'Impact',
        description: 'Over 50 beneficiaries yearly',
        link: 'testimonials',
    },
    {
        heading: 'Events',
        shorten_desc: "Don't miss out",
        description: 'Monthly events to keep you engaged',
        link: 'events',
    },
    {
        heading: 'Research',
        shorten_desc: 'In-depth articles',
        description: 'Insights from industry leaders',
        link: 'blogs',
    },
];

const NewsCategories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const startX = useRef<number | null>(null);
    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const getTotalCategories = () => categories.length;

    const navigate = (direction: string) => {
        if (direction === 'prev') {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + getTotalCategories()) % getTotalCategories());
        } else if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % getTotalCategories());
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (startX.current !== null) {
            const endX = e.changedTouches[0].clientX;
            const diffX = startX.current - endX;

            if (diffX > 50) {
                navigate('next');
            } else if (diffX < -50) {
                navigate('prev');
            }
        }
        startX.current = null;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        dragStartX.current = e.clientX;

        if (containerRef.current) {
            containerRef.current.style.userSelect = 'none';
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging.current) {
            const diffX = dragStartX.current - e.clientX;

            
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    navigate('next');
                } else {
                    navigate('prev');
                }
                isDragging.current = false;
            }
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;

        if (containerRef.current) {
            containerRef.current.style.userSelect = 'auto';
        }
    };

    const getTransformStyle = (index: number) => {
        let offset = index - currentIndex;
        if (offset > getTotalCategories() / 2) {
            offset -= getTotalCategories();
        } else if (offset < -getTotalCategories() / 2) {
            offset += getTotalCategories();
        }
        return {
            transform: `translateX(${offset * 100}%)`,
            zIndex: offset === 0 ? 2 : 1,
            opacity: offset === 0 ? 1 : 0.6,
            transformOrigin: 'center',
            scale: offset === 0 ? 1.3 : 1.1,
            transition: 'transform, opacity 0.5s ease',
        };
    };

    const handleCardClick = (index: number) => {
        setCurrentIndex(index);
      };

    return (
        <section className="relative max-w-screen-lg mx-auto">
            <h2 className="text-center text-seep-color text-2xl font-semibold pb-5">CATEGORIES</h2>
            <div
                ref={containerRef}
                className="relative flex h-80 overflow-hidden shadow rounded-md pt-10"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                    cursor: isDragging.current ? 'grabbing' : 'grab', 
                }}
                >
                {categories.map((category, index) => (
                    <div
                    key={category.heading}
                    className="absolute w-80 sm:ml-44 md:ml-64 mx-auto"
                    style={getTransformStyle(index)}
                    onClick={() => handleCardClick(index)}
                    >
                        <div className="bg-gray-200 flex justify-between p-7 text-gray-100 h-44 mx-10 rounded-lg shadow-lg w-[17rem]">
                            <div className="text-gray-700">
                                <h3 className="text-xl text-seep-color font-semibold">{category.heading}</h3>
                                <span className="text-xs opacity-70">{category.shorten_desc}</span>
                                <p className="text-sm text-seep-color opacity-70 pt-7">{category.description}</p>
                            </div>
                            <div>
                                <div className="rounded-full cursor-pointer bg-amber-500 p-1 text-white">
                                    <ArrowUpRight />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="!relative w-72 mx-auto flex justify-center items-center">
                    <button
                        onClick={() => navigate('prev')}
                        className="absolute left-2 bottom-0 transform -translate-y-1/2 hover:bg-gray-200 text-seep-color font-bold p-2 rounded-full z-10"
                    >
                        <ChevronLeft />
                    </button>
                    <button className="!relative top-24 flex gap-1 z-10">
                        {categories.map((_, index) => (
                            <div key={index} className={`bg-seep-color pt-1 px-3 ${index === currentIndex && '!bg-amber-500'}`}></div>
                        ))}
                    </button>
                    <button
                        onClick={() => navigate('next')}
                        className="absolute right-2 transform -translate-y-1/2 bottom-0 hover:bg-gray-200 text-seep-color font-bold p-2 rounded-full z-10"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsCategories;
