sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	var oController;
	return Controller.extend("ProductOverview.controller.Detail", {
		
		onInit : function () {
			
			oController = this;
			oController._router = oController.getOwnerComponent().getRouter();
			
			oController._router.getRoute("Detail").attachMatched(function (oEvent) {
						
						if (!oController.getView().getModel("detailModel").getProperty("/ProductId")) {
							oController.getOwnerComponent().getRouter().navTo("");
						}													
						
			},this);
			
		},
		stateFormatter : function (sStatus) {
				if (sStatus === "Available") {
					return "Success";
				} else if (sStatus === "Out of Stock") {
					return "Warning";
				} else if (sStatus === "Discontinued"){
					return "Error";
				} else {
					return "None";
				}
		}

	});

});