import { createBrowserRouter } from "react-router-dom";
import MainDashboard from "../../component/dashboard/MainDashboard/MainDashboard";
import NftMarketPlace from "../../component/dashboard/NFT_Market_Place/NftMarketPlace";
import ForgetPassword from "../../layout/Auth/ForgetPassword";
import SignIn from "../../layout/Auth/SignIn";
import SignUp from "../../layout/Auth/SignUp";
import Main from "../../layout/Main";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <MainDashboard></MainDashboard>
            },
            {
                path: '/nft_market_place',
                element: <NftMarketPlace></NftMarketPlace>
            },
            {
                path: '/',
                element: <MainDashboard></MainDashboard>
            },
            {
                path: '/',
                element: <MainDashboard></MainDashboard>
            }
        ]
    },
    {
        path: '/sign_in',
        element: <SignIn></SignIn>
    },
    {
        path: '/sign_up',
        element: <SignUp></SignUp>
    },
    {
        path: '/forget_password',
        element: <ForgetPassword></ForgetPassword>
    },
])

export default router;