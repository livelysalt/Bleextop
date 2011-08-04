/**
 * @class Bleext.modules.catalogs.applications.view.ApplicationForm
 * @extends Bleext.abstract.Form
 * requires 
 * @autor Crysfel Villa
 * @date Tue Aug  2 01:19:40 CDT 2011
 *
 * Description
 *
 *
 **/

Ext.define("Bleext.modules.catalogs.applications.view.ApplicationForm",{
	extend		: "Bleext.abstract.Form",
	

	initComponent	: function() {
		var me = this;
		
        me.items = this.buildItems();

		me.callParent();
	},
	
	buildItems		: function(){
		return	{
			xtype	: "fieldset",
			defaults	: {xtype:"textfield",anchor	: '100%'},
			items	: [{
				fieldLabel	: "Name",
				name		: "name"
			},{
				fieldLabel	: "Controller",
				name		: "class"
			},{
				xtype		: "textarea",
				fieldLabel	: "Description",
				name		: "description"
			},{
				xtype		: "checkbox",
				name		: "active",
				boxLabel	: "Active",
				hideEmptyLabel 	: false,
				labelSeparator 	: "",
				fieldLabel		: ""
			}]
		};
	}
});