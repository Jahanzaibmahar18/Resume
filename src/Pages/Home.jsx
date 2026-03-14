import React from "react";
import { Divide } from "lucide-react";
import HeroHome from "../Components/Home/HeroHome";
import ClientsSwiper from "../Components/Home/ClientsSwiper";
import PremiumServices from "../Components/servicecomponent/PremiumServices";
import PaymentSection from "../Components/Home/PaymentSection";
import StorySection from "../Components/servicecomponent/StorySection";
import CareerSection from "../Components/servicecomponent/CareerSection";
import ClientReviews from "../Components/servicecomponent/ClientReviews";
import AuditSection from "../Components/work/AuditSection";
import WorkflowSection from "../Components/process/WorkflowSection";
import FAQSection from "../Components/FQs/FAQSection";
import FutureSection from "../Components/Home/FutureSection";

const Home1 = () => {
    return (
        <div>
            <HeroHome />
            <ClientsSwiper />
<PremiumServices/>
<StorySection/>
<CareerSection/>
<ClientReviews/>
<AuditSection/>
<WorkflowSection/>
<FAQSection/>
<FutureSection/>

<PaymentSection/>
        </div>
    );
};

export default Home1;