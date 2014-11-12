/*
    Overrides
*/

Ext.override(Ext.grid.plugin.CellEditing, {

    //overriding onEditComplete method
    //used for CB.plugins.DropDownList to avoid canceling edit when popup list visible

    onEditComplete : function(ed, value, startValue) {
        if(ed.field.preventEditComplete) {
            delete ed.field.preventEditComplete;
            return;
        }

        this.callParent(arguments);
    }
});
