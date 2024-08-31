sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    "use strict";

    return {
        createBacktestModel: function () {
            var oData = {
                backtest: {
                    test: [
                        {
                            description: "EA Backtest - Advisor 1",
                            winRateTotal: "1.80%",
                            winRateShort: "1.38%",
                            winRateLong: "2.22%",
                            netProfit: 69879.70,
                            maxDrawdownAbsolute: 5235.80,
                            maxDrawdownPercentage: "7.53%",
                            profitFactor: 1.61,
                            recoveryFactor: 10.84,
                            sharpeRatio: 6.74,
                            totalTrades: 8559,
                            consecutiveLosses: 397,
                            maxConsecutiveLossesValue: -4331.40
                        }
                    ]
                }
            };

            return new JSONModel(oData);
        }
    };
});
