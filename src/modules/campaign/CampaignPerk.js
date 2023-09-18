import { defaultImage } from "constants/global";
import React from "react";
import CampTitle from "./parts/CampTitle";

const CampaignPerk = () => {
    return (
        <div className="bg-white shadow-1 rounded-xl">
            <img
                src={defaultImage}
                alt=""
                className="object-cover h-[232px] rounded-xl w-full"
            />
            <div className="p-5">
                <span className="inline-block p-[3px_13px_1px_14px] mb-5 text-xs font-medium text-white rounded-sm bg-secondary">
                    Featured
                </span>
                <CampTitle className="mb-1 text-xl font-semibold">
                    Special One Camera
                </CampTitle>
                <div className="flex items-center mb-4 gap-x-3">
                    <span className="text-xl font-bold text-text1">
                        $2,724 USD
                    </span>{" "}
                    <span className="text-sm font-medium line-through text-error">
                        $1,504 USD
                    </span>{" "}
                    <span className="text-sm font-medium text-error">
                        (12% OFF)
                    </span>
                </div>
                <div className="flex flex-col mb-4 gap-y-1">
                    <strong>Estimated Shipping</strong>
                    <span className="text-text2">October 2022</span>
                </div>
                <p className="mb-4 text-text2">
                    <strong className="text-text1">05</strong> claimed
                </p>
                <p className="text-text2">Ships worldwide</p>
            </div>
        </div>
    );
};

export default CampaignPerk;
