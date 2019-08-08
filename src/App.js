import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
   render() {
	  var myStyle1 = {
         marginTop:'10px'
      }
	  var dummyimg = {
		 height: '200px',
	     background: '#aaa'
      }
      return (		   
		<div class="container" style={myStyle1}>
			<div class="row">
				<div class="col-sm-4">
				  <h3>Some Links</h3>
				  <p>Lorem ipsum dolor sit ame.</p>
				  <ul class="nav nav-pills flex-column">
					<li class="nav-item">
					  <a class="nav-link active" href="#">Active</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link disabled" href="#">Disabled</a>
					</li>
			      </ul>
				</div>
				<div class="col-sm-8">
					<h2>TITLE HEADING</h2>
					<h5>Title description, Aug 7, 2019</h5>
					<div style={dummyimg}>Dummy Image</div>
					<p>Some text..</p>
					<p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
					<br/>
					<h2>TITLE HEADING</h2>
					<h5>Title description, Aug 7, 2019</h5>
					<div style={dummyimg}>Dummy Image</div>
					<p>Some text..</p>
					<p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
				</div>
			</div>
		</div>		   
      );
   }
}

export default App;