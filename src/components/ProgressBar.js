import React, { useEffect } from 'react';
import $ from 'jquery';

const ProgressBar = () => {
    useEffect(() => {
        const progressPath = document.querySelector('.progress-wrap path');
        if (!progressPath) {
            console.error('No path element found in .progress-wrap');
            return;
        }

        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = 'none';
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;

        const updateProgress = () => {
            const scroll = $(window).scrollTop();
            const height = $(document).height() - $(window).height();
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        };

        updateProgress();
        $(window).scroll(updateProgress);
    }, []);

    return (
        <div className="paginacontainer">
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
                <div className="top-arrow">
                    <img src="/assets/images/rightarrow.svg" alt="Right Arrow" />
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
