'use strict';
var dispatcher = require('../dispatcher/Dispatcher');
var FilterConstants = require('../constants/FilterConstants');
var ApiConstants = require('../constants/ApiConstants');
var RestService = require('../utils/RestService');
var VariantConstants = require('../constants/VariantConstants')


var FilterActions = {

    /* Async */

    fetchGlobalStats: function(db) {
        //console.log("ACTION fetchGlobalStats", field, value);
        dispatcher.dispatch({
            actionType: FilterConstants.ACTION_FETCH_GLOBAL_STATS,
            state: ApiConstants.PENDING,
        });
        return RestService.getGlobalStats(db)
            .then(function(data) {
                dispatcher.dispatch({
                    actionType: FilterConstants.ACTION_FETCH_GLOBAL_STATS,
                    state: ApiConstants.SUCCESS,
                    globalStats: data,
                });
            })
            .fail(function(err) {
                dispatcher.dispatch({
                    actionType: FilterConstants.ACTION_FETCH_GLOBAL_STATS,
                    state: ApiConstants.ERROR,
                    error: err,
                });
            });
    },

    findLocation: function(db, loc) {
        dispatcher.dispatch({
            actionType: FilterConstants.ACTION_FIND_LOCATION,
            state: ApiConstants.PENDING,
        });
        return RestService.getLocation(db, loc)
            .then(function(data) {
                dispatcher.dispatch({
                    actionType: FilterConstants.ACTION_FIND_LOCATION,
                    state: ApiConstants.SUCCESS,
                    globalStats: data,
                });
                return data;
            })
            .fail(function(err) {
                dispatcher.dispatch({
                    actionType: FilterConstants.ACTION_FIND_LOCATION,
                    state: ApiConstants.ERROR,
                    error: err,
                });
                return err;
            });
    },

    /* Sync */

    updateOneFilterValue: function(field, value){
        var Api = require('../utils/Api.js');
        var VariantActions = require('./VariantActions')
        //console.log("ACTION updateOneFilterValue", field, value);
        console.log(field,value);
        dispatcher.dispatch({
            actionType: FilterConstants.ACTION_UPDATE_ONE_FILTER_VALUE,
            //state: ApiConstants.SUCCESS,
            field: field,
            value: value
        });

    },
    updateOtherFilters: function(){
            dispatcher.dispatch({
                    actionType: FilterConstants.UPDATE_FILTERS_WITH_PATNELS

    });
    },

    filtersReset: function(){
        //console.log("ACTION filtersReset");
        dispatcher.dispatch({
            actionType: FilterConstants.ACTION_FILTERS_RESET,
        });
    },

};



module.exports = FilterActions;
