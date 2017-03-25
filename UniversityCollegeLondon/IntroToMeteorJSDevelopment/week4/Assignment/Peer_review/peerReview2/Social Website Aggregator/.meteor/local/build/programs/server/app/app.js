var require = meteorInstall({"lib":{"collections.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/collections.js                                                //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Websites = new Mongo.Collection("websites");                         // 1
                                                                     //
Comments = new Mongo.Collection("Comments");                         // 3
///////////////////////////////////////////////////////////////////////

}},"server":{"startup.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/startup.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
if (!Websites.findOne()) {                                           // 1
  console.log("No websites yet. Creating starter data.");            // 2
  Websites.insert({                                                  // 3
    title: "Goldsmiths Computing Department",                        // 4
    url: "http://www.gold.ac.uk/computing/",                         // 5
    description: "This is where this course was developed.",         // 6
    createdOn: new Date()                                            // 7
  });                                                                // 3
  Websites.insert({                                                  // 9
    title: "University of London",                                   // 10
    url: "http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
    description: "University of London International Programme.",    // 12
    createdOn: new Date()                                            // 13
  });                                                                // 9
  Websites.insert({                                                  // 15
    title: "Coursera",                                               // 16
    url: "http://www.coursera.org",                                  // 17
    description: "Universal access to the world’s best education.",  // 18
    createdOn: new Date()                                            // 19
  });                                                                // 15
  Websites.insert({                                                  // 21
    title: "Google",                                                 // 22
    url: "http://www.google.com",                                    // 23
    description: "Popular search engine.",                           // 24
    createdOn: new Date()                                            // 25
  });                                                                // 21
}                                                                    // 27
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./lib/collections.js");
require("./server/startup.js");
//# sourceMappingURL=app.js.map
