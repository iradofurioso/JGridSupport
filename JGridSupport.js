/**
 * Class JGridSupport
 * 
 * JGridSupport: is a JavaScript class/library intended to give   
 * support for app or game developers during the development, it  
 * shows a grid helping to align elements on screen in the exact  
 * position. JGridSupport can be used for other objectives if needed.
 * 
 * @author Carlos Eduardo da Silva (aka. Tresloukadu) 
 * 		   <carlosedasilva@gmail.com>
 * @link http://www.tresloukadu.com.br/
 * @version 1.0
 */
JGridSupport = function(config) {
	
	this.cell_width		= null; 
	this.cell_height	= null;
	this.objContext		= null;
	this.gridWidth		= null;
	this.gridHeight		= null;
	
	/**
	 * Constructor
	 * 
	 * Method in charge to load the environment.
	 */
	this.construct = function() {	
		
		this.cell_width		= config.cWidth;
		this.cell_height	= config.cHeight;
		this.objContext		= config.myCtx;
		this.gridWidth		= config.myCtx.canvas.width;
		this.gridHeight		= config.myCtx.canvas.height;
		
		this.objContext.strokeStyle = config.lColor;
		
		this.chalk_grid();
		
		console.log('JGridSupport loaded.');
	};
	
	
	/**
	 * Chalk Grid 
	 * 
	 * Method in charge to draw the grind on canvas.
	 */
	this.chalk_grid = function() {
		
		for (var x = 0; x <= this.gridWidth; x += this.cell_height) {
			this.objContext.moveTo(0.5 + x, 0); 
			this.objContext.lineTo(0.5 + x, this.gridHeight);
		}
		
		for (var x = 0; x <= this.gridHeight; x += this.cell_width) {
	    	this.objContext.moveTo(0, 0.5 + x);
	    	this.objContext.lineTo(this.gridWidth, 0.5 + x);
	    }
		
		this.objContext.stroke();
	};
	
	this.construct();
};	

//EOF