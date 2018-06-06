//
// file: auth.js
// author: Justin Bankes <justin@liatrio.com>
// description: connect to server and authenticate 
//
let JiraClient = require('jira-connector');
const jiraHost = process.env.JIRA_HOST

let jira = new JiraClient( {
  host: '${jiraHost}'
});


