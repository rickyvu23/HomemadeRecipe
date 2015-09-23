

Ext.Loader.setConfig({
    enabled: true
});


Ext.application({
	
	models: [
        'RecipeModel'
    ],
    stores: [
        'RecipeStore'
    ],
    views: [
        'MainView'
    ],

    name: 'Homemade', //Match namespace
	
    controllers: [
        'HomemadeController'
    ],
    
	launch: function() {
         Ext.create('Ext.container.Viewport',
         {
            layout: 'vbox',
            items: [{
                xtype:'MainView' // same as alias in view
            }]
         
    });
     }

});