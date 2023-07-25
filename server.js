const express = require('express')
const expressGraphQL = require('express-graphql')
console.log(expressGraphQL, expressGraphQL.graphqlHTTP)
const app = express()

app.use('/graphql', expressGraphQL.graphqlHTTP({
  graphiql: true
}))
app.listen(5001., () => console.log('Server Running'))