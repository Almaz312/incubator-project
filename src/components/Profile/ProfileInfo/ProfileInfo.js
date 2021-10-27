import React from "react";
import './ProfileInfo.css'

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg">
                </img>
            </div>
            <div className="descriptionBlock">
                Ava + description
            </div>
        </div>
    );
};