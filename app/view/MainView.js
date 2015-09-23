Ext.define('Homemade.view.MainView', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.MainView',
	
	title: 'Homemade Recipe',
	//id : 'HomeMade',
	width : '100%',
    height : 900,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    //config : {},
    //constructor : function(config){
    //    this.initConfig(config);
     //   return this.callParent(arguments);
    //},

	
/*
Ext.apply() is used to simplify the copying of many properties from a source to a target 
object (most of the time the source and target objects have different sets of properties) 
and it can in addition be used to apply default values (third argument).

Note that it will not make deep clones! Meaning if you have a array or a object as property 
value it will apply the reference!

*/


	initComponent: function () {
		Ext.apply(this, {
	        items: [
	        {
	            xtype: 'gridpanel',
	            flex: 1,
	            width : '100%',
	            id: 'recipeGridId',
				height : 500,
	            store:'RecipeStore',
	            plugins : [Ext.create('Ext.grid.plugin.RowEditing', 
	            {
	                clicksToEdit : 2
	                //if you have checkbox in first row then take clicksToEdit=2 otherwise it will go on edit mode
	            	// chu y phai add EDITOR trong nhu ben duoi de co the edit khi double click vao.
	            })],
				                    
	//name function o muc nay de cho biet khi click vao cai list thi no se load cai function
	//dc viet ra o phia duoi sau CallParent.
	            listeners: {
	        		select: { fn: this.onGridpanelSelect,
	        			scope: this
	        		}
	    		},

		        columns : [{
					xtype:'gridcolumn',
					dataIndex: 'name',
					text:'Name',
					flex:1,
					//EDITOR is here. 
					editor : 
	                {
	                    // defaults to textfield if no xtype is supplied
	                    allowBlank : false
	                }
				},
				{
					xtype:'gridcolumn',
					dataIndex: 'ingredient',
					text: 'Ingredient',
					flex: 1,
					//EDITOR is here. 
					editor : 
	                {
	                    // defaults to textfield if no xtype is supplied
	                    allowBlank : false
	                }
				},
				{
					xtype:'datecolumn',
					dataIndex:'date',
					text: 'Date',
					flex: 1,//EDITOR is here. 
					editor : 
	                {
	                    // defaults to textfield if no xtype is supplied
	                    allowBlank : false
	                }
				},
				{
					xtype: 'gridcolumn',
					dataIndex: 'img',
					text:'Img'
				}],
				dockedItems: [{
					xtype: 'toolbar',
					dock: 'bottom',
					ui: 'footer',
					layout: { pack: 'center'},
					items: [
					{
	                    xtype: 'button',
	                    text : 'Create',
	                    itemId : 'btnCreate'
	                    
	                }, 
	                {
	                    xtype: 'button',
	                    text : 'Load Data',
	                    itemId : 'btnLoad',
	            	}, 
	                {
	                    xtype: 'button',
	                    text : 'Save',
	                    itemId : 'btnSave'
	                }, 
	                {
	                    xtype: 'button',
	                    text : 'Delete',
	                    itemId : 'btnDelete'
	                }]
				}],
				selModel: Ext.create('Ext.selection.CheckboxModel', { mode : 'MULTI' })
			},
			{
		        xtype: 'panel',
		        flex: 1,
		        title: 'Picture',
		        itemId:'pic',
	        	tpl: [ '<img src="data/{img}" style="float: center" />' ]
	        }],		
		});
		this.callParent(arguments);
	},
	onGridpanelSelect: function (rowmodel, record, index, eOpts) {
		var pic = this.child('#pic'); // chi dinh pic la nha'nh child bang #
		pic.update(record.data);		// sau do update
   	}				                   
});