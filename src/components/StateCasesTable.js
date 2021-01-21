import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

export const StateCasesTable = (props) => {
    const { SearchBar } = Search;
    const columns = [
        {
            dataField: 'region',
            text: 'State'
        },
        {
            dataField: 'labConfirmedCases',
            text: 'Confirmed Cases'
        },
        {
            dataField: 'onAdmissionCases',
            text: 'Active cases'
        },
        {
            dataField: 'discharged',
            text: 'Discharged'
        },
        {
            dataField: 'deaths',
            text: 'Deaths'
        }];

    return (
        <>
            <ToolkitProvider
                keyField="id"
                data={props.stateReport.regions}
                columns={columns}
                search

            >
                {
                    props => (
                        <div className='mt-5 text-center mb-5'>
                            <h3 className='text-white'>State Statistics</h3>
                            <SearchBar {...props.searchProps} />
                            <hr />
                            <BootstrapTable
                                {...props.baseProps}
                                pagination={paginationFactory()}
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
        </>
    )
}
