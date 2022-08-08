var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Cordova, Plugin } from './plugin';
/**
 * @name Mixpanel
 * @description
 * Cordova Plugin that wraps Mixpanel SDK for Android and iOS
 *
 * @usage
 * ```
 * import {Mixpanel} from 'ionic-native';
 *
 * Mixpanel.init(token)
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 * @classes
 * MixpanelPeople
 */
export var Mixpanel = (function () {
    function Mixpanel() {
    }
    /**
     *
     * @param aliasId {string}
     * @param originalId {string}
     * @returns {Promise<any>}
     */
    Mixpanel.alias = function (aliasId, originalId) { return; };
    /**
     *
     * @returns {Promise<any>}
     */
    Mixpanel.distinctId = function () { return; };
    /**
     * @returns {Promise<any>}
     */
    Mixpanel.flush = function () { return; };
    /**
     *
     * @param distinctId {string}
     * @returns {Promise<any>}
     */
    Mixpanel.identify = function (distinctId) { return; };
    /**
     *
     * @param token {string}
     * @returns {Promise<any>}
     */
    Mixpanel.init = function (token) { return; };
    /**
     *
     * @param superProperties {any}
     * @returns {Promise<any>}
     */
    Mixpanel.registerSuperProperties = function (superProperties) { return; };
    /**
     *
     * @returns {Promise<any>}
     */
    Mixpanel.reset = function () { return; };
    /**
     *
     * @param eventName {string}
     * @param eventProperties {any} optional
     * @returns {Promise<any>}
     */
    Mixpanel.track = function (eventName, eventProperties) { return; };
    /**
     *
     * @returns {Promise<any>}
     */
    Mixpanel.showSurvey = function () { return; };
    Object.defineProperty(Mixpanel, "people", {
        /**
         *
         * @returns {MixpanelPeople}
         */
        get: function () {
            return MixpanelPeople;
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        Cordova()
    ], Mixpanel, "alias", null);
    __decorate([
        Cordova()
    ], Mixpanel, "distinctId", null);
    __decorate([
        Cordova()
    ], Mixpanel, "flush", null);
    __decorate([
        Cordova()
    ], Mixpanel, "identify", null);
    __decorate([
        Cordova()
    ], Mixpanel, "init", null);
    __decorate([
        Cordova()
    ], Mixpanel, "registerSuperProperties", null);
    __decorate([
        Cordova()
    ], Mixpanel, "reset", null);
    __decorate([
        Cordova({
            successIndex: 2,
            errorIndex: 3
        })
    ], Mixpanel, "track", null);
    __decorate([
        Cordova()
    ], Mixpanel, "showSurvey", null);
    Mixpanel = __decorate([
        Plugin({
            pluginName: 'Mixpanel',
            plugin: 'cordova-plugin-mixpanel',
            pluginRef: 'mixpanel',
            repo: 'https://github.com/samzilverberg/cordova-mixpanel-plugin'
        })
    ], Mixpanel);
    return Mixpanel;
}());
/**
 * @private
 */
export var MixpanelPeople = (function () {
    function MixpanelPeople() {
    }
    /**
     *
     * @param distinctId {string}
     * @return {Promise<any>}
     */
    MixpanelPeople.identify = function (distinctId) { return; };
    /**
     *
     * @param peopleProperties {string}
     * @return {Promise<any>}
     */
    MixpanelPeople.increment = function (peopleProperties) { return; };
    /**
     *
     * @param pushId
     * @return {Promise<any>}
     */
    MixpanelPeople.setPushId = function (pushId) { return; };
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    MixpanelPeople.set = function (peopleProperties) { return; };
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    MixpanelPeople.setOnce = function (peopleProperties) { return; };
    /**
     * @private
     */
    MixpanelPeople.plugin = 'cordova-plugin-mixpanel';
    /**
     * @private
     */
    MixpanelPeople.pluginRef = 'mixpanel.people';
    __decorate([
        Cordova()
    ], MixpanelPeople, "identify", null);
    __decorate([
        Cordova()
    ], MixpanelPeople, "increment", null);
    __decorate([
        Cordova()
    ], MixpanelPeople, "setPushId", null);
    __decorate([
        Cordova()
    ], MixpanelPeople, "set", null);
    __decorate([
        Cordova()
    ], MixpanelPeople, "setOnce", null);
    return MixpanelPeople;
}());
//# sourceMappingURL=mixpanel.js.map