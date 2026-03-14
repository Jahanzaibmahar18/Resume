import React from 'react'
import PremiumServices from '../Components/servicecomponent/PremiumServices'
import CareerSection from '../Components/servicecomponent/CareerSection';
import StorySection from '../Components/servicecomponent/StorySection';
import ClientReviews from '../Components/servicecomponent/ClientReviews';
import AuditSection from '../Components/work/AuditSection';
import WorkflowSection from '../Components/process/WorkflowSection';
import InvestmentSection from '../Components/Pricing/InvestmentSection';
import PaymentSection from '../Components/Home/PaymentSection';
import FAQSection from '../Components/FQs/FAQSection';
import FutureSection from '../Components/Home/FutureSection';

function Services1() {
  return (
    <div>
      <PremiumServices/>
      <StorySection/>
      <CareerSection/>
      <ClientReviews/>
      <AuditSection/>
      <WorkflowSection/>
      <InvestmentSection/>
        <PaymentSection/>
        <FAQSection/>
        <FutureSection/>
    </div>
  )
}

export default Services1;