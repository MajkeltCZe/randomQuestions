let questions = [
    "When was the last time you lied and what was it?",
    " What\'s the worst thing you\'ve ever done at work?",
    " What\'s something you\'re glad your family doesn\'t know about you?",
    " Have you ever cheated on someone?",
    "  Have you ever been cheated on?",
    "  What\’s the biggest misconception about you?",
    "  What\’s the worst piece of advice you\’ve given someone?",
    "  What was the worst mistake that you\’ve made in your life?",
    "  When was the last time you cried and why?",
    "  What\'s your biggest fear in life?",
    "  What\'s your relationship dealbreaker?",
    " What\'s a secret you\'ve never told anyone?",
    "  What\'s the worst thing you\'ve ever done?",
    "   What do most people think is true about you but isn\’t?",
    "   What is the one thing you dislike about yourself?",
    "   What is the one thing you really like about yourself?",
    "   What makes a relationship toxic in your opinion?",
    "   What\’s the best piece of advice you\’ve given someone?",
    "  What\’s the best piece of advice you\’ve gotten from someone else?",
    "  What is your greatest weakness?",
    "  What is your greatest strength?",
    "   What\’s your biggest regret so far?",
    "  What is your biggest insecurity?",
    "   Do you believe in soul mates?",
    "   What is the most disgusting thing you\’ve ever done?",
    "   Do you have any anonymous social media accounts?",
    "   What is something you wish people knew about you?",
    "   Have you ever re-gifted a present?",
    "   What\’s the meanest thing you\’ve ever said to someone?",
    "What\’s the best compliment you\’ve ever given?",
    "What is your biggest relationship/dating ick?",
    "What\’s the one thing you would do if you knew there were no consequences?",
    " What\'s the most embarrassing thing you\'ve ever done?  ",
    " Have you ever broken the law? If so, why?   ",
    " What is your biggest pet peeve?  ",
    "  What\'s the worst date you\'ve been on? ",
    " What\'s the best date you\'ve been on? ", 
    "  What is your favourite movie that you secretly know is actually terrible? ",
    " What was the last time you\’ve laughed the hardest? ",
    " What\’s the most childish thing you still do? ",
    " What is the grossest thing you have done today? ",
    " What was your best moment in life so far? ",
    " Who has the best sense of humour in this room? ",
    " What\’s your favourite song that you secretly know is awful? ",
    " What\’s the most embarrassing music you listen to? ",
    " What is the weirdest trend you\'ve ever participated in? ",
    " What\’s the last thing you Googled? ",
    " What\’s the most adventurous thing you\’ve ever done? ",
    "  Who was your first real celebrity crush? ",
    " Who\'s the last person you searched on Instagram? ",
    " What\'s the drunkest you\'ve ever been? ",
    " Do you ever talk to yourself in the mirror? ",
    " What\’s your go-to karaoke song? ",
    " What is the weirdest thing you\’ve ever bought? ",
    "  What\’s your favourite TV show that you secretly know is awful? ",
    "  When was the last time you lied? ",
    "When was the last time you cried? ",
    "What\'s your biggest fear? ",
    "What\'s your biggest fantasy? ",
    "Do you have any fetishes? ",
    "What\'s something you\'re glad your mum doesn\'t know about you? ",
    "Have you ever cheated on someone? ",
    "What\'s the worst thing you\'ve ever done? ",
    "What\'s a secret you\'ve never told anyone? ",
    "Do you have a hidden talent? ",
    "Who was your first celebrity crush? ",
    "What are your thoughts on polyamory? ",
    "What\'s the worst intimate experience you\'ve ever had? ",
    "Have you ever cheated in an exam? ",
    "What\'s the most drunk you\'ve ever been? ",
    "Have you ever broken the law? ",
    "What\'s the most embarrassing thing you\'ve ever done? ",
    "What\'s your biggest insecurity? ",
    "What\'s the biggest mistake you\'ve ever made? ",
    "What\'s the most disgusting thing you\'ve ever done? ",
    "Who would you like to kiss in this room? ",
    "What\'s the worst thing anyone\'s ever done to you? ",
    "Have you ever had a run in with the law? ",
    "What\'s your worst habit? ",
    "What\'s the worst thing you\'ve ever said to anyone? ",
    "Have you ever peed in the shower? ",
    "What\'s the strangest dream you\'ve had? ",
    "Have you ever been caught doing something you shouldn\'t have? ",
    "What\'s the worst date you\'ve been on? ",
    "What\'s your biggest regret? ",
    "What\'s the biggest misconception about you? ",
    "Why did your last relationship break down? ",
    "Have you ever lied to get out of a bad date? ",
    "What\'s the most trouble you\'ve been in? ",
    "If you could be invisible for a day, what\’s the first thing you would do? ",
    "What\’s the biggest secret you\’ve kept from your parents? ",
    "What\’s the most embarrassing music you listen to? ",
    "What\’s one thing you love most about yourself? ",
    "Who is your secret crush? ",
    "Who is the last person you creeped on social media? ",
    "When was the last time you wet the bed? ",
    "If a genie granted you three wishes, what would you ask for and why? ",
    "What\’s your biggest regret? ",
    "If you had to only ever watch rom coms or only watch scary movies for the rest of your life, which would you choose and why? ",
    "Where is the weirdest place you\'ve ever gone to the bathroom? ",
    "Have you ever ghosted on someone? ",
    "Which player would survive a zombie apocalypse and which would be the first to go? ",
    "Reveal all the details of your first kiss",
    "What excuse have you used before to get out plans? ",
    "What\'s the longest you\'ve ever slept? ",
    "What\’s the shortest you\’ve ever slept? ",
    "Read the last text you sent your best friend or significant other out loud. ",
    "What\'s your biggest pet peeve? ",
    "When was the last time you lied? ",
    "What five things would you bring to a deserted island? ",
    "Which is your favorite Hollywood Chris?  Chris Evans, Chris Pratt, Chris Hemsworth or Chris Pine? ",
    "What\'s the most embarrassing thing you ever did on a date? ",
    "What is the boldest pickup line you\'ve ever used? ",
    "What celebrity do you think you most look like? ",
    "How many selfies do you take a day? ",
    "What is one thing you would stand in line an hour for? ",
    "When was the last time you cried? ",
    "What\'s the longest time you\'ve ever gone without showering? ",
"What\'s the most embarrassing top-played song on your phone? ",
"What was your favorite childhood show? ",
"If you had to change your name, what would your new first name be? ",
"If you could be a fictional character for a day, who would you choose? ",
"If you could date a fictional character, who would it be? ",
"What\'s your biggest fear? ",
"What\'s one silly thing you can\'t live without? ",
"Where was your favorite childhood vacation spot? ",
"What is the weirdest trend you\'ve ever participated in? ",
"If you could only listen to one song for the rest of your life, what would you choose? ",
"Who do you text the most? ",
"Have you ever been fired from a job? ",
"If you had to wear only flip flops or heels for the next 10 years, which would you choose? ",
"What\’s an instant deal breaker in a potential love interest? ",
"If you could only eat one thing for the rest of your life, what would you choose? ",
"What is the biggest lie you ever told your parents? ",
"What\'s the worst physical pain you\'ve ever experienced? ",
"Which player knows you the best? ",
"If you could only accomplish three things in life, what would they be? ",
"What\'s the weirdest thing you\'ve ever eaten? ",
"Have you ever gone skinny dipping? ",
"Who was your first celebrity crush? ",
"What\'s the strangest dream you\'ve ever had? ",
"What are the top three things you look for in a love interest? ",
"What is your worst habit? ",
"How many stuffed animals do you own? ",
"Do you sleep with any stuffed animals? ",
"What is your biggest insecurity? ",
"Name one thing you\’d do if you knew there\’d be zero consequences.",
"When\’s the last time you said you were sorry?  For what? ",
"Do you still have feelings for any of your exes? ",
"What\’s the most embarrassing thing you\’ve done to get a crush\’s attention? ",
"What\’s the most random thing in your bag right now? ",
"What\’s the last movie that made you cry? ",
"What\’s the last song that made you cry? ",
"What are the five most recent things in your search history? ",
"When\’s the last time you got caught in a lie? ",
"What gross smell do you actually enjoy? ",
"Who was the last person you said “I love you” to? ",
"Have you ever had a paranormal experience? ",
"If you could have lunch with a famous person, dead or alive, who would you pick and why? ",
"If you were handed $1,000 right now, what would you spend it on? ",
"Who\’s your celebrity “hall pass” if you were to meet that person while in a relationship? ",
"Have you ever cheated on an exam? ",
"What\’s the most awkward thing you\’ve ever been caught doing? ",
"Have you ever flirted with a close friend\’s sibling? ",
"What was your first concert? ",
"If you had the choice to never have to sleep again, would you take it? ",
"If you had to get a tattoo today, what would it be? ",
"Even if you\’d be paid $1 million for it, what\’s something you would never do? ",
"If you could travel to the past and meet one person, who would it be? ",
"What popular TV show or movie do you secretly hate? ",
"Where do you see yourself in 10 years? ",
"What\’s the most adventurous thing you\’ve ever done? ",
"When have you been in the most trouble in school? ",
"If you had to always be overdressed or underdressed, which would you choose? ",
"Who would you cast as you and your friends in the movie version of your life? ",
"What\’s the luckiest thing that\’s ever happened to you? ",
"Do you have any phobias? ",
"Do you believe in an afterlife? ",
"If you had to move to a different country tomorrow, where would you go? ",
"What do you want to be remembered for most in life? ",
"Do you believe in soul mates? ",
"Have you ever re-gifted a present?  What was it? ",
"What\’s the weirdest thing you do when you\’re alone? ",
"What movie (or franchise) are you most embarrassed to love? ",
"Have you ever had an imaginary friend?  Describe them. ",
"What gross food combo do you secretly love? ",
"If you could become besties with a celebrity, who would it be? ",
"What\’s the most embarrassing nickname you\’ve ever been given? ",
"If you could trade lives with any person you know for a day, who would it be? ",
"What\’s the worst thing you\’ve ever said to anyone? ",
"What\’s the scariest dream you\’ve ever had? ",
"What\’s the weirdest place you\’ve kissed/hooked up with someone? ",
"Have you ever slid into a celebrity\’s DMs? ",
"What superstitions do you believe in? ",
"Are you Team Edward or Team Jacob (or both?) ",
"What app do you check first in the morning? ",
"What\’s the most embarrassing thing you\’ve ever purchased? ",
"What\’s the longest you\’ve ever gone without brushing your teeth? ",
"What\’s the weirdest thing you have in your bedroom? ",
"What\’s the weirdest thing you have in your locker? ",
"How often do you wash your sheets? ",
"Do you sing in the shower?  What was the last song you belted out? ",
"What\’s the weirdest thing you do while driving? ",
"Have you ever started a rumor about someone?  What was it? ",
"If you could talk to a fortune teller, what would you ask them? ",
"Do you believe in aliens?  What do you think they look like? ",
"Have you ever given a fake number? ",
"What\’s more important to you: love or money? ",
"What\’s your most shallow reason for not going on a second date?",
"How many people in the room would you be willing to kiss?",
"Have you ever gotten in a physical altercation with someone?",
" What\’s your longest relationship?",
"Have you ever had a secret relationship?",
"Have you ever kissed anyone in this room?",
" What\’s your favorite drink?",
" What\’s the biggest lie you\’ve ever told?",
"What do your current undergarments look like?",
"Would you ever hook-up with someone else\’s partner?",
"Do you cover your eyes during the scary part of a movie?",
" If you suddenly became invisible, what would you do with your newfound transparency?",
"Have you ever wanted to try LARP (live-action role play)?",
"Who is your favorite family member?",
"What is the biggest secret you\’ve kept from your parents when you were growing up?",
"Tell us about the last dream you can remember. Don\’t leave any details out!",
"Have you ever lied about being sick so you could stay home from work or school?",
"Have you ever told someone you wouldn\’t be home just so they wouldn\’t come over to yours?",
"If anyone in your family could win an award for being the most annoying, who would it be?",
"Have you ever bought something to wear to an event, and then returned it to the store when the event was over?",
"Did you ever break up with someone just before a public holiday so that you didn\’t have to buy them a gift?",
"What is your least favorite part about family gatherings?",
"What is your favorite movie that you secretly know is actually terrible?",
"Have you ever bribed or flirted with a police officer to get out of a ticket?",
"Do you have a bucket list? If so, what is one thing on that list?",
"What is the strangest thing you have ever bought?",
"Have you ever shared chewing gum with anyone?",
"Have you ever danced on a table when you were drunk?",
"What is the one thing you dislike about yourself?",
"What is the one thing you really like about yourself?",
"If you could hire someone to do one thing for you, what would it be?",
"What was the most embarrassing thing that you ever did while on a date?",
"What is your biggest pet peeve?",
"Would you ever blame someone else for your farts at the office?",
"What is your favorite feature on yourself?",
"What is the one mannerism you judge all potential partners on?",
"If you could cheat and no one would ever, ever find out, would you?",
"What\’s the first thing you would do if you woke up one day as the opposite sex?",
"What\’s the most childish thing you still do?",
"What\’s the most embarrassing thing you\’ve done drunk?",
"Who would you rather not be in this room right now?",
"Who is your least favorite family member, and why?",
"What\’s the secret you swore never to tell somebody else?",
"Who has made you cry the most?",
"What is your favorite drink while getting over a heartbreak?",
"Where are you most ticklish?",
"Have you ever stolen anything from the gas station?",
"Out of everyone in the room, who do you think is most likely to spend a night in jail and why?",
"Have you ever bribed a police officer?",
"Has someone ever accidentally seen you naked?",
"Have you ever watched a movie rated higher than your age?",
"Have you given anybody you\’re not in a relationship with a lap dance?",
"Would you be willing to kiss your best friend on a dare?",
"Have you ever made out with a cute stranger in a bar as a dare?",
"Who would you rather be, a porn star or a stripper?",
"How do you de-stress after a tough day?",
"If you had to redo one year of your life, which one would it be and why?",
"Calling or texting?",
"Are you a city person or a country person?", 
"What's something you\’d like to learn?",
"What's your favorite season?",
"What's your favorite season?",
"Do you have a favorite holiday?", 
"What's your zodiac sign?",
"Do you believe in fate?", 
"Are you an early bird or a night owl?", 
"Deep dish pizza or thin crust?",
"If you had one superpower, what would it be?", 
"Who would you want to play you in a movie?",
"What's your dream car?", 
"Summer or autumn?",
"Winter or spring?",
"Skiing or jet skiing?", 
"Beach or mountains?",
"What\’s your favorite aisle in the grocery store?", 
"What's your favorite part of your day?",
"How do you unwind at the end of the day?",
"What shows are on your Netflix queue?",
"Instagram or TikTok?",
"What's the best concert you've ever been to and why?",
"What genre of music do you listen to?",
"Do you play any instruments?", 
"Country or rock 'n' roll?",
"Do you have a hidden party trick?", 
"Do you like art?",
"Have you been to any new art exhibits or galleries lately?", 
"What\’s your favorite museum?", 
"Is there a museum and or art installation you want to check out?",
"Are you an introvert or extrovert?", 
"Which Hogwarts house do you belong in?",
"Do you believe in magic?", 
" If you could have dinner with three people, living or deceased, who would they be?",
"Do you believe in ghosts?",
"Have you ever encountered any paranormal or supernatural spirits?", 
"Which Avenger do you most identify with and why?",
"Who inspires you most?",
" What\’s the craziest thing you've ever done?",
"Who never fails to make you laugh?",
"When you\’re feeling down, what always cheers you up?",
"What\’s your guilty pleasure?", 
"Do you eat ice cream in a bowl, right out of the pint or in a cone?", 
"If you were an ice cream flavor, which one would you be?",
"What was your favorite childhood movie?",
"Do you have a favorite Disney character?", 
"Have you ever been to Disney World?", 
"What are you currently reading?",
"Who is your favorite author?",
"What was your favorite book growing up?",
"If you could be any character in a book, who would it be?",
"What\’s one book that would make a really great movie?",
"What was the last movie you saw?",
  ];