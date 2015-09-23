Ext.define('Homemade.controller.HomemadeController', {
    extend: 'Ext.app.Controller',

    models: ['Homemade.model.RecipeModel'],
    stores: ['Homemade.store.RecipeStore'],
    views: ['Homemade.view.MainView'],
    refs: [{
        ref: 'MainView',
        selector: 'MainView'  //from app.js
    }],
    init: function () {
        //tao button actions sau co phia duoi viet function action.
        this.control({
           
            'viewport > MainView button[itemId=btnCreate]':
            // point to file in view folder and the button with itemId's value
            {
                click: this.onCreateClick
            },
            'viewport > MainView button[itemId=btnLoad]':
            {
                click: this.onLoadClick
            },
            'viewport > MainView button[itemId=btnSave]':
            {
                click: this.onSaveClick
            },
            'viewport > MainView button[itemId=btnDelete]':
            {
                click: this.onDeleteClick
            },
        });
    },

    /*onEditorRender: function () {
        console.log("homemade editor was rendered");
    },*/


    onCreateClick: function(){
        var MainView = this.getMainView(); // matching the selector define above
        var RecipeStore = MainView.getComponent("recipeGridId").getStore('Homemade.store.RecipeStore');
        var newData = Ext.create('Homemade.model.RecipeModel',{
            name: 'Some New Recipe Name',
            ingredient: 'New ingredient Name',
            date: new Date()
        });
        RecipeStore.add(newData);
    },
    onLoadClick: function(){
       var store = Ext.getStore('RecipeStore');
       store.load();
       console.log("loaded");
    },
    onDeleteClick: function(){
        var MainView = this.getMainView();
        var Grid = MainView.getComponent("recipeGridId");
        var RecipeStore = Grid.getStore('Homemade.store.RecipeStore');
        var selectedRows = Grid.getSelectionModel().getSelection();
        if (selectedRows.length)
            RecipeStore.remove(selectedRows);
        else
            Ext.Msg.alert('Status', 'Please select at least one record to delete!');

    } 
});