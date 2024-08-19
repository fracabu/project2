sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "project2/model/BacktestModel" // Importa il modello
], function (Controller, JSONModel, MessageToast, BacktestModel) {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit: function () {
            // Inizializza il modello usando il modello separato
            var oModel = BacktestModel.createBacktestModel();
            this.getView().setModel(oModel, "backtest");
        },

        onAddTest: function () {
            var oModel = this.getView().getModel("backtest");
            var oData = oModel.getData();
            oData.backtest.test.push({
                description: "New Test",
                winRateShort: "0%",
                winRateLong: "0%",
                netProfit: 0,
                maxDrawdownAbsolute: 0,
                maxDrawdownPercentage: "0%",
                profitFactor: 0,
                recoveryFactor: 0,
                sharpeRatio: 0,
                totalTrades: 0,
                consecutiveLosses: 0,
                maxConsecutiveLossesValue: 0
            });

            oModel.refresh();
            MessageToast.show("New test added");
        },

        onDeleteTest: function () {
            var oModel = this.getView().getModel("backtest");
            var oData = oModel.getData();
            if (oData.backtest.test.length > 0) {
                oData.backtest.test.pop();
                oModel.refresh();
                MessageToast.show("Last test deleted");
            } else {
                MessageToast.show("No tests to delete");
            }
        },

        onSaveTests: function () {
            var oModel = this.getView().getModel("backtest");
            var oData = oModel.getData();
            console.log("Saved data:", JSON.stringify(oData));
            MessageToast.show("Tests saved (check console)");
        }
    });
});
