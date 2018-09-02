sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ProductOverview.controller.Master", {
		
		onInit : function () {
			
		},
		onItemPress: function (oEvent) {
			
			var oContext = oEvent.getParameter("listItem").getBindingContext("listModel").getProperty();
			this.getView().getModel("detailModel").setData(oContext);
			this.getOwnerComponent().getRouter().navTo("Detail");
		}

	});

});