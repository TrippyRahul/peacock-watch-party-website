import React from 'react'

const FeaturesPecock = () => {
    const data = [
        {
            heading: "Synchronize",
            Desc: "One of the standout features of Peacock Watch Party is its ability to keep everyone's videos playing in perfect sync. There's no need to worry about hitting the play button at the same time as your friends. Peacock Watch Party takes care of synchronization automatically, ensuring that everyone is watching the same scene at the same time."
        },
        {
            heading: "Chat",
            Desc: "Watching a show or movie is more enjoyable when you can share your thoughts and reactions in real time. Peacock Watch Party includes a chat function right alongside the video, allowing you to engage with your friends and family as you watch."
        },
        {
            heading: "Enjoy",
            Desc: "Peacock Watch Party is designed to make your virtual watch parties as enjoyable as possible. Whether you're laughing at a comedy, crying during a drama, or sharing the suspense of a thriller, Peacock TV Watch Party helps you feel connected, even across time zones. The experience is almost as if you're sitting on the same couch."
        }
    ]
    return (
        <>
            <div className='text-center text-[5.5rem] pb-10 font-semibold text-[#DbDE07]'>Features of Peacock Watch Party</div>
            <div>
                <p className='text-center text-[1.8rem] text-opacity-65 w-[90%] md:w-[60%] mx-auto pb-10'>In today's digital age, staying connected with friends and family, especially over long distances, has become more important than ever. Peacock TV Watch Party offers a seamless solution for hosting watch parties on Peacock TV, allowing you to enjoy your favorite shows and movies together, no matter where you are. This article will guide you through the features of the Peacock watch party, how it works, and the simple steps to get started with hosting your watch party.</p>
            </div>
            <div className='bg-black text-white w-full py-10'>

                <div className='grid grid-cols-12  md:gap-x-32 py-10 w-[90%] md:w-[80%] mx-auto'>
                    {
                        data?.map((item, ind) => (
                            <div key={ind} className='p-8 border border-[#F3F807DE] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4'>
                                <div className='flex justify-start space-x-5 items-center pb-5'>
                                    <div className='text-[6rem] italic text-transparent bg-transparent' style={{ WebkitTextStrokeWidth: '1px', WebkitTextFillColor: '#000000', WebkitTextStrokeColor: '#F3F807DE' }}>{ind+1}</div>
                                    <div>
                                      <div className='text-center uppercase text-[#F3F807DE] font-semibold pt-5 text-[3rem]'>{item.heading}</div>
                                      <div className='w-[100%] h-[2px] bg-gradient-to-r rounded-3xl from-[#D3D806] to-[#D3D80600]'></div>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-[1.8rem] text-opacity-65'>{item.Desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FeaturesPecock
