/**
 * @class Bleext.modules.catalogs.applications.view.Viewport
 * @extends Bleext.abstract.Viewport
 * requires 
 * @autor Crysfel Villa
 * @date Tue Aug  2 01:10:24 CDT 2011
 *
 * Description
 *
 *
 **/

Ext.define("Bleext.modules.catalogs.applications.view.Viewport",{
	extend		: "Bleext.abstract.Viewport",
	
	initComponent	: function() {
		var me = this;
		
		this.items = this.buildItems();
        
		me.callParent();
	},
	
	buildItems	: function(){
		var propertyGrid = Ext.create("Bleext.modules.catalogs.applications.view.ConfigurationsGrid",{
			region	: "east",
			width	: 200
		});
		var grid = Ext.create("Bleext.modules.catalogs.applications.view.ApplicationsGrid",{
			region	: "south",
			height	: 150
		});
		
		var form = Ext.create("Bleext.modules.catalogs.applications.view.ApplicationForm",{
			region	: "center"
		});
		
		return [grid,{layout:"border",region:"center",border:false,items:[form,propertyGrid]}];
	}
});