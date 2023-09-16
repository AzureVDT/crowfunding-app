import React from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";

const CampaignFeature = () => {
    return (
        <div className="flex items-center gap-x-8 w-full max-w-[1048px]">
            <CampImage className="h-[266px] flex-1"></CampImage>
            <div className="flex-1 max-w-[435px]">
                <CampCategory
                    text="Architecture"
                    className="mb-4 text-sm"
                ></CampCategory>
                <CampTitle className="mb-4 text-xl font-bold">
                    Remake - We Make architecture exhibition
                </CampTitle>
                <CampDesc className="mb-6 text-sm">
                    Remake - We Make: an exhibition about architecture's social
                    agency in the face of urbanisation
                </CampDesc>
                <div className="w-full rounded-full h-[5px] bg-[#EFEFEF] mb-6">
                    <div className="w-2/4 h-full rounded-full bg-primary"></div>
                </div>
                <div className="flex items-start justify-between gap-x-5">
                    <CampMeta
                        size="big"
                        amount="$2,000"
                        text="Raised of $2,500"
                    ></CampMeta>
                    <CampMeta
                        size="big"
                        amount="173"
                        text="Total backers"
                    ></CampMeta>
                    <CampMeta
                        size="big"
                        amount="30"
                        text="Days left"
                    ></CampMeta>
                </div>
            </div>
        </div>
    );
};

export default CampaignFeature;
