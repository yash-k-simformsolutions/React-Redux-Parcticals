import React from 'react';
import { Filters } from '../constants';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';

const VisibilityFilters = ({ activeFilter }) => {
    return (
        <div className="visibility-filters">
            {
                Object.keys(Filters).map(filterkey => {
                    const currentFilter = Filters[filterkey];
                    return (
                        <span
                            key = {`visibility-filter-${currentFilter}`}
                            className={`filter ${currentFilter === activeFilter && "filter--active"}`}
                            onClick={() => {setFilter(currentFilter)} /**waiting for setfilter handler */}
                        >
                            {currentFilter}
                        </span>
                    );
                })
            }
        </div>
    );
}

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
}

export default connect(
    mapStateToProps,
    { setFilter }   
) (VisibilityFilters);