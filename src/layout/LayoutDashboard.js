import React from "react";
import DashboardTopBar from "modules/dashboard/DashboardTopBar";
import DashboardSideBar from "modules/dashboard/DashboardSideBar";
import Overlay from "components/common/Overlay";
import { Outlet } from "react-router-dom";
import ReactModal from "react-modal";
import Button from "components/button/Button";
import CampaignPerk from "modules/campaign/CampaignPerk";
import RequiredAuthPage from "pages/RequiredAuthPage";
const LayoutDashboard = () => {
    return (
        <RequiredAuthPage>
            <div className="min-h-screen p-10 bg-lite">
                <ReactModal
                    isOpen={false}
                    overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50
                    flex justify-center items-center"
                    className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
                >
                    <button className="absolute z-10 flex items-center justify-center cursor-pointer w-11 h-11 right-10 top-[10px] text-text1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <h2 className="font-bold text-[25px] mb-10 text-center">
                        Back this project
                    </h2>
                    <p className="mb-3 text-sm font-medium">
                        Enter the contribute amount
                    </p>
                    <input
                        type="text"
                        placeholder="$10"
                        name="amount"
                        className="w-full px-5 py-3 text-lg font-medium border rounded border-strock"
                    ></input>
                    <p className="my-5 text-sm text-text3">
                        Contribution are not associatied with perks
                    </p>
                    <Button kind="primary">Continue</Button>
                    <div className="mt-[60px]"></div>
                    <CampaignPerk showButton></CampaignPerk>
                </ReactModal>
                <Overlay></Overlay>
                <DashboardTopBar></DashboardTopBar>
                <div className="flex items-start gap-x-10">
                    <DashboardSideBar></DashboardSideBar>
                    <div className="flex-1">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </RequiredAuthPage>
    );
};

export default LayoutDashboard;
