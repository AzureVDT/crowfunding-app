import {
    IconCampaign,
    IconDarkMode,
    IconDashboard,
    IconLogout,
    IconPayment,
    IconProfile,
    IconWithdraw,
} from "components/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { authLogOut } from "store/auth/auth-slice";

const sidebarLinks = [
    {
        icon: <IconDashboard></IconDashboard>,
        title: "Dashboard",
        url: "/",
    },
    {
        icon: <IconCampaign></IconCampaign>,
        title: "Campaign",
        url: "/campaign",
    },
    {
        icon: <IconPayment></IconPayment>,
        title: "Payment",
        url: "/payment",
    },
    {
        icon: <IconWithdraw></IconWithdraw>,
        title: "Withdraw",
        url: "/withdraw",
    },
    {
        icon: <IconProfile></IconProfile>,
        title: "Profile",
        url: "/profile",
    },
    {
        icon: <IconLogout></IconLogout>,
        title: "Logout",
        url: "/logout",
    },
    {
        icon: <IconDarkMode></IconDarkMode>,
        title: "Light/Dark",
        url: "#",
        onClick: () => {},
    },
];
const sidebarClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto last:bg-white last:shadow-sdprimary";
const DashboardSideBar = () => {
    const dispatch = useDispatch();
    return (
        <div className="w-full md:w-[76px] bg-white rounded-3xl shadow-[10px_10px_20px_0px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
            {sidebarLinks.map((link) => {
                if (link.url === "/logout") {
                    return (
                        <button
                            key={link.title}
                            onClick={() => dispatch(authLogOut())}
                            className={sidebarClass}
                        >
                            <span>{link.icon}</span>
                            <span className="md:hidden">{link.title}</span>
                        </button>
                    );
                }
                return (
                    <NavLink
                        to={link.url}
                        key={link.title}
                        className={({ isActive }) =>
                            isActive
                                ? `bg-primary text-primary bg-opacity-20 ${sidebarClass}`
                                : `text-iconColor ${sidebarClass}`
                        }
                    >
                        <span>{link.icon}</span>
                        <span className="md:hidden">{link.title}</span>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default DashboardSideBar;
