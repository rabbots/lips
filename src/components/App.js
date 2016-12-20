import { h, Component } from 'preact';
import Msg from './Msg';
import 'promise-polyfill';

export default class App extends Component {
	state = {
		chatData: []
	};

	componentDidMount() {
		fetch('data/chat.json').then(response => {
			return response.json();
		}).then(json => {
			this.setState(json);
		});
	}

	render({}, { chatData }) {
		return (
			<div class="home">
				<dl class="ios7">
					<style jsx>{`
* {
  margin: 0;
  padding: 0;
}
.ios7 {
	width: 320px;
	margin: 0 auto;
	padding: 1em .8em;
	font-weight: 200;
	font-size: 16px;
	font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
	color: #000;
}
.ios7 strong {
	font-weight: 500;
}
.ios7 dt {
	margin-bottom: 1em;
	text-align: center;
	font-size: .6em;
	color: #999;
}
.ios7 dd + dt {
	margin-top: 1.5em;
}
.ios7 dd + dd {
	margin-top: .5em;
}
.ios7 dd:after {
	clear: both;
	content: " ";
	display: block;
	height: .1em;
}
.ios7 p {
	float: left;
	z-index: 1;
	margin-right: 25%;
	padding: .45em .75em;
	background: rgb(230,230,230);
	line-height: 1.25;
	-webkit-border-radius: 1em;
	   -moz-border-radius: 1em;
	        border-radius: 1em;
}
.ios7 .to p {
	float: right;
	margin-right: 0;
	margin-left: 25%;
	background: rgb(0,120,255);
	color: #fff;
}
.ios7 p + p {
	margin-top: .1em;
}
.ios7 p:last-child {
	position: relative;
}
.ios7 p:last-child::before {
	position: absolute;
	bottom: 0;
	left: -3em;
	z-index: -1;
	width: 3em;
	height: 2em;
	border-right: 1.5em solid rgb(230,230,230);
	border-bottom-right-radius: 50%;
	content: " ";
	clip: rect(1em,4em,3em,2em);
}
.ios7 .to p:last-child::before {
	right: -3em;
	left: auto;
	border-right: none;
	border-left: 1.5em solid rgb(0,120,255);
	border-bottom-left-radius: 50%;
	clip: rect(1em,2em,2em,0);
}
.ios7 dt,
.ios7 p {
	-webkit-transform: translate3d(0,0,0);
	   -moz-transform: translate3d(0,0,0);
	    -ms-transform: translate3d(0,0,0);
	     -o-transform: translate3d(0,0,0);
	        transform: translate3d(0,0,0);
	-webkit-transition: -webkit-transform .75s ease;
	   -moz-transition:    -moz-transform .75s ease;
	    -ms-transition:     -ms-transform .75s ease;
	     -o-transition:      -o-transform .75s ease;
	        transition:         transform .75s ease;
}
.ios7 .past {
	-webkit-transform: translate3d(0,-10em,0);
	   -moz-transform: translate3d(0,-10em,0);
	    -ms-transform: translate3d(0,-10em,0);
	     -o-transform: translate3d(0,-10em,0);
	        transform: translate3d(0,-10em,0);
}
.ios7 .to .past {
	opacity: .5;
}
.ios7 .future {
	-webkit-transform: translate3d(0,10em,0);
	   -moz-transform: translate3d(0,10em,0);
	    -ms-transform: translate3d(0,10em,0);
	     -o-transform: translate3d(0,10em,0);
	        transform: translate3d(0,10em,0);
}
.ios7 .to .future {
	opacity: 1;
}
.ios7 .me {
	float: right;
	margin-right: -2.8em;
	margin-top: -2.2em;
	border-radius: 100%;
}
.ios7 .you {
	position: absolute;
	margin-top: -2.2em;
	margin-left: -2.8em;
	border-radius: 100%;
}
`}</style>
					<dt><strong>Yesterday</strong> 7:45 PM</dt>
					{
						chatData.map(item => <Msg {...item} />)
					}
				</dl>
			</div>
		);
	}
}
