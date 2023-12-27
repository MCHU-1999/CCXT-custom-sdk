import { BaseApi } from '../BaseApi';
import { PlacePlanReq } from '../model/mix/plan/PlacePlanReq';
import { ModifyPlanReq } from '../model/mix/plan/ModifyPlanReq';
import { ModifyPlanPresetReq } from '../model/mix/plan/ModifyPlanPresetReq';
import { ModifyTPSLPlanReq } from '../model/mix/plan/ModifyTPSLPlanReq';
import { PlaceTPSLReq } from '../model/mix/plan/PlaceTPSLReq';
import { CancelPlanReq } from '../model/mix/plan/CancelPlanReq';
export declare class MixPlanApi extends BaseApi {
    /**
     * Plan Entrusted Order
     * @param placePlanReq
     */
    placePlan(placePlanReq: PlacePlanReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Modify Plan Delegation
     * @param modifyPlanReq
     */
    modifyPlan(modifyPlanReq: ModifyPlanReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Modify the preset profit and loss stop of plan entrustment
     * @param modifyPlanPresetReq
     * @return ResponseResult
     */
    modifyPlanPreset(modifyPlanPresetReq: ModifyPlanPresetReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Modify profit and loss stop
     * @param modifyTPSLPlanReq
     */
    modifyTPSLPlan(modifyTPSLPlanReq: ModifyTPSLPlanReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Stop profit and stop loss Order
     * @param placeTPSLReq
     */
    placeTPSL(placeTPSLReq: PlaceTPSLReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Planned entrustment (profit and loss stop) cancellation
     * @param cancelPlanReq
     */
    cancelPlan(cancelPlanReq: CancelPlanReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get the current plan commission (profit stop and loss stop) list
     * @param symbol
     * @param isPlan
     */
    currentPlan(symbol: string, isPlan: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Obtain the list of historical plan commissions (profit and loss stop)
     * @param symbol
     * @param startTime
     * @param endTime
     * @param pageSize
     * @param isPre
     * @param isPlan
     */
    historyPlan(symbol: string, startTime: string, endTime: string, pageSize: string, isPre: boolean, isPlan: string): Promise<import("axios").AxiosResponse<any>>;
}
