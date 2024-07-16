import React from 'react'
export const metadata = {
  title: "Privacy Policy - Peacock Tv Watch party",
  description: "The post mentions the privacy policy of Peacock Watch Party. It mentions some of their rules and regulations and how much of the user data they use.",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Privacy Policy - Peacock Tv Watch party",
    description:"The post mentions the privacy policy of Peacock Watch Party. It mentions some of their rules and regulations and how much of the user data they use.",
    type: 'website',
    siteName: "Privacy Policy",
    images: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
};
const Privacy = () => {

  return (
    <div>
      <div className='py-20'>
        <div className='w-[90%] md:w-[85%] p-10 border-[#D8D40C] rounded-xl border mx-auto'>
            <div>
               <h1 className='text-center font-semibold text-[5rem] py-10'>Privacy Policy</h1>
            </div>
            <div className='pt-4'>
               <div className='text-white font-semibold text-[3rem]'>When Peacock Watch Party Collects Your Information</div> 
               <ul className='text-[2rem]'>
                 <li className='pt-10'><span className='text-[#D8D40C] text-[2.2rem] font-semibold'>Installation : </span><span>When you install the Peacock Watch Party browser extension, you are assigned a unique identifier stored on our servers. This identifier helps authenticate and access synchronized watch parties and gather anonymous usage statistics.</span></li>
                 <li className='pt-10'><span className='text-[#D8D40C] text-[2.2rem] font-semibold'>Using the Service : </span><span>We collect information about your use of the Service, such as the information you provide to access a watch party. We do not store your messages or chat history during watch parties to respect your privacy.</span></li>
                 <li className='pt-10'><span className='text-[#D8D40C] text-[2.2rem] font-semibold'>Communications : </span><span>If you contact us directly, we may receive additional information about you, such as your name, email address, phone number, message content, and any attachments you send.</span></li>
                 <li className='pt-10'><span className='text-[#D8D40C] text-[2.2rem] font-semibold'>Cookies and Automatic Data Collection : </span><span>The Service collects information generated automatically as you use it, including preferences and anonymous usage statistics. We and our third-party service providers may collect information from your browser, including your IP address and cookies. Cookies are small text files placed on your computer when you visit a website. Most browsers allow you to block or delete cookies, but doing so may affect the functionality of the Service.</span></li>
               </ul>
            </div>
            <div className='text-[2rem] pt-10'>
               <p>By using the Service, you authorize us to gather, parse, and retain data related to providing the Service.</p>
            </div>
            <div className='pt-16'>
               <div className='text-[2.5rem] font-semibold'>How Peacock Watch Party Uses Your Information</div>
               <p className='text-[2rem] pt-5'>Internal and Service-Related Usage: We use information, including unique identifiers and your location, for internal and service-related purposes, such as data analytics. We may share this information with service providers to help us provide, maintain, and improve the Service.</p> 
               <p className='text-[2rem] pt-5'>Communications: We may send emails to the address you provide for account verification, customer service, system maintenance, or to inform you about additional products or services that may interest you.</p> 
               <p className='text-[2rem] pt-5'>Aggregate Data: We may anonymize and aggregate data collected through the Service and use it for any purpose.</p> 
               <p className='text-[2rem] pt-5'>Legal Rights: We may use the information collected to enforce our Terms or other legal rights.</p> 
            </div>
            <div className='pt-16'>
               <div className='text-white font-semibold text-[3rem]'>How Peacock Watch Party May Disclose Your Information</div> 
               <ul className='text-[2rem]'>
                 <li className='pt-10'><span className='text-[#D8D40C] text-[2.2rem] font-semibold'>Vendors and Service Providers : </span><span>We may share information collected through the Service with vendors and service providers, including payment processors, auditors, and data analytics vendors.</span></li>
                 <li className='pt-10'><span className='text-[#D8D40C] text-[2.2rem] font-semibold'>As Required By Law : </span><span>We may access, preserve, and disclose your information if we believe it is necessary to comply with legal requests, enforce this Privacy Policy, respond to your requests, or protect rights, property, or safety.</span></li>
                 <li className='pt-10'><span className='text-[#D8D40C] text-[2.2rem] font-semibold'>Merger, Sale, or Other Asset Transfers : </span><span> If involved in a merger, acquisition, or other asset transfers, your information may be sold or transferred as part of the transaction. The use of your information following such events will be governed by the Privacy Policy in effect when Peacock Watch Party collected the information.</span></li>
                 <li className='pt-10'><span className='text-[#D8D40C] text-[2.2rem] font-semibold'>With Your Consent : </span><span> We may disclose your information with your permission.</span></li>
               </ul>
            </div>
            <div className='pt-16'>
               <div className='text-white font-semibold text-[3rem]'>Security of Your Information</div>
               <p className='text-[2rem] pt-5'>We take steps to ensure your information is treated securely and in accordance with this Privacy Policy. However, the Internet cannot be guaranteed to be 100% secure, and we cannot ensure or warrant the security of any information you provide to us.</p>
            </div>
            <div className='pt-16'>
               <div className='text-white font-semibold text-[3rem]'>Childrens Privacy</div>
               <p className='text-[2rem] pt-5'>We do not knowingly collect personal information from children under 13 years old. If we learn that we have collected such information, we will delete it promptly.</p>
            </div>
            <div className='pt-16'>
               <div className='text-white font-semibold text-[3rem]'>International Users</div>
               <p className='text-[2rem] pt-5'>If you visit the Service from outside the United States, please note that your information may be transferred to and processed in the United States. By providing your information to the Service, you consent to this transfer and processing in accordance with this Privacy Policy.</p>
            </div>
            <div className='pt-16'>
               <div className='text-white font-semibold text-[3rem]'>Changes to Our Privacy Policy</div>
               <p className='text-[2rem] pt-5'>We may update this Privacy Policy periodically. We will post any changes on this web page and update the “Effective Date” above. Your continued use of the Service after changes constitutes acceptance of the new terms.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
