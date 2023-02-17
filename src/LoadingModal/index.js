import React from "react";
import ReactDOM from 'react-dom';
import "./LoadingModal.css";
import "./LoadingModal2.css";

function LoadingModal(){
    return ReactDOM.createPortal(
        <div className="LoadingSkeleton">
            <div className="background">
                <div className="left">
                    <div className="text"><span>Cargando</span></div>
                    <div className="mask thick"></div>
                </div>
                <div className="right">
                    <div className="bar"></div>
                    <div className="mask thick"></div>
                    <div className="bar"></div>
                    <div className="mask thin"></div>
                    <div className="bar medium"></div>
                    <div className="mask thick"></div>
                    <div className="bar small"></div>
                </div>
            </div>
        </div>,
        document.getElementById("loading-skeleton")
    );
}

function LoadingModal2() {
    return ReactDOM.createPortal(
        <div className="skeleton">
            <div className="skeleton-text-container animation">
                <p className="text">Loading</p>
            </div>
            <div className="skeleton-search-bar animation"></div>
            <div className="skeleton-list-item animation"></div>
            <div className="skeleton-list-item animation"></div>
            <div className="skeleton-list-item animation"></div>
        </div>,
        document.getElementById("loading-skeleton")
    );
}

export { LoadingModal, LoadingModal2 };