listHeader()
listInterests()
displayPosition()
displaySkills()

let header = {
    userName: "Charles Welsh",
    userCareer: "Full Stack Developer",
    userDescription: "I studied Animation and Digital Media at the Savannah College of Art and Design, and have spent the last 10 years in the Sign, Print, and Graphic Design industry in Metro Atlanta. I have recently relocated to Birmingham, Alabama and I am excited to find new career opportunities here",
};

 let myInterests = ["Video Games", "Board Games", "Coding", "Star Wars", "Tabletop RPGs"];

 let firstJob= {
     bizName: "Custom Signs Today",
     myTitle: "Graphic Designer/Installer",
     myDuties: "Coordinated Sales, Design, Pre-Production, and Installation Services for one Custom Signs Today downtown location. Managed projects from client inquiry through closing of the order. Responsibilities included: invoicing, communicating with client, pre-flight surveys, graphic design, conceptual design, pre-press/ production art, installation logistics, accounts receivable, subcontract fabrication coordination, and installation services. High profile clients included Paramount Pictures, Buena Vista LLC, Coca Cola, Stalwart Films, Georgia World Congress Center, Pinewood Studios."
 };

 let secondJob = {
     bizName: "FastSigns Atlanta",
     myTitle: "Lead Graphic Designer",
     myDuties: "Coordinated all Design and Pre-production Services for two FastSigns locations in the Metro Atlanta Area. Managed project workflow between 7 Sales Department employees, 3 Design Department employees, and 2-4 Production Department employees. Maintained Pre-production and Print Equipment including (3) Epson GS6000 and (1) HP L360 Printers, as well as two wide-format Mimaki plotters. Responsibilities included: invoicing, communicating with client, pre-flight surveys, graphic design, conceptual design, pre-press/ production art, installation logistics, accounts receivable, subcontract fabrication coordination, and installation services.Created and designes conceptual and products for promotional marketing campaigns that included high-profile clients such as the Atlanta Braves, Coca-Cola, Focus Brands, Porsche, Anheuser-Busch ImBev"
 };

 let thirdJob = {
     bizName: "FastSigns Hoover",
     myTitle: "Lead Graphic Designer",
     myDuties: "Coordinated all Design and Pre-production Services for one FastSigns location in the Hoover and Vestavia Hills areas. Managed project workflow between 4 Sales Department employees, and owner. Maintained Pre-production and Print Equipment including (1) Mimaki JV33-160 Printer, (1) ZUND plotter/cutter/router as well as (1) wide-format Mimaki plotter. Created and designed conceptual and products for promotional marketing campaigns that included high-profile clients such as CBRE/ Regions Bank/ BBVA Bank."
 };

let firstSkill = {
    skillName: "Typography",
    isCool: "false"
};
let secondSkill = {
    skillName: "Illustration",
    isCool: "true"
};
let thirdSkill = {
    skillName: "Pre-press",
    isCool: "false"
};
let fourthSkill = {
    skillName: "Software Development",
    isCool: "true"
};
let fifthSkill = {
   skillName: "Wide Format Printing",
   isCool: "false"
};
let sixthSkill = {
    skillName: "Graphic Design",
    isCool: "true"
};
let seventhSkill = {
    skillName: "Juggling",
    isCool: "false" 
};
let eighthSkill = {
    skillName: "Adobe Creative Suite",
    isCool: "true"
};
let ninthSkill = {
    skillName: "Visual Communication",
    isCool: "false"
};
let tenthSkill = {
    skillName: "Web Development",
    isCool: "true"
};

let mySkills= [firstSkill, secondSkill,thirdSkill, fourthSkill, fifthSkill, sixthSkill, seventhSkill, eighthSkill, ninthSkill, tenthSkill];

function listHeader() {
    console.log(`Name: ${(header.userName).toUpperCase()}`),
    console.log(`Career: ${header.userCareer}`),
    console.log(`Description: ${header.userDescription}`)
};

function listInterests() {
    console.log (`MY INTERESTS`),
    console.log (`* ${myInterests[0]}`),
    console.log (`* ${myInterests[1]}`),
    console.log (`* ${myInterests[2]}`),
    console.log (`* ${myInterests[3]}`),
    console.log (`* ${myInterests[4]}`)

};
function displayPosition() {
    console.log(`PAST EXPERIENCE`),
    console.log(`Company: ${firstJob.bizName}`),
    console.log(`Title: ${firstJob.myTitle}`),
    console.log(`Duties: ${firstJob.myDuties}`),
    console.log(`Company: ${secondJob.bizName}`),
    console.log(`Title: ${secondJob.myTitle}`),
    console.log(`Duties: ${secondJob.myDuties}`),
    console.log(`Company: ${thirdJob.bizName}`),
    console.log(`Title: ${thirdJob.myTitle}`),
    console.log(`Duties: ${thirdJob.myDuties}`)
};

function displaySkills() {
    console.log(`SKILLS`,)
    for (let i = 0; i < mySkills.length; i++) {
        if (mySkills[i].isCool === "true") {
            console.log(`BAM: ${mySkills[i].skillName}`)
        }
        else if (mySkills[i].isCool === "false") {
            console.log(mySkills[i].skillName)
        }
    }
}