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
            <div className='text-center text-[5rem] pb-10 font-semibold text-[#DbDE07]'>Features of Peacock Watch Party</div>
            <div>
                <p className='text-center text-[2.3rem] w-[80%] mx-auto pb-10'>Many people wondered whether does peacock have watch party. Well, you will be happy to hear that Peacock Watch Party is designed to enhance your streaming experience with features that make virtual gatherings fun and interactive. Here&apos;s what you can expect:</p>
            </div>
            <div className='bg-white w-full py-10'>

                <div className='grid grid-cols-12  md:gap-x-10 py-10 w-[90%] md:w-[80%] mx-auto'>
                    {
                        data?.map((item, ind) => (
                            <div key={ind} className='p-8 col-span-12 md:col-span-6 lg:col-span-4'>
                                <div className='flex justify-center items-start flex-col pb-5'>
                                    <span className='inline-block bg-[#d7d949] w-[60px] h-[3px]'></span>
                                    <div className='text-center font-semibold text-black pt-5 text-[3rem]'>{item.heading}</div>
                                </div>
                                <div>
                                    <p className='text-black text-[2rem] w-[80%]'>{item.Desc}</p>
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
