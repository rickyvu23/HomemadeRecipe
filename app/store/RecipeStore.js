Ext.define('Homemade.store.RecipeStore', {
    extend: 'Ext.data.Store',
    autoload: false,
    model:'Homemade.model.RecipeModel',
    storeId: 'homemade',
    proxy: {
    type: 'ajax',
    url: 'data/home.json',
    reader: {
        type: 'json',
        root: 'data',
        successProperty: 'success'
    },
    api : 
        {
            read : 'data/home.json',
            create : 'data/home.json',
            update : 'data/home.json',
            destroy : 'data/home.json',
            save: 'data/home.json'
        },
    actionMethods : 
        {
            destroy : 'POST',
            read : 'GET',
            create : 'POST',
            update : 'POST',
            save: 'POST'
        }
    }
});