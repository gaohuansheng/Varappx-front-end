'use strict';
var React = require('react');
var _ = require('lodash');
var FilterActions = require('../../../actions/FilterActions');
var formatters = require('../../../utils/formatters.js');
var HelpTooltip = require('../../tooltips/HelpTooltip.js').HelpTooltip;
/**
 * @class GenotypesFilter
 * @description Options of genotypic scenarios
 */


class GenotypesFilter extends React.Component {
    constructor(props) {
        super(props);
        /* Use props to init the internal state only */
        this.state = {value: props.value || 'active'};
        this.onChange = this.onChange.bind(this);
    }
    /* Because the props might change as the result of another action, like changing the db,
       the state needs to be updated when props are received */
    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.value || 'active'});
    }

    onChange(e) {
        var value = e.target.value;
        this.setState({value: value});  // change checked state right away
        FilterActions.filtersReset()
        FilterActions.updateOneFilterValue(this.props.field, value);
        if (value !== 'none') {
        setTimeout(function(){
            FilterActions.updateOtherFilters();
        }
        ,500);
        };

    }

    render() {
        var _this = this;
        var value = this.state.value;
        var choices = _.chain(['none','Default1_Final','Default1b_Final','Default2_Important','Default3_Pathogenic'])
            .map(function (Filterpanel) {
                var key = _this.props.name + '-' + Filterpanel;
                var checked = value === Filterpanel;
                //console.log(value);
                return (
                    <div className="genotypes-filter-choices" key={key}>
                        {/*<div className="filter-name genotypes-filter-name">{nameStr}</div>*/}
                        <div className="genotypes-filter-input">
                            <input
                                className={value === Filterpanel ? 'checked' : ''}
                                type='radio'
                                name={Filterpanel}
                                value={Filterpanel}
                                checked={checked}
                                onChange={_this.onChange}
                            />
                            <span>
                                {' '+formatters.enumElem(Filterpanel.replace('active','none'))}
                            </span>
                            <span style={{paddingLeft: '5px'}}>
                                <HelpTooltip name={Filterpanel} category={'FiltersPanel'} />
                            </span>
                            <small><span className="badge count pull-right">{Filterpanel.count}</span></small>
                        </div>
                    </div>
                );
            })
            .value();

        return (
            <div className="one-filter genotypes-filter">
                {choices}
            </div>
        );
    }
}


module.exports = GenotypesFilter;

