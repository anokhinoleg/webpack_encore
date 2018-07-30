import React from 'react';
import RepLogList from './RepLogList';
import RepLogCreator from './RepLogCreator';
import PropTypes from 'prop-types';

function calculateTotalWeightLifted(repLogs) {
    let totalWeight = 0;
    for (let repLog of repLogs) {
        totalWeight += repLog.totalWeightLifted;
    }
    return totalWeight;
}

//the same as function calculateTotalWeightLifted(repLogs)
function calculateTotalWeightLiftedFancier(repLogs) {
    return repLogs.reduce((total, log) => total + log.totalWeightLifted, 0);
}


const calculateTotalWeightFancier = repLogs => calculateTotalWeightLiftedFancier(repLogs);

export default function RepLogs(props) {
    const { withHeart, highlightedRowId, onRowClick, repLogs, onNewItemSubmit } = props;
    let heart = '';
    if (withHeart) {
        heart = <span>❤️</span>;
    }

    return (
        <div className="col-md-7">
            <h2>Lift Stuff! {heart}</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>What</th>
                    <th>How many times?</th>
                    <th>Weight</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <RepLogList
                    highlightedRowId={highlightedRowId}
                    onRowClick={onRowClick}
                    repLogs={repLogs}
                />
                <tfoot>
                <tr>
                    <td>&nbsp;</td>
                    <th>Total</th>
                    <th>{calculateTotalWeightFancier(repLogs)}</th>
                    <td>&nbsp;</td>
                </tr>
                </tfoot>
            </table>
            <RepLogCreator
                onNewItemSubmit={onNewItemSubmit}
            />
        </div>
    );

}

RepLogs.propTypes = {
    withHeart: PropTypes.bool,
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired,
    repLogs: PropTypes.array.isRequired,
    onNewItemSubmit: PropTypes.func.isRequired
};

