
const booths = [

    {id:0, category:"Clothing", options:[

        {id:0,name: "DEPARTMENT STORES & HIGH END BOUTIQUES",
            desc:["Belk", "Haddad’s", "Haneline’s Men’s Wear","Dillard’s", 
                "Stein Mart","Talbots","Chico’s","Ron Alexander", 
                "Signatures by Linda Reeves","Joseph A Bank","Her Toggery",
                "The Toggery","The Cotton Patch" ],
            costbreakdown:["Clothing Allowance: $400/month", "Moderate Dry Cleaning: $100/month"],
            price:500
        },

        {id:1, name: "MALL & OUTLET STORES",
            desc:["Abercrombie & Fitch", "Aeropostale", "American Eagle", "Lane Bryant",
                    "Burlington", "Charlotte Russe", "Express", "Hollister", "Buckle", "Old Navy",
                    "Maurice’s", "New York & Company", "K-Sera", "Herringstones", "Kohl’s" ],
            costbreakdown:["Clothing Allowance - $250", "Light Dry Cleaning - $50"],
            price:300
        },

        {id:3,name: "DISCOUNT STORES",
            desc:["Cato", "Citi-Trends", "Burke’s Outlet", "Rainbow", "Ross Dress for Less", 
                    "Rue 21", "Simply Fashions", "Dirt Cheap", "Target", "Wal-Mart", "Fashion Cents",
                    "Forever 21" ],
            costbreakdown:["Clothing Allowance - $85","DIY Laundry - $15"],
            price:100
        },

        {id:4,name: "Thrift/Consignment Stores",
            desc:["Cato", "Citi-Trends", "Burke’s Outlet", "Rainbow", "Ross Dress for Less", 
                    "Rue 21", "Simply Fashions", "Dirt Cheap", "Target", "Wal-Mart", "Fashion Cents",
                    "Forever 21" ],
            costbreakdown:["Clothing Allowance - $15","DIY Laundry - $15"],
            price:30
        }]

    },

        {id:1, category:"Household Expenses", options:[
            
            {id:0,name: "DEPARTMENT STORES & HIGH END BOUTIQUES",
            desc:["Belk", "Haddad’s", "Haneline’s Men’s Wear","Dillard’s", 
                "Stein Mart","Talbots","Chico’s","Ron Alexander", 
                "Signatures by Linda Reeves","Joseph A Bank","Her Toggery",
                "The Toggery","The Cotton Patch" ],
            costbreakdown:["Clothing Allowance: $400/month", "Moderate Dry Cleaning: $100/month"],
            price:500
            }]
         },


        {id:2, category:"Furniture", options:[
            
            {id:0,name: "DEPARTMENT STORES & HIGH END BOUTIQUES",
            desc:["Belk", "Haddad’s", "Haneline’s Men’s Wear","Dillard’s", 
                "Stein Mart","Talbots","Chico’s","Ron Alexander", 
                "Signatures by Linda Reeves","Joseph A Bank","Her Toggery",
                "The Toggery","The Cotton Patch" ],
            costbreakdown:["Clothing Allowance: $400/month", "Moderate Dry Cleaning: $100/month"],
            price:500

            }]
        },


        {id:3, category:"Charity", options:[
            
            {id:0,name: "DEPARTMENT STORES & HIGH END BOUTIQUES",
             desc:["Belk", "Haddad’s", "Haneline’s Men’s Wear","Dillard’s", 
            "Stein Mart","Talbots","Chico’s","Ron Alexander", 
            "Signatures by Linda Reeves","Joseph A Bank","Her Toggery",
            "The Toggery","The Cotton Patch" ],
            costbreakdown:["Clothing Allowance: $400/month", "Moderate Dry Cleaning: $100/month"],
            price:500
            }]
        }

]
        

const education =["High School Diploma","Bachelors Degree","Masters Degree","GED/HSET","Asscoiates Degree", "PhD"]


const calculationInfo = [{"totalhoursworked":2080}]

const jobs = [

        {reqed:"HighSchool Diploma", occupations:[
                {id:0, position:"Welder", grossmonthly:3234.40},
                {id:1, position:"Plumber", grossmonthly:3731.87},
                {id:2, position:"Truck Driver", grossmonthly:3194.53},
                {id:3, position:"Carpenter", grossmonthly:2594.80}
            ]},

        {reqed:"Bachelors Degree", "occupations":[
                {id:0, position:"Accountant", grossmonthly:5395.87},
                {id:1,position:"Electrical Engineer", grossmonthly:4943.47},
                {id:2, position:"Social Worker", grossmonthly:3156.40},
                {id:3, position:"Toxocologist", grossmonthly:4745.53}
            ]},

         {reqed:"Associates Degree",occupations:[]},

         {reqed:"Masters Degree", occupations:[]},

         {reqed:"PhD", occupations:[]},

         {reqed:"GED/HSET", occupations:[]}
    ]

export {jobs, calculationInfo, booths, education}