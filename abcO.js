window.onload = function () {

    const milestone = `<div class="col-sm-3"><img src="images/Conti1.png" alt="picture"/></div><div class="col-sm-9"><div class="Conti"><p><b>1. One of the first Robotics Clubs in the State</b>- Very few colleges in the 
        state of West Bengal had implemented the concept of a Robotics Club. Autobit, being a unique endeavor was an achievement in itself.</p></div></div>
        <div class="col-sm-3"><img src="images/Conti2.png" alt="picture"/></div><div class="col-sm-9"><div class="Conti"><p><b>2. Autobit</b> successfully developed <b>115+ projects</b> (Manual Robots, Autonomous 
        Robots, Electronics Projects) in the last 3 years.</p></div></div>
        <div class="col-sm-3"><img src="images/Conti3.png" alt="picture"/></div><div class="col-sm-9"><div class="Conti"><p><b>3. Autobit</b> in association with several other organizations successfully 
        organized more than <b>20 major hands-on technical seminars and workshops</b> in the last 3 years with <b>120+ participants.</b></p></div></div>
        <div class="col-sm-3"><img src="images/Conti4.png" alt="picture"/></div><div class="col-sm-9"><div class="Conti"><p><b>4.</b> The club <b>mentored</b> more than <b>400 students</b> in the last 3 years and has a 
        strong alumni network.</p></div></div>`;

    const competition = `<div class="col-sm-3"><img src="images/Conti5.png" alt="picture"/></div><div class="col-sm-9"><div class="Conti"><p><b>1. 
    Winning prizes from the year of foundation</b>- Since the very year Autobit was founded,students from this club have excelled in technical competitions 
    arranged by various colleges. The first participation of students from Autobit took place in the Technical Fest of Bengal Institute of Technology, 
    <b>Bits2Bytes 2018,</b> followed by qualifying in the finals of several robotics events of the numerous <b>technical fests.</b></p></div></div>`;

    const hackathon = `<div class="col-sm-3"><img src="images/Conti6.png" alt="picture"/></div><div class="col-sm-9"><div class="Conti"><p><b>1.</b> 
    Runners up in <b>Smart India Hackathon 2019</b>- <b>Team Innoware,</b> consisting of several members of this club, namely <b>Sagnick Biswas, Rohit Roy, Sayantika Dutta, and Prodyumna Chatterjee</b> succeeded in securing a position of <b>1st runners-up in the finale of Smart India Hackathon.</b></p></div></div>
    <div class="col-sm-3"><img src="images/Conti7.png" alt="picture"/></div><div class="col-sm-9"><div class="Conti"><p><b>2.</b> 
    Multiple finalists and an award-winning team at <b>Bengalathon 2019</b>- Three teams, consisting of several members of this club, qualified for the Grand Finale of Bengalathon 2019. Out of these aforesaid teams, <b>Team Innoware</b> were the <b>winners in category C</b> in the competition.<br>
    <b>Members of Innoware - Sagnik Biswas<br>Members of Sarathi - Sayantika Dutta, Rishin Ghosh, and Sarthak Mondal<br>Members of Technocrats - Sayan Hazra, Debam Garai, and Debagnik Sen</b></p></div></div>`;
    
    const journal = `<div class="col-sm-3"><img src="images/Conti10.jpg" alt="picture"/></div><div class="col-sm-9"><div class="Conti">
    <p><b>1.</b> A Funded Project on <b>‘IoT Based Intelligent System for Smart Farming & Water Saving’</b>, Project ID-RDUG2019026 under Institute of Engineers (INDIA) IEI Grant-in-Aid Scheme by <b>Sagnick Biswas, Rohit Roy Prof. Dr. Jyoti Sekhar Banerjee</b></p></div></div>
    <div class="col-sm-3"><img src="images/Conti8.jpg" alt="picture"/></div><div class="col-sm-9"><div class="Conti">
    <p><b>2.</b> A Conference Paper Publication on <b>‘Android Things: A Comprehensive Solution from Things to Smart Display and Speaker’</b>, Springer Nature ISBN (print)978-981-15-3019-7 by <b>Rohit Roy, Sayantika Dutta, Sagnick Biswas, Prof. Dr. Jyoti Sekhar Banerjee</b></p></div></div>
    <div class="col-sm-3"><img src="images/Conti9.png" alt="picture"/></div><div class="col-sm-9"><div class="Conti">
    <p><b>3.</b> A Journal Publication on <b>‘GO-COVID: An Interactive cross-platform based Dashboard for real-time tracking of COVID-19 using data analytics’</b>, J. Mech. Continua Math. Sci by <b>Sagnick Biswas, Prof. Dr. Jyoti Sekhar Banerjee</b></p></div></div>`;


    document.getElementById("C1")
    .addEventListener("click", () => {

        document.querySelector('.Inject').innerHTML = milestone;
    });

    document.getElementById("C2")
        .addEventListener("click", () => {

            document.querySelector('.Inject').innerHTML = competition;
        });

    document.getElementById("C3")
    .addEventListener("click", () => {

        document.querySelector('.Inject').innerHTML = hackathon;
    });
    document.getElementById("C4")
    .addEventListener("click", () => {

        document.querySelector('.Inject').innerHTML = journal;
    });
}