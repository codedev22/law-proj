import { useRoutes } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import LandingPage from "../components/pages/landingpage/LandingPage";
// import OurTeam from "./components/common/ourteam/OurTeam";
 import Contact from "../components/pages/contact/Contact";
import AboutUs from "../components/pages/aboutus/AboutUs";
import CorporateLegalServices from "../components/pages/practiceareas/corporatelegalservices/CorporateLegalServices";
import IPR from "../components/pages/practiceareas/intellectualpropertyrights/IPR";
import FamilyAndMat from "../components/pages/practiceareas/familyandmatrimoniallaw/FamilyAndMat";
import CivilAndCommerical from "../components/pages/practiceareas/civilandcommerciallaw/CivilAndCommerical";
import LabourAndEmployment from "../components/pages/practiceareas/labourandemp/LabourAndEmployment";
import CriminalLaw from "../components/pages/practiceareas/criminallaw/CriminalLaw";
import MortgageClaims from "../components/pages/practiceareas/mortgage/MortgageClaims";
import DebtRecovery from "../components/pages/practiceareas/debtrecovery/DebtRecovery";
import RealEstate from "../components/pages/practiceareas/realestate/RealEstate";
import InsuranceClaim from "../components/pages/practiceareas/insurance/InsuranceClaim";
import CopyRight from "../components/pages/copyright/CopyRight";
import PrivacyPolicy from "../components/pages/privacypolicy/PrivacyPolicy";
import Disclaimer from "../components/pages/disclaimer/Disclaimer";
import Blog from '../components/pages/blogs/Blog';
import CorporateCompliance from '../components/pages/blogs/Corporatecompliance/CorporateCompliance';
import IPRStrategies from '../components/pages/blogs/iprstrategies/IPRStrategies';
import CriminalLawBlog from '../components/pages/blogs/criminallawprocedures/CriminalLawBlog';
import EmploymentLawBlog from '../components/pages/blogs/employmentlawblog/EmploymentLawBlog';
import DisputeResolutionBlog from '../components/pages/blogs/disputeresolution/DisputeResolutionBlog';
import DataProtectionBlog from '../components/pages/blogs/dataprotection/DataProtectionBlog';
import FamilyBlog from '../components/pages/blogs/family/FamilyBlog';
import CommercialBlog from '../components/pages/blogs/commercailaggrements/CommercialBlog';
import RealEstateBlog from '../components/pages/blogs/realestate/RealEstateBlog';
const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "/", element: <LandingPage /> },
                { path: "/aboutus", element: <AboutUs /> },
                { path: "/contact", element: <Contact /> },
                { path: "/corporate-legal-service", element: <CorporateLegalServices /> },
                { path: "/intellectual-property-rights", element: <IPR /> },
                { path: "/family-matrimonial", element: <FamilyAndMat /> },
                { path: "/civil-commercial", element: <CivilAndCommerical /> },
                { path: "/labour-employment", element: <LabourAndEmployment /> },
                { path: "/criminal-law", element: <CriminalLaw /> },
                { path: "/mortgage-claims", element: <MortgageClaims /> },
                { path: "/debt-recovery", element: <DebtRecovery /> },
                { path: "/real-estate", element: <RealEstate /> },
                { path: "/insurance-claims", element: <InsuranceClaim /> },
                { path: "/copyrights", element: <CopyRight /> },
                { path: "/privacy-policy", element: <PrivacyPolicy /> },
                { path: "/disclaimer", element: <Disclaimer /> },
                { path: "/blog", element: <Blog /> },
                { path: "/corporate-compliance", element: <CorporateCompliance /> },
                { path: "/ipr-strategies", element: <IPRStrategies/> },
                { path: "/criminal-law-blog", element: <CriminalLawBlog/> },
                { path: "/employment-law-blog", element: <EmploymentLawBlog/> },
                { path: "/dispute-resolution-blog", element: <DisputeResolutionBlog/> },
                { path: "/data-protection-blog", element: <DataProtectionBlog/> },
                { path: "/family-blog", element: <FamilyBlog/> },
                { path: "/commercial-blog", element: <CommercialBlog/> },
                { path: "/real-estate-blog", element: <RealEstateBlog/> },
                
                                
            ]
        }
    ]);

    return routes;
}

export default AppRoutes