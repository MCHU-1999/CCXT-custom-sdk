"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixPlanApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class MixPlanApi extends BaseApi_1.BaseApi {
    /**
     * Plan Entrusted Order
     * @param placePlanReq
     */
    placePlan(placePlanReq) {
        const url = config_1.MIX_URL.MIX_PLAN + '/placePlan';
        const headers = this.signer('POST', url, placePlanReq);
        return this.axiosInstance.post(url, placePlanReq, { headers });
    }
    /**
     * Modify Plan Delegation
     * @param modifyPlanReq
     */
    modifyPlan(modifyPlanReq) {
        const url = config_1.MIX_URL.MIX_PLAN + '/modifyPlan';
        const headers = this.signer('POST', url, modifyPlanReq);
        return this.axiosInstance.post(url, modifyPlanReq, { headers });
    }
    /**
     * Modify the preset profit and loss stop of plan entrustment
     * @param modifyPlanPresetReq
     * @return ResponseResult
     */
    modifyPlanPreset(modifyPlanPresetReq) {
        const url = config_1.MIX_URL.MIX_PLAN + '/modifyPlanPreset';
        const headers = this.signer('POST', url, modifyPlanPresetReq);
        return this.axiosInstance.post(url, modifyPlanPresetReq, { headers });
    }
    /**
     * Modify profit and loss stop
     * @param modifyTPSLPlanReq
     */
    modifyTPSLPlan(modifyTPSLPlanReq) {
        const url = config_1.MIX_URL.MIX_PLAN + '/modifyTPSLPlan';
        const headers = this.signer('POST', url, modifyTPSLPlanReq);
        return this.axiosInstance.post(url, modifyTPSLPlanReq, { headers });
    }
    /**
     * Stop profit and stop loss Order
     * @param placeTPSLReq
     */
    placeTPSL(placeTPSLReq) {
        const url = config_1.MIX_URL.MIX_PLAN + '/placeTPSL';
        const headers = this.signer('POST', url, placeTPSLReq);
        return this.axiosInstance.post(url, placeTPSLReq, { headers });
    }
    /**
     * Planned entrustment (profit and loss stop) cancellation
     * @param cancelPlanReq
     */
    cancelPlan(cancelPlanReq) {
        const url = config_1.MIX_URL.MIX_PLAN + '/cancelPlan';
        const headers = this.signer('POST', url, cancelPlanReq);
        return this.axiosInstance.post(url, cancelPlanReq, { headers });
    }
    /**
     * Planned entrustment (profit and loss stop) ALL cancellation
     * @param {String} productType product type: umcbl, cmcbl...
     * @param {String} planType plan type: profit_plan, loss_plan, normal_plan, pos_profit, pos_loss, moving_plan, track_plan.
     */
    cancelAllPlan(productType, planType) {
        const url = config_1.MIX_URL.MIX_PLAN + '/cancelAllPlan';
        const qsOrBody = { productType, planType };
        const headers = this.signer('POST', url, qsOrBody);
        return this.axiosInstance.post(url, qsOrBody, { headers });
    }
    /**
     * Get the current plan commission (profit stop and loss stop) list
     * @param symbol
     * @param isPlan
     */
    currentPlan(symbol, isPlan) {
        const url = config_1.MIX_URL.MIX_PLAN + '/currentPlan';
        const qsOrBody = isPlan ? { symbol, isPlan } : { symbol };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Obtain the list of historical plan commissions (profit and loss stop)
     * @param symbol
     * @param startTime
     * @param endTime
     * @param pageSize
     * @param isPre
     * @param isPlan
     */
    historyPlan(symbol, startTime, endTime, pageSize, isPre, isPlan) {
        const url = config_1.MIX_URL.MIX_PLAN + '/historyPlan';
        const qsOrBody = { symbol, startTime, endTime, pageSize, isPre, isPlan };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
}
exports.MixPlanApi = MixPlanApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4UGxhbkFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbWl4L01peFBsYW5BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQW1DO0FBRW5DLHNDQUFrQztBQU9sQyxNQUFhLFVBQVcsU0FBUSxpQkFBTztJQUVuQzs7O09BR0c7SUFDSCxTQUFTLENBQUMsWUFBMEI7UUFDaEMsTUFBTSxHQUFHLEdBQUcsZ0JBQU8sQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzVDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQTtRQUN0RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVLENBQUMsYUFBNEI7UUFDbkMsTUFBTSxHQUFHLEdBQUcsZ0JBQU8sQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzdDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQTtRQUN2RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsZ0JBQWdCLENBQUMsbUJBQXdDO1FBQ3JELE1BQU0sR0FBRyxHQUFHLGdCQUFPLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBQ25ELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFBO1FBQzdELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJ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