import React from "react"
import ReusePost from "../../util/ReusePost/ReusePost";

const newsData = [
    {
        'id' : '1',
        'topic' : 'World News',
        'image' : 'news1.webp',
        'post1' : 'Live Updates: As Cease-Fire Takes Hold, Gazans Return to Destroyed Homes ',
        'post2' : 'Fighting Has Halted in Gaza, but the War Is Not Over ',
        'post3' : 'Mexico Is Getting Ready for Trump. Here’s What’s Different This Time.'
    },
    {
        'id' : '2',
        'topic' : 'U.S. News',
        'image' : 'news2.webp',
        'post1' : 'Biden Issues Pre-Emptive Pardons to Guard Against Trump’s Reprisals Dr. Anthony S. Fauci is one of several people President Biden pardoned on Monday morning.',
        'post2' : 'Rotunda Ransacked by Pro-Trump Mob on Jan. 6 Will Be His Inauguration Backdrop',
        'post3' : '  Inauguration Draws Leaders From Europe’s Right'
    },
    {
        'id' : '3',
        'topic' : 'U.S. Politics',
        'image' : 'news3.webp',
        'post1' : 'Rotunda Ransacked by Pro-Trump Mob on Jan. 6 Will Be His Inauguration Backdrop',
        'post2' : 'Biden Issues Pre-Emptive Pardons to Guard Against Trump’s Reprisals',
        'post3' : ' Inauguration Draws Leaders From Europe’s Right.'
    },
    {
        'id' : '4',
        'topic' : 'New York',
        'image' : 'news4.webp',
        'post1' : 'A Long Career in Black Rock Music Comes to a Tragic End in the Bronx',
        'post2' : 'Adams Accuses Former Prosecutor of Bringing Case to Help His Own Career.',
        'post3' : 'Will Cuomo Run for Mayor? Racial Politics Complicate His Decision.'
    },
    {
        'id' : '5',
        'topic' : 'Business',
        'image' : 'news5.webp',
        'post1' : 'TikTok Flickers Back to Life After Trump Says He Will Stall a Ban.',
        'post2' : 'What We Know About the TikTok Ban.',
        'post3' : 'The Federal Work Force Grew Briskly Under Biden. It’s Still Historically Low.'
    },
    {
        'id' : '6',
        'topic' : 'Technology',
        'image' : 'news6.webp',
        'post1' : 'Instagram Debuts New Video-Editing App, as TikTok Deals With a Ban.',
        'post2' : 'TikTok Flickers Back to Life After Trump Says He Will Stall a Ban.',
        'post3' : 'What We Know About the TikTok Ban.'
    },
    {
        'id' : '7',
        'topic' : 'Science',
        'image' : 'news7.webp',
        'post1' : 'Rain-Collecting Rattlesnakes Give New Meaning to ‘Thirst Trap’',
        'post2' : 'Trump Picks Ex-Congressman to Manage U.S. Nuclear Arsenal',
        'post3' : 'F.A.A. Temporarily Halts Launches of Musk’s Starship After Explosion'
    },
    {
        'id' : '8',
        'topic' : 'Sports',
        'image' : 'news8.webp',
        'post1' : 'Which of the 4 Remaining Teams Has the Best Chance at the Super Bowl?',
        'post2' : 'Eagles Outlast Rams to Advance to N.F.C. Title Game Against Commanders',
        'post3' : 'Tom Brady’s Best Day as a Broadcaster Featured a Glaring Conflict of Interest'
    },
    {
        'id' : '9',
        'topic' : 'Obituaries',
        'image' : 'news9.webp',
        'post1' : 'David Schneiderman, Village Voice Editor and Publisher, Dies at 77',
        'post2' : 'Lynne Taylor-Corbett, ‘Footloose’ Choreographer, Dies at 78',
        'post3' : 'Claire van Kampen, 71, Playwright and Arranger of Early Music World, Dies'
    },
    {
        'id' : '10',
        'topic' : 'The Upshot',
        'image' : 'news10.webp',
        'post1' : 'How Much Snow Will Fall Where You Live? How Much Snow Will Fall Where You Live?',
        'post2' : 'The One Thing Americans Remember About Biden.',
        'post3' : 'Flashback: Your Weekly History Quiz, Jan. 18, 2025'
    },
    {
        'id' : '11',
        'topic' : 'Climate and Environment',
        'image' : 'news11.webp',
        'post1' : 'More Americans, Risking Ruin, Drop Their Home Insurance ',
        'post2' : 'L.A. Fires Revive Calls for a ‘Climate Superfund’ Law in California',
        'post3' : 'Trump Targeted Scientists in His First Term. This Time, They’re Prepared.',
    },
    {
        'id' : '12',
        'topic' : 'Education',
        'image' : 'news12.webp',
        'post1' : 'Columbia Professor Says She Was Pushed to Retire Because of Her Activism',
        'post2' : 'What if ICE Agents Show Up? Schools Prepare Teachers and Parents',
        'post3' : 'Black Student Enrollment at Harvard Law Drops by More Than Half',
    },
    {
        'id' : '13',
        'topic' : 'Health',
        'image' : 'news13.webp',
        'post1' : 'Kennedy’s Plan for the Drug Crisis: A Network of ‘Healing Farms’',
        'post2' : 'When the Retirement Community Goes Bankrupt',
        'post3' : 'Kennedy Sought to Stop Covid Vaccinations 6 Months After Rollout',
    },
    {
        'id' : '14',
        'topic' : 'Reader Center',
        'image' : 'news14.webp',
        'post1' : 'From a Bustling Kitchen to a Bustling Newsroom',
        'post2' : 'In Taser Logs, a Practice That Long Went Unnoticed Is Revealed',
        'post3' : 'A Frankenstein Filing Error: It’s Alive!'
    },
    {
        'id' : '15',
        'topic' : 'Explore Times Events',
        'image' : 'news15.webp',
        'post1' : 'Join NYT Cooking for an ‘Easy Weeknight Dinners’ Book Talk in N.Y.C.',
        'post2' : 'Join Us to Hear About the Loopholes of Hawaii’s Pay-to-Play Law',
        'post3' : '‘The Daily’ Podcast at the Tribeca Festival'
    },
]

const News = () => {
  return (
    <div className="md:grid grid-cols-3  xl:grid-cols-5 gap-10">
        {newsData?.map((item)=>(
            <div key={item.id} className="font-serif text-sm space-y-2 hover:cursor-pointer">
                <h5 className="font-sans text-black font-medium">{item.topic}</h5>
                <img src={item.image} alt="news image" />
                <p className="hover:text-gray-600">{item.post1}</p>
                <p className="hover:text-gray-600">{item.post2}</p>
                <p className="hover:text-gray-600">{item.post3}</p>
            </div>
        ))}
    </div>
  )
};

export default News;
