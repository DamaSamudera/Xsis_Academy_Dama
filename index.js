const express = require( 'express' );
var bodyParser = require( 'body-parser' );
var jwt = require( 'jsonwebtoken' );
const app = express();

// parse application/x-www-form-urlencoded
// app.use( bodyParser.urlencoded( {extended: false} ) );

// parse application/json
app.use( bodyParser.json() );


app.get( '/', (req, res) => {
	let obj = {
		'username': 'dama',
		'password': 'samudera'
	};
	res.json( obj );
} );

app.get( '/myprofile/:userid', (req, res) => {
	let userid = req.params.userid;
	res.send( "My Profile " + userid );
} );

app.post( '/user', (req, res) => {
	let body = req.body;
	res.json( body );
} );

app.post( '/token', (req, res) => {
	let body = req.body;
	if ( body.username == 'Test' && body.password == '1234' ) {
		let token = jwt.sign( {"hello": "world"}, "sh123" );
		res.send( token );
	}
	else {
		res.status( 403 ).end( "Forbidden" );
	}
} );

app.listen( 3000 );