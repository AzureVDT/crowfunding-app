import React from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import Button from "components/button/Button";
import CampViewAuthor from "./parts/CampViewAuthor";
import CampaignSupport from "./CampaignSupport";
import CampaignPerk from "./CampaignPerk";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";

const CampaignView = () => {
    return (
        <>
            <div className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white mb-10 gradient-banner">
                <h1 className="text-[40px] font-bold">Education</h1>
            </div>
            <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
                <div className="flex-1">
                    <CampImage className="h-[398px] mb-8"></CampImage>
                    <div className="flex justify-center gap-x-5">
                        {Array(4)
                            .fill(0)
                            .map((item, index) => (
                                <img
                                    key={index}
                                    className="object-cover rounded-lg w-[89px] h-[70px]"
                                    src="https://source.unsplash.com/random"
                                    alt=""
                                />
                            ))}
                    </div>
                </div>
                <div className="flex-1 max-w-[443px]">
                    <CampCategory
                        text="Architecture"
                        className="mb-4 text-sm"
                    ></CampCategory>
                    <CampTitle className="mb-4 text-xl font-bold">
                        Remake - We Make architecture exhibition
                    </CampTitle>
                    <CampDesc className="mb-6 text-sm">
                        Remake - We Make: an exhibition about architecture's
                        social agency in the face of urbanisation
                    </CampDesc>
                    <CampViewAuthor></CampViewAuthor>
                    <div className="w-full rounded-full h-[5px] bg-[#EFEFEF] mb-6">
                        <div className="w-2/4 h-full rounded-full bg-primary"></div>
                    </div>
                    <div className="flex items-start justify-between mb-4 gap-x-5">
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
                    <Button kind="primary" className="w-full p-4">
                        Back this project
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
                <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
                    <span className="cursor-pointer text-secondary">
                        Campaign
                    </span>
                </div>
                <Button kind="primary">Back this project</Button>
            </div>
            <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
                <div>
                    <div className="w-full bg-white"></div>
                    <h2 className="mb-5 text-lg font-semibold uppercase">
                        Story
                    </h2>
                </div>
                <div>
                    <CampaignSupport></CampaignSupport>
                    <div className="mb-[60px]"></div>
                    <div className="flex flex-col gap-y-[30px]">
                        <CampaignPerk></CampaignPerk>
                        <CampaignPerk></CampaignPerk>
                        <CampaignPerk></CampaignPerk>
                    </div>
                </div>
            </div>
            <h2 className="mb-10 text-xl font-semibold">
                You also may be interested in
            </h2>
            <CampaignGrid>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
                <CampaignItem></CampaignItem>
            </CampaignGrid>
        </>
    );
};

export default CampaignView;
