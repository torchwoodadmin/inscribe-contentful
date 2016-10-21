var contentful = require('contentful')
var util = require('util')
var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '<spaceID>',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '<accesstoken>'
})


client.getEntries()
.then(function (entries) {
  // log the title for all the entries that might have it
  entries.items.forEach(function (entry) {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
})