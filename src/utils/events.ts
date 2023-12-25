interface coordinatorType {
  name: string;
  phone: string;
}
interface eventsType {
  image: string;
  hoverImage: string;
  title: string;
  description?: string;
  regFees: string;
  prize: string;
  venue: string;
  date: string;
  coordinators?: coordinatorType[];
  rules: string;
}

const events: eventsType[] = [
  {
    image: "/assets/events/cricket.svg",
    hoverImage: "/assets/events/cricket2.svg",
    title: "Short Hand Cricket",
    description: "Batting, bowling, and everything in between! 🏏",
    regFees: "Rs. 1,000 /- (each team)",
    prize: "Rs. 15,000 /- ",
    venue: "RCCIIT College Ground",
    date: "12th to 14th January, 2024 ",
    coordinators: [
      {
        name: "Tahir Imam",
        phone: "8910303288",
      },
      {
        name: "Basanta Kumar Shaw",
        phone: "7547927975",
      },
      {
        name: "Soumyadip Pal",
        phone: "8617321378",
      },
    ],
    rules: `<!DOCTYPE html>
            <html>
            <head>
                <title>Tournament Rules</title>
            </head>
            <body>
                <ol class="flex flex-col gap-3 text-xl">
                    <li>1. A team should have a total of 8 players with a maximum of 2 reserve players.</li>
                    <li>2. Each innings will be 6 overs. A maximum of 2 bowlers can bowl a maximum of 2 overs, and every other player can bowl a maximum of 1 over.</li>
                    <li>3. Members must carry their college ID cards during the entire event.</li>
                    <li>4. All players should be from the same college.</li>
                    <li>5. Once enlisted in one team, a player cannot switch to another team.</li>
                    <li>6. Teams must be on the field at least 30 minutes prior to the scheduled game time.</li>
                    <li>7. Walkover will be given if a team delays the scheduled game time by 15 minutes.</li>
                    <li>8. Each match will be of 'knock-out' type.</li>
                    <li>9. Upon completion of the knock-out matches, semi-final & final matches will be carried out based on the expert committee decisions.</li>
                    <li>10. Sixes are not allowed. If a ball goes out of the boundary without touching the ground, then the batsman will be given out.</li>
                    <li>11. The bowler should bowl with a bent elbow from the side of their head without revolving their arm and not taking any step.</li>
                    <li>12. There is a speed limit for bowling. If it crosses that limit and the batsman appeals for it within 3 seconds and the umpire agrees, then it will be called a 'fast' ball, and the ball would be a 'NO' ball.</li>
                    <li>13. In case of a tie, there will be a super-over. If there is still a tie, it would be broken by a toss.</li>
                    <li>14. Each team should have their own equipment (e.g., bats). All types of bats are allowed.</li>
                    <li>15. Decision of the field umpire stays. Any argument with the umpire will not be tolerated.</li>
                    <li>16. Prize Money can be changed depends upon the number of Registrations.</li>
                    <li>17. Game officials have the right to modify rules as per necessity.</li>
                    <li>18. Unsporting behavior of any player may result in the direct disqualification of the team.</li>
                    <li>19. All other standard ICC rules will be applicable.</li>
                </ol>
            </body>
            </html>
            `,
  },
  {
    image: "/assets/events/badminton.svg",
    hoverImage: "/assets/events/badminton2.svg",
    title: "Badminton",
    description: "Shuttle your way to glory! 🏸",
    regFees: "Rs. 100 /- (Singles)  ;  Rs. 200 /- (Doubles)",
    prize: "Rs. 7,000 /-",
    venue: "Spuddy Badminton Academy",
    date: "20-21st January,2024",
    coordinators: [
      {
        name: "Arnab Dey",
        phone: "6291453074",
      },
      {
        name: "Atanu Biswas",
        phone: "8116335804",
      },
      {
        name: "Shreya Shome",
        phone: "8777358502",
      },
      {
        name: "Sauradip Paul",
        phone: "6289071523",
      },
    ],

    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Tournament Rules</title>
        </head>
        <body>
           
            <ul class="flex flex-col gap-3 text-xl">
                <li>• Singles and double tournaments will be organized separately.</li>
                <li>• All students must carry their student-identity card.</li>
                <li>• Each match will be of "knock-out" type.</li>
                <li>• Each player should be a college student.</li>
                <li>• Shuttlecock will be provided by the tournament officials.</li>
                <li>• Each player should have their own racket.</li>
                <li>• Indiscipline towards any officials or volunteers will not be tolerated and will result in immediate disqualification.</li>
                <li>• Everyone is requested to stay in the venue during the matches for their upcoming rounds.</li>
                <li>• Fixtures will be released before the start of the tournament.</li>
                <li>• Every participant must arrive 30 minutes before the start of the tournament.</li>
                <li>• Game officials have the right to modify rules as per necessity.</li>
            </ul>
            <h3 class="text-xl font-bold underline tracking-wider py-3">Singles Boundary Rules:</h3>
            <ul class="flex flex-col gap-3 text-xl">
                <li>Sidelines: The shuttlecock must land within the inner boundary lines of the court's singles sideline.</li>
                <li>Baselines: The shuttlecock must land within the inner boundary lines of the court's singles baseline.</li>
                <li>Service Courts: During service, the shuttlecock must be hit within the diagonally opposite service court. The server must stand within the service court and hit the shuttlecock to the diagonally opposite service court. Third court service will be considered out.</li>
                <li>Mid-Court Line: During a serve, the shuttlecock must pass over the first court line without touching it. Players should not touch any of the lines on the court during a serve. This includes the feet of the server and receiver. Players can stand anywhere in their half of the court, but they cannot touch any of the lines or be outside of the playing court.</li>
            </ul>
            
            <h3 class="text-xl font-bold underline tracking-wider pt-2">Doubles Boundary Rules:</h3>
            <ul class="flex flex-col gap-3 text-xl py-3">
                <li><b>Sidelines:</b> Similar to singles, the shuttlecock must land within the inner boundary lines of the court's doubles sideline.</li>
                <li><b>Baselines:</b> The shuttlecock must land within the inner boundary lines of the court's doubles baseline.</li>
                <li><b>Service Courts:</b> The service must be delivered diagonally, and both service courts are in play. The server must stand within their respective service court and hit the shuttlecock to the diagonally opposite service court.</li>
                <li><b>Mid-Court Line:</b> During a serve, the shuttlecock must pass over the short service line without touching it.</li>
            </ul>
        </body>
        </html>`,
  },
  {
    image: "/assets/events/chess.svg",
    hoverImage: "/assets/events/chess2.svg",
    title: "Chess",
    description: "  Mind over board! ♚♛",
    regFees: "Rs. 150 /-",
    prize: "Rs. 2,500 /-",
    venue: "RCCIIT,Kolkata",
    date: "19th January,2024",
    coordinators: [
      {
        name: "Soumyadeep Chakraborty",
        phone: "6285408423",
      },
      {
        name: "Dibakar Banerjee",
        phone: "9051484336",
      },
    ],

    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Tournament Rules</title>
        </head>
        <body>
            <ul class="flex flex-col gap-3 text-xl">
                <li>• The Tournament will be in Swiss format, i.e., competitors meet one-on-one in each round and are paired using a set of rules designed to ensure that each competitor plays opponents with a similar running score but does not play the same.</li>
                <li>• Total Number of rounds will be 5.</li>
                <li>• Time control for the tournament is 15+0 in each round.</li>
                <li>• The Inauguration will start from 10AM, and the 1st round will start from 10:30 AM sharp.</li>
                <li>• Participants have to install a chess clock on their phone which will be used during gameplay.</li>
                <li>• Touch move Rule will be followed. If you touch a piece on the chessboard, you must move it. It also requires you to capture an opponent’s piece if you touch it. This rule only applies if you can make a legal move with the piece you touched.</li>
                <li>• If an illegal move is made on the board, the player will be given a warning first. But for the second time during that game, if they make another illegal move, they will lose the game.</li>
                <li>• If after all the Swiss rounds there is a tie for the 1st place, there will be a tiebreak (3 match series of blitz(3+2) or Armageddon(8 min vs 7 min) or both) depending upon the time availability. A similar rule is applicable for 2nd and 3rd place in case of ties.</li>
                <li>• All participants must carry their college ID card and Aadhaar Card.</li>
                <li>• Prize Money can be changed depending upon the number of Registrations.</li>
                <li>• All other standard FIDE rules will be applicable.</li>
                <li>• Unsporting behavior of any player may result in the direct disqualification of the team.</li>
                <li>• Game officials have the right to modify rules as per necessity.</li>
            </ul>
        </body>
        </html>
        `,
  },
  {
    image: "/assets/events/carrom.svg",
    hoverImage: "/assets/events/carrom2.svg",
    title: "CARROM",
    description: "Striker, pocket, victory! 🎱",
    regFees: "Rs. 100 /- (Singles)  ;  Rs. 200 /- (Doubles)",
    prize: "Rs. 7,000 /-",
    venue: "RCCIIT College Campus",
    date: "12th & 13th January,2024",
    coordinators: [
      {
        name: "Riyan Sarkar",
        phone: "9123674274",
      },
      {
        name: "Sneha Das",
        phone: "7890813060",
      },
      {
        name: "Grantha Das",
        phone: "7278271477",
      },
    ],

    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Carrom Tournament Rules</title>
        </head>
        <body>
            <h2 class="text-2xl font-semibold py-3">General Rules:</h2>
            <ol  class="flex flex-col gap-3 text-xl">
                <li>1. All the participants must carry their own college ID Card and Aadhar Card during the entire event.</li>
                <li>2. Unsporting behavior of any player may result in direct disqualification of the team/player.</li>
                <li>3. Once enlisted, players cannot switch teams/players.</li>
            </ol>
        
            <h2 class="text-2xl font-semibold py-3">Game Rules:</h2>
            <div class="text-xl flex flex-col items-start gap-5">
            <div>
            <h3><b>How to Win a Match:</b></h3>
            <p>Round of 16 and Quarter-finals will be in Knockout Mode. Only one board will be played. You have to win the game to qualify for the next round. Semi-finals and Final match will be played with three (3) sets of board game. Whoever wins two sets will win the match. There will be no points calculation. Whoever finishes all of their carrommen first, legally, will win the board.</p>
            </div>
            <div>
            <h3><b>Serving First Rules:</b></h3>
            <p>Who serves first in Carrommen: Rules for serving first in a carrom board. In order to decide on the first server, you can hold a toss or use any such method.</p>
            </div>
            <div>
            <h3><b>Striking the Carrommen with Striker:</b></h3>
            <p>How to strike carrommen: Rules for striking the carrommen with the striker. As per carrom board rules, the first server has three(3) attempts to break the cluster of carrommen on their first strike. However, after the first turn is over, you have only one chance to strike the carrommen properly. To make the most of one’s strike, one must bear the following points in mind:</p>
            <!-- Include all the points -->
            </div>
            <div>
            <h3><b>Rules for Queen/Red Queen:</b></h3>
            <p>How and when to cover the Queen: Rules for the queen/ Rules for the red coin As per the rules of carrom board, you can neither pocket nor cover the queen whenever you like. So, let’s see when and how you can pocket and cover the queen:</p>
            <!-- Include all the rules for the queen -->
            </div>
            <div>
            <h3><b>Carrom Board Arrow Rules:</b></h3>
            <p>Position and Role of arrows and Lines on Carrom Board. When it comes to the diagonal arrows on the board, they should not be touched by the striker while attempting a stroke. These arrows define the limits within which one must confine one’s striker.</p>
            </div>
            <div>
            <h3><b>Last Coin Rules:</b></h3>
            <p>Carrom board last coin of opponent’s rule; last coin and the queen rule A) Rule for the last coin of the opponent. When a player pockets his opponent’s last carromman onboard, he/they will lose the board. Therefore, one has to be extra vigilant in these situations and avoid striking the last carromman of one’s opponent. B) Rule for the last coin and the queen. In case a player has only one piece left, and the queen has not been pocketed yet, he can strike his last coin without any penalty; however, he cannot pocket it before the queen.</p>
            <!-- Include all the rules for the last coin and queen -->
            </div>
            <div>
            <h3><b>Position Rules:</b></h3>
            <p>Rules for the Position of Pieces and strikers after they leave the board or get entangled. During the course of play, some pieces and the striker may take awkward positions or may go out of the board and fall on the ground. Let’s see what the rules for such situations are:</p>
            <!-- Include all the position rules -->
            </div>
            </div>
            
        </body>
        </html>
        
        `,
  },
  {
    image: "/assets/events/badminton.svg",
    hoverImage: "/assets/events/badminton2.svg",
    title: "Kabaddi (Girls and Boys)",
    description:
      " In the realm of agility and daring raids, Kabaddi takes center stage! 🤸‍♂ ",
    regFees: "Rs. 400 /- per Team",
    prize: "Rs. 8,000 /-",
    venue: "KOLKATA KABADDI COACHING (Near Girish Park Metro)",
    date: "13 th & 14 th January, 2024",
    coordinators: [
      {
        name: "Harsh Jaiswal",
        phone: "7903717738",
      },
      {
        name: "Sreya Sahoo",
        phone: "7864061484",
      },
    ],

    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Kabaddi Tournament Rules</title>
        </head>
        <body>
            <ul  class="flex flex-col gap-3 text-xl">
                <li>1. A team should have a total of 10 players with 3 reserve players.</li>
                <li>2. All participants must carry their valid student-identity card and Aadhaar card.</li>
                <li>3. All participants must be 17+ as well as a college student.</li>
                <li>4. Each match will be of Knock-out type.</li>
                <li>5. Raiders must enter the opponent's half in a crouching position and make a continuous audible chant of "kabaddi."</li>
                <li>6. Players must complete a raid within a specified time.</li>
                <li>7. Points are scored when a raider successfully crosses the baulk line and returns to their half without being tagged. Each tagged defender also earns a point for the raider's team.</li>
                <li>8. Not more than one raider shall be allowed inside the court of the opponent in a single round.</li>
                <li>9. If a player crosses the boundary line, they are out.</li>
                <li>10. The game will consist of two halves, each lasting 10 minutes (may vary). There is a break of 5 minutes between the halves.</li>
                <li>11. None of the antis will be allowed to touch the raider’s court during the raid or before the raid has been completed. If any antis touch the raider’s court before the raid has been completed, they shall be declared out, and the opponent team will be rewarded.</li>
                <li>12. <b>Bonus Point Rule:</b>
                    <ul  class="flex flex-col gap-3 text-xl">
                        <li>• The raider must cross the bonus line without being touched by any defenders.</li>
                        <li>• There should be a minimum number of defenders on the court for the raid to be eligible for a bonus point. Typically, at least six defenders must be present on the court.</li>
                    </ul>
                </li>
                <li>13. <b>DO OR DIE RAID:</b> If a team has two successive Empty raids, the third raid is a Do-Or-Die raid, and failure to score in this third raid results in the raider being out, and the opposite team gets a point.</li>
                <li>14. <b>SUPER TACKLE:</b> If the defending team has three or fewer players on the ground, then with the successful tackle of a raider, the team gets two points instead of one.</li>
                <li>15. <b>SUPER RAID:</b> When a raider scores three or more points for the team in a single raid.</li>
                <li>16. <b>ALL OUT:</b> If a team gets all seven players on the opposing team out ("All Out"), they earn two additional points, and the players are placed back in the game.</li>
                <li>17. Substitution is allowed during the match time.</li>
                <li>18. Decisions given by the match Referee are the final decisions regarding any concern.</li>
                <li>19. Indiscipline towards any officials or volunteers will not be tolerated and will result in immediate disqualification.</li>
                <li>20. Everyone is requested to stay in the venue while the matches for their upcoming rounds.</li>
                <li>21. Fixtures will be released before the start of the tournament.</li>
                <li>22. Every participant is to arrive 30 mins before the start of the event for their verification.</li>
                <li>23. Cash prizes, trophies, and certificates will be distributed at the end of the day of the tournament.</li>
            </ul>
        </body>
        </html>
        
        `,
  },
  {
    image: "/assets/events/tug.svg",
    hoverImage: "/assets/events/tug2.svg",
    title: "Tug of War (boys and girls)",
    description:
      "   Strength, strategy, and the ultimate test of teamwork! 💪🤝",
    regFees: "Rs. 400 /- (each team)",
    prize: "Rs. 8,000 /-",
    venue: "RCCIIT College Ground",
    date: "19th January, 2024",
    coordinators: [
      {
        name: "Swastika Bose",
        phone: "7044669104",
      },
      {
        name: "Swapnil Chowdhury",
        phone: "9433936906",
      },
      {
        name: "Souvik Panda",
        phone: "9903403585",
      },
      {
        name: "Shreya Sarkar",
        phone: "7439727696",
      },
    ],

    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Tug-of-War Tournament Rules</title>
        </head>
        <body>
            <ol  class="flex flex-col gap-3 text-xl">
                <li>1. A team should have a total of 5 players with 1 reserve player.</li>
                <li>2. Each match will be of Knock-out type.</li>
                <li>3. There will be 3 rounds in each game. The team with the maximum wins will qualify for the next round.</li>
                <li>4. Members must carry their college ID Cards during the entire event.</li>
                <li>5. Playing in both sports shoes and barefoot is allowed, but no spikes or strengthening kind of gear are allowed. Shoes will be checked prior to the match.</li>
                <li>6. No hand grips are allowed.</li>
                <li>7. Once enlisted, players cannot switch the team.</li>
                <li>8. The rope will be divided equally, and in the middle, a red knot will be tied, which will mark the middle, and whichever team makes it cross their line wins the round.</li>
                <li>9. The rope will be tied to the anchors at the two ends, and only anchors can wrap their hand around the rope, and no other player can.</li>
                <li>10. Players cannot sit or lie down to pull the rope or to get balance else will be disqualified.</li>
                <li>11. No team can change a player in the middle of the game unless someone is injured.</li>
                <li>12. Unsporting behaviour of any player may result in the direct disqualification of the team.</li>
            </ol>
        </body>
        </html>
        
        `,
  },
  {
    image: "/assets/events/football.svg",
    hoverImage: "/assets/events/football2.svg",
    title: "Football",
    description: " Kicking off the adrenaline rush! ⚽ ",
    regFees: "RS. 1500 (each team)",
    prize: "Rs. 20,000 /-",
    venue: "",
    date: "20th & 21st January, 2024",
    coordinators: [
      {
        name: "Deep Das",
        phone: "8777659627",
      },
      {
        name: "Dwaipayan Bhattacharjee",
        phone: "8017765623",
      },
      {
        name: "Pritam Das",
        phone: "8420002044",
      },
      {
        name: "Joydeep Das",
        phone: "9681162881",
      },
    ],
    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Football Tournament Rules</title>
        </head>
        <body>
            <ol class="flex flex-col gap-3 text-xl">
                <li>1. Each team can register a maximum of 13 players.</li>
                <li>2. The match will be of 9-a-side, and a maximum of 4 substitutions can be made per match, including the goalkeeper.</li>
                <li>3. There will be an offside rule, which will be monitored by official referees.</li>
                <li>4. The referee's decision will be final. In case of an argument, the team will be disqualified.</li>
                <li>5. All teams must report 1 hour before the match time.</li>
                <li>6. If any team fails to report before the match, 5 minutes will be given. After that, if the other team is present, they will automatically receive a walkover with a 1-0 scoreline.</li>
                <li>7. Each team must carry their own football kits along with their jerseys.</li>
                <li>8. Aadhar card and college ID card are mandatory for every player.</li>
                <li>9. If anyone fails to show a valid ID card, they will not be allowed to play in the tournament.</li>
                <li>10. Use of a fake ID card will result in the disqualification of the team.</li>
                <li>11. Only college students are allowed to play in this tournament; no outside players will be permitted.</li>
                <li>12. Merging of teams is prohibited in the later stages of the game.</li>
                <li>13. Registration during the tournament is not allowed.</li>
                <li>14. The tournament will consist of 16 teams divided into 4 groups.</li>
                <li>15. In case of a draw in the semifinal and final matches, there will be a penalty shootout.</li>
                <li>16. The match duration will be 20-5-20 minutes.</li>
            </ol>
        </body>
        </html>
        
        `,
  },
  {
    image: "/assets/events/tt.svg",
    hoverImage: "/assets/events/tt2.svg",
    title: "Table Tennis",
    description: "Ping, pong, perfection! 🏓 ",
    regFees: "Rs. 100 /- (Singles)  ;  Rs. 200 /- (Doubles)",
    prize: "Rs. 4,500 /-",
    venue: "East Calcutta District Sports Council",
    date: "13th January, 2024",
    coordinators: [
      {
        name: "Subhranil Saha",
        phone: "8101696445",
      },
      {
        name: "Debasmita Dey",
        phone: "6291145072",
      },
      {
        name: "Souvik Mandal",
        phone: "9330613148",
      },
    ],

    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Tournament Rules and Regulations</title>
        </head>
        <body>
            <ul class="flex flex-col gap-3 text-xl">
                <li>1. Singles and doubles tournaments will be organized separately.</li>
                <li>2. All participants must carry their student-identity card and Aadhaar card.</li>
                <li>3. Each player should be a college student and must be 17+.</li>
                <li>4. Each match will be of Knock-out type.</li>
                <li>5. Ball will be provided by the tournament officials.</li>
                <li>6. Everyone is requested to carry their own rackets.</li>
                <li>7. Everyone is requested not to litter the venue.</li>
                <li>8. Intentional damages to any equipment will not be tolerated and will be compensated.</li>
                <li>9. Indiscipline towards any officials or volunteers will not be tolerated and will result in immediate disqualification.</li>
                <li>10. Everyone is requested to stay in the venue while the matches for their upcoming rounds.</li>
                <li>11. Rules of the game will be followed according to the official rules of WTTF (World Table Tennis Federation).</li>
                <li>12. Fixtures will be released before the start of the tournament.</li>
                <li>13. Every participant is to arrive 30 mins before the start of the event for their verification.</li>
                <li>14. Cash prizes, trophies, and certificates will be distributed at the end of the day of the tournament.</li>
            </ul>
        </body>
        </html>
        
        `,
  },
  {
    image: "/assets/events/handball.svg",
    hoverImage: "/assets/events/handball2.svg",
    title: "Handball (Girls)",
    description: " Fast-paced, dynamic, and full of twists! 🤾‍♀",
    regFees: "Rs. 250 /- (each team)",
    prize: "Rs. 2,000 /-",
    venue: "RCCIIT College Middle Ground , Kolkata",
    date: "19th January, 2024",
    coordinators: [
      {
        name: "Ankita Naskar",
        phone: "9073569808",
      },
      {
        name: "Ankuri Sen",
        phone: "9903290308",
      },
      {
        name: "Srinanda Das",
        phone: "7980505034",
      },
      {
        name: "Pritha Majumder",
        phone: "7586909097",
      },
    ],

    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Basketball Tournament Rules</title>
        </head>
        <body>
            <ol  class="flex flex-col gap-3 text-xl">
                <li>1. Each team should have a total of 5 players with 2 reserve players (optional).</li>
                <li>2. Each match will be of Knock-out type.</li>
                <li>3. Only 5 players on the floor at any given time (4 players + 1 goalkeeper).</li>
                <li>4. All students must carry their student-identity card and Aadhaar card.</li>
                <li>5. Each player should be a college student.</li>
                <li>6. Points are scored when the opponent scores a goal.</li>
                <li>7. The match will start with one drop by the referee.</li>
                <li>8. Each match will have 2 halves, and each half will be of 15 minutes (total 30 minutes). A break of 2 minutes will be given after the 1st half.</li>
                <li>9. <b>For a tie:</b>
                    <ul class="flex flex-col gap-3 text-xl">
                        <li>• Overtime of 5 minutes.</li>
                        <li>• If the match remains tied, a penalty shootout will occur (players cannot move while shooting the ball).</li>
                        <li>• If the match remains tied even after the shootout, a toss by the referee will determine the winner.</li>
                    </ul>
                </li>
                <li>10. Players can touch the ball with any part of their body above the knees.</li>
                <li>11. Only the goalkeeper is allowed in the goal crease (D-box), and other players cannot touch the ball when it is on the ground in the goal crease.</li>
                <li>12. <b>For Fouls/Free Throw/Penalty Throw/Throw-in:</b>
                    <ul class="flex flex-col gap-3 text-xl">
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • If defending team member(s) enter the goal crease (D-box), the opponent gets a free throw.</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Ball possession:</b> Players can take 3 steps while dribbling the ball or hold the ball for up to 3 seconds before passing. Violating this rule results in a referee-initiated restart with one drop.</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Dribble fault:</b> Restart the game from the point of the event with one drop by the referee.</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Players may not touch the ball more than once, except if it touches the ground, another player, or a goal post.</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Snatching the ball with hands or violent striking/tackling results in a free throw for the opponent.</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Out of bounds:</b> If the entire ball crosses the sideline, the team that last touched the ball loses possession, and the other team gets a throw-in.</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• If the ball touches anywhere below the knee, the game restarts with one drop by the referee from that place.</li>
                    </ul>
                </li>
                <li>13. Intentional damages to any equipment will not be tolerated and will be compensated.</li>
                <li>14. Indiscipline towards any officials or volunteers will not be tolerated and will result in immediate disqualification.</li>
            </ol>
        </body>
        </html>
        `,
  },
  {
    image: "/assets/events/handball.svg",
    hoverImage: "/assets/events/handball2.svg",
    title: "Volleyball (Boys)",
    description: "Spike it, set it, win it! 🏐",
    regFees: "Rs. 500 /- (each team)",
    prize: "Rs. 4,500 /-",
    venue: "Beleghata Balak Brinda Club, CIT More",
    date: "14th January, 2024",
    coordinators: [
      {
        name: "Subhasis Ghosh",
        phone: "8145520227",
      },
      {
        name: "Subhodip Chakraborty",
        phone: "8370874299",
      },
      {
        name: "Piyush Prasad",
        phone: "8910170643",
      },
    ],

    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Volleyball Tournament Rules</title>
        </head>
        <body>
            <ol class="flex flex-col gap-3 text-xl">
                <li>1. A team should have a total of 6 players with 2 reserve players.</li>
                <li>2. Each match will be of Knock-out type.</li>
                <li>3. Only 6 players on the floor at any given time: 3 in the front row and 3 in the back row.</li>
                <li>4. All students must carry their student-identity card and Aadhaar card.</li>
                <li>5. Each player should be a college student.</li>
                <li>6. Points are made on every serve for the winning team of the rally (rally-point scoring).</li>
                <li>7. Players may not hit the ball twice in succession (a block is not considered a hit).</li>
                <li>9. Ball may be played off the net during a volley and on a serve.</li>
                <li>10. A ball hitting a boundary line is in.</li>
                <li>11. A ball is out if it hits an antennae, the floor completely outside the court, any part of the net or cables outside the antennae, the referee stand or pole, or the ceiling above a non-playable area.</li>
                <li>12. It is legal to contact the ball with any part of a player’s body.</li>
                <li>14. It is illegal to catch, hold, or throw the ball.</li>
                <li>15. A player cannot block or attack a serve from on or inside the 10-foot line.</li>
                <li>16. After the serve, front-line players may switch positions at the net.</li>
                <li>17. Matches are made up of sets; the number depends on the level of play.</li>
                <li>18. Intentional damages to any equipment will not be tolerated and will be compensated.</li>
                <li>19. Indiscipline towards any officials or volunteers will not be tolerated and will result in immediate disqualification.</li>
                <li>20. If the number of teams is very low, then the prize money can be deducted.</li>
            </ol>
            <p class="py-3 text-xl"><b><span class="text-red-600">*</span> Committing any of these volleyball rule violations results in a point for the opponent:</b></p>
            <ul class="flex flex-col gap-3 text-xl">
                <li>&nbsp;&nbsp;&nbsp;&nbsp;• Stepping on or across the service line when serving while making contact with the ball.</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;• Failure to serve the ball over the net successfully.</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;• Ball-handling errors and contacting the ball illegally (double touching, lifting, carrying, throwing, etc.).</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;• Touching the net with any part of the body while the ball is in play.</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;• Blocking a ball coming from the opponent’s court and contacting the ball when reaching over the net if your opponent has not used 3 contacts AND has a player there to make a play on the ball.</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;• Attacking a ball coming from the opponent’s court and contacting the ball when reaching over the net when the ball has not yet broken the vertical plane of the net.</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;• Crossing the court centerline with any part of your body, with the exception of a hand or foot. It is only considered a violation if the entire hand or entire foot crosses the court centerline.</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;• Serving out of rotation or out of order.</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;• Back row player blocking (deflecting a ball coming from the opponent) when, at the moment of contact, the back row player is near the net and has part of their body above the top of the net. This is an illegal block.</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;• Back row player attacking a ball inside the front zone (the area inside the 3M/10-foot line) when, at the moment of contact, the ball is completely above the net. This is an illegal attack.</li>
            </ul>
        </body>
        </html>
        
        `,
  },
];

export default events;
