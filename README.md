# Planning Poker

Planning poker, also called Scrum poker, is a consensus-based, gamified technique for estimating, mostly used to estimate effort or relative size of development goals in software development.

![](https://raw.githubusercontent.com/aleciabenjamin/Planning-Poker/master/frontend/src/assets/projectImage.png)


## Getting Started

Clone the repository with an SSH key

```
git clone git@github.com:aleciabenjamin/Planning-Poker.git
```
or with HTTPS
```
git clone https://github.com/aleciabenjamin/Planning-Poker.git
```
Then install the ```node_modules``` with yarn
```
yarn install
```
or with npm
```
npm install
```
Run the start command and head over to [http://localhost:3000](http://localhost:3000)

frontend:
```
yarn start
```
or
```
npm start
```
backend:
```
yarn dev
```
or
```
npm dev
```

### Prerequisites

[node v10.0.0](https://nodejs.org/en/download/)

## Running the tests

Unit Tests with mocha and chai
```
yarn test
```


## Built With

* [react](http://facebook.github.io/react/) - for managing the presentation logic of application
* [redux](http://redux.js.org/) -  for generating and managing state model
* [redux-thunk](https://www.npmjs.com/package/redux-thunk) - for redux middleware
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - for handling the page routing
* [axios](https://www.npmjs.com/package/axios) for making AJAX calls to a server
* [bootstrap](https://www.npmjs.com/package/bootstrap) for frontend template
* [node-sass](https://npmjs.org/package/node-sass) for sass support
* [postgresql](https://www.postgresql.org/) for database management
* [sequelize](https://sequelize.org/) for object relational mapping
* [expressjs](https://expressjs.com/) to provide a basckend api service.

## How Does It Work?

A session is created by the session creator (also referred to as team member).  
The session creator chooses the session type (Fibonacci<sup>1</sup>
 or T-Shirts<sup>2</sup>
).  
The session creator is prompted to enter a session name and a username.
Et voila!  
A poll session is created.
The session creator can now copy the session ID from the top right corner of the page and distribute this unique identifier to team members.

Team members can join this session by entering the session ID in the ‘Join Session Form’ found on the home page.  By entering the session ID the team member(s) will be prompted to enter a username.  
Et voila!
Team members may only vote once, but are permitted to change their vote.  
The team members may discuss the feature, asking questions of the product owner as needed. 
When the feature has been fully discussed, each team member privately selects one card to represent their estimate. All cards are then revealed.
If all team members selected the same value, that becomes the estimate. If not, the members discuss their estimates. The high and low estimators should especially share their reasons. After further discussion, each estimator reselects an estimate card, and all cards are again revealed.
The poker planning process is repeated until consensus is achieved or until the estimators decide that agile estimating and planning of a particular item needs to be deferred until additional information can be acquired.




## Authors

* **Alecia Benjamin**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Footnotes
<sup>1</sup>Planning Poker uses of the Fibonacci sequence to assign a point value to a feature or user story. The Fibonacci sequence is a mathematical series of numbers that was introduced in the 13th century and used to explain certain formative aspects of nature, such as the branching of trees. The series is generated by adding the two previous numbers together to get the next value in the sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.
For agile estimation purposes, some of the numbers have been changed, resulting in the following series: 0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100, ∞.

<sup>2</sup> Planning Poker uses T-Shirt sizes to assign a point value to a feature or user story.
With T-shirt measuring the team is required to evaluate whether they think a story is extra-small (XS), small (S), medium (M), large (L), extra-large (XL), or double extra-large (XXL).




