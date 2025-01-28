import React from "react"
import ReuseNews from "../../util/ReuseNews/ReuseNews";

const newsData = [
    {
        "id": "1",
        "topic": "World News",
        "image": "news1.webp",
        "posts": [
            {
                "id": '1',
                "image": "news1.webp",
                "title": "Live Updates: As Cease-Fire Takes Hold, Gazans Return to Destroyed Homes",
                "desc": "In Gaza, a fragile cease-fire has been established, but the situation remains dire. As Gazans begin to return to their homes, they are greeted with the devastation caused by the conflict. Entire neighborhoods have been reduced to rubble, with homes destroyed and infrastructure in ruins. This live update provides continuous coverage of the situation, documenting the struggles of residents trying to rebuild their lives and the challenges of accessing basic necessities like water, food, and medical care. Experts weigh in on the humanitarian crisis and the long-term effects of the conflict on Gaza's future.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news1.webp",
                "title": "Fighting Has Halted in Gaza, but the War Is Not Over",
                "desc": "While the recent cease-fire has brought a temporary halt to the fighting in Gaza, the war is far from over. In this article, we explore the ongoing tensions between Israel and Hamas, the geopolitical implications of the cease-fire, and the challenges of achieving lasting peace. Experts discuss the fragile nature of the cease-fire, the complexities of the peace process, and the long-standing issues that fuel the conflict. The article also looks at the international community's response to the war and efforts to prevent further escalation.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news1.webp",
                "title": "Mexico Is Getting Ready for Trump. Here’s What’s Different This Time.",
                "desc": "As former President Donald Trump prepares for a potential return to the political scene, Mexico is bracing for what could be a new chapter in U.S.-Mexico relations. In this article, we analyze the key differences between Trump's first term and the challenges he may face in his second run for office. With the shifting political landscape in both countries, experts weigh in on how Trump’s policies on immigration, trade, and diplomacy may evolve. This piece also looks at the potential impact on Mexico’s economy and the relationship between the two nations.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "2",
        "topic": "U.S. News",
        "image": "news2.webp",
        "posts": [
            {
                "id": '1',
                "image": "news2.webp",
                "title": "Biden Issues Pre-Emptive Pardons to Guard Against Trump’s Reprisals",
                "desc": "In a bold move, President Biden has issued pre-emptive pardons to several individuals, including Dr. Anthony S. Fauci, in an attempt to protect them from potential reprisals following a Trump resurgence in politics. This article delves into the legal and political implications of these pardons, the people involved, and the broader context of U.S. politics. It examines Biden's motivations for taking this step, the political risks involved, and the potential consequences for both the individuals pardoned and the country as a whole.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news2.webp",
                "title": "Rotunda Ransacked by Pro-Trump Mob on Jan. 6 Will Be His Inauguration Backdrop",
                "desc": "The U.S. Capitol Rotunda, once the scene of chaos during the January 6th riot, will now serve as the backdrop for Trump’s upcoming inauguration, should he return to office. This article revisits the events of January 6th and the aftermath, including the impact on U.S. democracy and security. It explores the lasting effects of the Capitol breach and what it means for the future of American politics. Experts discuss the implications of having the very site of the attack become a symbol of Trump’s political comeback.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news2.webp",
                "title": "Inauguration Draws Leaders From Europe’s Right",
                "desc": "As the U.S. prepares for a new presidential inauguration, right-wing political leaders from across Europe are among those attending, signaling the potential alignment between U.S. and European far-right movements. This article explores the growing influence of these political factions and their shared agenda. It examines how the European right views American politics and the implications for transatlantic relations. The piece also considers the broader shift toward nationalism and populism in both the U.S. and Europe.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "3",
        "topic": "U.S. Politics",
        "image": "news3.webp",
        "posts": [
            {
                "id": '1',
                "image": "news3.webp",
                "title": "Rotunda Ransacked by Pro-Trump Mob on Jan. 6 Will Be His Inauguration Backdrop",
                "desc": "The Capitol Rotunda, the site of the infamous January 6th pro-Trump riot, will once again be a focal point for American politics, this time as the backdrop for Trump’s inauguration. The article revisits the events of January 6th, the aftermath, and how the Capitol, which was ransacked by the pro-Trump mob, will now play a symbolic role in his return to power. Experts reflect on the significance of this moment, the tension it represents, and the impact it will have on the American political landscape moving forward.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news3.webp",
                "title": "Biden Issues Pre-Emptive Pardons to Guard Against Trump’s Reprisals",
                "desc": "President Biden's decision to issue pre-emptive pardons to several key figures, including Dr. Anthony S. Fauci, reflects the increasing political tension in the U.S. as Trump seeks a political comeback. This article explores the motivations behind these pardons, the individuals involved, and the larger context of the U.S. political system. It delves into the potential fallout from these pardons and what it means for the future of political retribution in the country.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news3.webp",
                "title": "Inauguration Draws Leaders From Europe’s Right",
                "desc": "As the U.S. gears up for a new presidential inauguration, several right-wing European leaders are expected to attend, signaling the growing alignment between the far-right factions in both the U.S. and Europe. This article analyzes the significance of this political shift, how these leaders view Trump’s policies, and what their attendance at the inauguration means for the future of transatlantic relations. It also discusses the broader rise of nationalism and populism in both continents.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "4",
        "topic": "New York",
        "image": "news4.webp",
        "posts": [
            {
                "id": '1',
                "image": "news4.webp",
                "title": "A Long Career in Black Rock Music Comes to a Tragic End in the Bronx",
                "desc": "The Bronx has lost a legend in Black Rock music as one of the genre's most influential figures passes away. This article details the late artist's incredible career, the impact of their music on the community, and the tragedy surrounding their untimely death. Friends, family, and fans reflect on the legacy left behind and what the artist’s work meant to the Black Rock movement and New York City's music scene. The piece also highlights the struggles faced by the artist and the influence they had on generations of musicians.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news4.webp",
                "title": "Adams Accuses Former Prosecutor of Bringing Case to Help His Own Career",
                "desc": "New York Mayor Eric Adams has accused a former prosecutor of bringing a high-profile case to boost their own career. This article explores the allegations, the political context surrounding the case, and the potential ramifications for Adams’ administration. Legal experts weigh in on the credibility of the accusations, the evidence supporting them, and how this could affect the public’s perception of Adams as a political leader. The article also looks at the broader issues of political maneuvering and careerism within the legal system.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news4.webp",
                "title": "Will Cuomo Run for Mayor? Racial Politics Complicate His Decision",
                "desc": "Former Governor Andrew Cuomo is reportedly weighing a run for mayor of New York City, but racial politics are complicating his decision. This article examines Cuomo's potential candidacy, the political landscape of New York City, and the challenges he faces in a city with a racially diverse electorate. Experts weigh in on how Cuomo’s record as governor, particularly regarding his handling of racial issues, may influence his chances. The piece also discusses the dynamics of race, power, and politics in New York and what a potential Cuomo candidacy means for the city's future.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "5",
        "topic": "Business",
        "image": "news5.webp",
        "posts": [
            {
                "id": '1',
                "image": "news5.webp",
                "title": "TikTok Flickers Back to Life After Trump Says He Will Stall a Ban",
                "desc": "After a period of uncertainty, TikTok is once again thriving following former President Trump's announcement that he will delay any plans to ban the app. This article looks at the political and business implications of the ban, the challenges TikTok faced, and what the future holds for the social media giant. Experts weigh in on the influence of TikTok on the global social media landscape and how this decision could impact American companies operating in China. The article also explores the legal battles and negotiations surrounding the app.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news5.webp",
                "title": "What We Know About the TikTok Ban",
                "desc": "The debate over whether to ban TikTok in the U.S. continues to escalate. This article provides a detailed look at the reasons behind the proposed ban, the potential consequences for users, businesses, and the tech industry. It discusses the national security concerns raised by TikTok’s ties to China, as well as the legal and political challenges the app faces. Experts provide insights into the possible outcomes of the ban, including the impact on American companies and the future of social media platforms in the U.S.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news5.webp",
                "title": "The Federal Work Force Grew Briskly Under Biden. It’s Still Historically Low.",
                "desc": "Under President Biden’s administration, the federal workforce has seen significant growth, but it still remains historically low compared to previous decades. This article explores the reasons behind this trend, the challenges faced by federal agencies in attracting talent, and the implications for the U.S. government’s ability to function effectively. It examines Biden’s efforts to reform the federal workforce, the impact of budget cuts, and how the labor market has evolved during his time in office.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        'id': '6',
        'topic': 'Technology',
        'image': 'news6.webp',
        'posts': [
            {
                "id": '1',
                'image': 'news6.webp',
                'title': 'Instagram Debuts New Video-Editing App, as TikTok Deals With a Ban.',
                "desc": "This article delves into Biden’s response to international conflicts, including his administration’s approach to ongoing crises in the Middle East and Eastern Europe. It provides insights into diplomatic efforts, defense strategies, and alliances that have shaped U.S. foreign policy under Biden.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                'image': 'news6.webp',
                'title': 'TikTok Flickers Back to Life After Trump Says He Will Stall a Ban.',
                "desc": "A comprehensive review of Biden’s approach to climate change policies, focusing on regulatory changes, investments in clean energy, and the administration’s efforts to meet emission reduction targets. The article discusses challenges and progress made in the fight against climate change.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                'image': 'news6.webp',
                'title': 'What We Know About the TikTok Ban.',
                "desc": "This piece explores Biden’s role in advancing social justice initiatives, examining key legislation and executive actions aimed at addressing racial and economic inequalities in the U.S. It covers the impact of these policies and reactions from various stakeholders.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "7",
        "topic": "Science",
        "image": "news7.webp",
        "posts": [
            {
                "id": '1',
                "image": "news7.webp",
                "title": "Rain-Collecting Rattlesnakes Give New Meaning to ‘Thirst Trap’",
                "desc": "Researchers have discovered that rattlesnakes have developed a fascinating survival strategy to collect and drink rainwater. These snakes position their coiled bodies to channel rain directly to their mouths, enabling them to hydrate efficiently in arid environments. This unique adaptation highlights the remarkable ways wildlife can evolve to survive harsh conditions. Scientists believe that understanding such behaviors could provide insights into how climate change might impact different species' hydration strategies and survival rates in the wild.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news7.webp",
                "title": "Trump Picks Ex-Congressman to Manage U.S. Nuclear Arsenal",
                "desc": "Former President Donald Trump has selected a former congressman to oversee the management of the United States' nuclear arsenal, a move that has sparked significant debate among political and security experts. The appointment places crucial nuclear policy decisions in the hands of a political figure rather than a career defense expert. Critics argue that this decision could pose risks to national security, while supporters claim it brings a fresh perspective to the nation's nuclear strategy.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news7.webp",
                "title": "F.A.A. Temporarily Halts Launches of Musk’s Starship After Explosion",
                "desc": "The Federal Aviation Administration (F.A.A.) has temporarily grounded SpaceX's Starship program following a recent explosion during a test flight. The incident, which occurred during an experimental launch, has raised concerns about the safety and reliability of the spacecraft designed for deep space missions, including future Mars colonization plans. SpaceX is currently working with regulatory authorities to investigate the cause of the failure and implement necessary safety measures before resuming further test flights.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "8",
        "topic": "Sports",
        "image": "news8.webp",
        "posts": [
            {
                "id": '1',
                "image": "news8.webp",
                "title": "Which of the 4 Remaining Teams Has the Best Chance at the Super Bowl?",
                "desc": "As the NFL season reaches its climax, four teams remain in the hunt for the coveted Super Bowl title. Analysts and fans are debating which team has the strongest chances based on key factors such as offensive firepower, defensive capabilities, and recent performance. Each of the remaining teams has shown resilience and skill throughout the playoffs, but only one can claim the championship. Experts break down the strengths and weaknesses of each contender and predict who might emerge victorious.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news8.webp",
                "title": "Eagles Outlast Rams to Advance to N.F.C. Title Game Against Commanders",
                "desc": "In a thrilling playoff showdown, the Philadelphia Eagles secured a hard-fought victory over the Los Angeles Rams, earning their place in the N.F.C. Championship Game. The Eagles’ strong defensive plays and timely offensive drives proved to be the difference-maker in this closely contested matchup. They will now face the Washington Commanders in a highly anticipated battle for a spot in the Super Bowl. Fans are eager to see if the Eagles can continue their momentum and capture the conference title.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news8.webp",
                "title": "Tom Brady’s Best Day as a Broadcaster Featured a Glaring Conflict of Interest",
                "desc": "Tom Brady's recent appearance as a broadcaster has been widely praised for his insightful analysis and deep understanding of the game. However, his commentary during a crucial playoff matchup raised eyebrows due to a potential conflict of interest, given his past affiliations with several of the teams involved. Some critics argue that his objectivity could be compromised, while others believe his experience adds invaluable perspective to the broadcast. The debate continues as Brady finds his footing in his new role.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "9",
        "topic": "Obituaries",
        "image": "news9.webp",
        "posts": [
            {
                "id": '1',
                "image": "news9.webp",
                "title": "David Schneiderman, Village Voice Editor and Publisher, Dies at 77",
                "desc": "David Schneiderman, a visionary editor and publisher who played a pivotal role in shaping The Village Voice, has passed away at the age of 77. Under his leadership, the publication became a leading voice in independent journalism, covering critical cultural and political issues. Colleagues and admirers remember him for his dedication to fearless reporting and commitment to journalistic integrity. His contributions to the media landscape will be remembered for years to come.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news9.webp",
                "title": "Lynne Taylor-Corbett, ‘Footloose’ Choreographer, Dies at 78",
                "desc": "Lynne Taylor-Corbett, the celebrated choreographer best known for her work on the hit musical 'Footloose,' has died at the age of 78. Her dynamic choreography and creative vision left an indelible mark on both Broadway and the film industry. Throughout her illustrious career, she brought stories to life through dance and inspired generations of performers. Friends, family, and fans pay tribute to her remarkable legacy in the world of performing arts.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news9.webp",
                "title": "Claire van Kampen, 71, Playwright and Arranger of Early Music World, Dies",
                "desc": "Claire van Kampen, a renowned playwright and music arranger specializing in early music, has passed away at the age of 71. Known for her contributions to historical stage productions and her deep understanding of period music, she was instrumental in bringing classical works to modern audiences. Her legacy in the world of theatre and music arrangement continues to influence contemporary productions. Friends and colleagues remember her passion and dedication to the arts.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "10",
        "topic": "The Upshot",
        "image": "news10.webp",
        "posts": [
            {
                "id": '1',
                "image": "news10.webp",
                "title": "How Much Snow Will Fall Where You Live?",
                "desc": "With winter storms sweeping across the country, many Americans are wondering how much snow they can expect in their region. Meteorologists provide detailed forecasts, analyzing weather patterns and potential snowfall accumulation based on current conditions. Whether you're in the Northeast or the Midwest, understanding snowfall predictions can help with planning and preparation for the upcoming winter weather.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news10.webp",
                "title": "The One Thing Americans Remember About Biden.",
                "desc": "As President Biden approaches a key point in his tenure, public perception is becoming more defined by specific moments and policies. Whether it's his handling of the economy, his foreign policy decisions, or his stance on social issues, Americans have formed strong opinions about his leadership. Political analysts explore what resonates most with voters and how these perceptions could shape upcoming elections.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news10.webp",
                "title": "Flashback: Your Weekly History Quiz, Jan. 18, 2025",
                "desc": "Test your knowledge of historical events with this week's flashback quiz. Covering a range of topics from politics to pop culture, the quiz challenges readers to recall key moments from the past. Whether you're a history buff or just looking for a fun challenge, this weekly feature provides an engaging way to explore the events that shaped our world.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "11",
        "topic": "Climate and Environment",
        "image": "news11.webp",
        "posts": [
            {
                "id": '1',
                "image": "news11.webp",
                "title": "More Americans, Risking Ruin, Drop Their Home Insurance",
                "desc": "As climate-related disasters become more frequent and insurance premiums skyrocket, a growing number of homeowners are choosing to forgo insurance coverage altogether. Many cite the increasing costs as unsustainable, while experts warn of the potential financial devastation that could follow natural disasters. This article delves into the factors driving this trend and the risks homeowners face.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news11.webp",
                "title": "L.A. Fires Revive Calls for a ‘Climate Superfund’ Law in California",
                "desc": "Recent wildfires in Los Angeles have reignited discussions about the need for a ‘Climate Superfund’ law in California. Advocates argue that such a law could provide much-needed resources for recovery and future prevention efforts, while opponents worry about the economic impact of additional regulations. The debate continues as lawmakers consider the best course of action to combat climate-related disasters.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news11.webp",
                "title": "Trump Targeted Scientists in His First Term. This Time, They’re Prepared.",
                "desc": "During his first term, former President Trump faced criticism for his approach to climate science and environmental regulations. As speculation grows about his potential return to office, scientists and environmental advocates are preparing for renewed challenges. This article examines the lessons learned from past experiences and how the scientific community plans to respond in the future.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "12",
        "topic": "Education",
        "image": "news12.webp",
        "posts": [
            {
                "id": '1',
                "image": "news12.webp",
                "title": "Columbia Professor Says She Was Pushed to Retire Because of Her Activism",
                "desc": "A longtime professor at Columbia University claims she was pressured to retire due to her outspoken activism on social and political issues. She argues that her advocacy for marginalized communities and controversial policy positions led to tensions with the administration. The university denies any wrongdoing, but the case has sparked a broader debate about academic freedom and activism in higher education.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news12.webp",
                "title": "What if ICE Agents Show Up? Schools Prepare Teachers and Parents",
                "desc": "With immigration enforcement policies in flux, schools across the country are taking proactive steps to prepare teachers and parents for potential encounters with ICE agents. From legal guidance to emotional support, educators are working to ensure that students feel safe and protected in the classroom, regardless of their immigration status. This article explores how schools are addressing the challenges posed by uncertain immigration policies.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news12.webp",
                "title": "Black Student Enrollment at Harvard Law Drops by More Than Half",
                "desc": "New data reveals a significant decline in Black student enrollment at Harvard Law School, raising concerns about diversity and inclusion at one of the nation's top institutions. Experts cite various factors, including changing admissions policies, financial barriers, and broader social trends. Advocates are calling for greater efforts to recruit and support Black students in legal education.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "13",
        "topic": "Health",
        "image": "news13.webp",
        "posts": [
            {
                "id": '1',
                "image": "news13.webp",
                "title": "Kennedy’s Plan for the Drug Crisis: A Network of ‘Healing Farms’",
                "desc": "In response to the escalating drug crisis, Kennedy has proposed the creation of 'Healing Farms,' a network of rehabilitation centers that focus on holistic recovery methods. These facilities aim to provide addiction treatment in a supportive, nature-based environment. Supporters praise the initiative as a compassionate solution, while critics question its scalability and funding sources.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news13.webp",
                "title": "When the Retirement Community Goes Bankrupt",
                "desc": "The financial collapse of retirement communities is leaving many elderly residents in a state of uncertainty and distress. As more facilities face financial difficulties, retirees are forced to navigate complex legal and financial challenges to secure their living arrangements. This article examines the factors contributing to the bankruptcies and offers insights into potential solutions for affected seniors.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news13.webp",
                "title": "Kennedy Sought to Stop Covid Vaccinations 6 Months After Rollout",
                "desc": "Newly surfaced reports indicate that Kennedy advocated for halting Covid-19 vaccinations just six months after their initial rollout. Citing concerns over safety and efficacy, he urged for a reevaluation of the vaccine program. Public health officials and experts pushed back, emphasizing the importance of widespread vaccination to combat the pandemic. The controversy continues to fuel debates over public health policies.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "14",
        "topic": "Reader Center",
        "image": "news14.webp",
        "posts": [
            {
                "id": '1',
                "image": "news14.webp",
                "title": "From a Bustling Kitchen to a Bustling Newsroom",
                "desc": "A former chef shares their journey from working in a busy kitchen to becoming a journalist in a fast-paced newsroom. The story explores the challenges of career transitions, the skills that overlap between the two professions, and the passion that drives individuals to follow their dreams in unexpected ways.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news14.webp",
                "title": "In Taser Logs, a Practice That Long Went Unnoticed Is Revealed",
                "desc": "An in-depth investigation into law enforcement Taser usage reveals a long-overlooked pattern of misuse and questionable practices. Previously undisclosed logs expose inconsistencies in reporting and accountability, raising concerns about transparency and oversight in policing methods.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news14.webp",
                "title": "A Frankenstein Filing Error: It’s Alive!",
                "desc": "A bizarre administrative error brought an old legal case back to life, creating confusion and chaos within the judicial system. This unusual case serves as a reminder of how minor mistakes in legal filings can have unintended and sometimes humorous consequences.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        "id": "15",
        "topic": "Explore Times Events",
        "image": "news15.webp",
        "posts": [
            {
                "id": '1',
                "image": "news15.webp",
                "title": "Join NYT Cooking for an ‘Easy Weeknight Dinners’ Book Talk in N.Y.C.",
                "desc": "NYT Cooking is hosting an exciting event in New York City featuring discussions on simple yet delicious weeknight dinner recipes. Attendees will have the opportunity to hear from top chefs, authors, and food enthusiasts as they share tips and insights on making cooking easier and more enjoyable.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '2',
                "image": "news15.webp",
                "title": "Join Us to Hear About the Loopholes of Hawaii’s Pay-to-Play Law",
                "desc": "An upcoming panel discussion will shed light on the controversial loopholes within Hawaii’s Pay-to-Play law. Experts and journalists will explore how these legal gaps impact politics and governance, offering insights into potential reforms and their implications for the future.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            },
            {
                "id": '3',
                "image": "news15.webp",
                "title": "‘The Daily’ Podcast at the Tribeca Festival",
                "desc": "The popular New York Times podcast ‘The Daily’ is set to take the stage at the prestigious Tribeca Festival. The live event will feature behind-the-scenes insights, in-depth discussions on current events, and interactions with the podcast’s hosts and special guests.",
                "author": "Amir Cohen/Reuters",
                "published_date": "2025-01-25"
            }
        ]
    }
]




const News = () => {
    return <ReuseNews data={newsData} />
};

export default News;
