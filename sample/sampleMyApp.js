/*
	This script is a sample file to show you how JGridSupport is loaded and used.
	This file is intended to be your app, game javascript code.
*/

	// My App, Game context...
	canvas			= document.getElementById('stage');
	ctx				= canvas.getContext("2d");
	canvas.width	= 600;						
	canvas.height	= 600;
	ctx				= canvas.getContext("2d");
	
	//------------------------------------------------------------
	//------------------------------------------------------------
	// JGridSupport: section inside your js.
	//------------------------------------------------------------
	// Creating and showing the grid.
	// cWidth	- Cell Width.
	// cHeight	- Cell Height.
	// lColor	- Grid line color.
	// myCtx	- The context you want to draw the grid.
	new JGridSupport({cWidth : 40,cHeight : 40,lColor : "#FF0000",myCtx	: ctx});
	//------------------------------------------------------------
	//------------------------------------------------------------
	// END JGridSupport section.
	//------------------------------------------------------------
	
	

//EOF