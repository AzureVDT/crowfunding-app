import React from "react";
import CampCategory from "./parts/CampCategory";
import CampMeta from "./parts/CampMeta";
import CampDesc from "./parts/CampDesc";
import CampTitle from "./parts/CampTitle";
import CampAuthor from "./parts/CampAuthor";
import CampImage from "./parts/CampImage";

const CampaignItem = () => {
    return (
        <div>
            <CampImage></CampImage>
            <div className="px-5 py-4">
                <CampCategory text="Education"></CampCategory>
                <CampTitle>Powered Kits Learning Boxes</CampTitle>
                <CampDesc>
                    Fun, durable and reusable boxes with eco-friendly options.
                </CampDesc>
                <div className="flex items-center justify-between mb-5 gap-x-5">
                    <CampMeta
                        amount="$2,000"
                        text="Raised of $1,900"
                    ></CampMeta>
                    <CampMeta amount="173" text="Total backers"></CampMeta>
                </div>
                <CampAuthor author="Mahfuzul Nabil"></CampAuthor>
            </div>
        </div>
    );
};

export default CampaignItem;
