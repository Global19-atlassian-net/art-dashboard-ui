import React, {Component} from "react";
import {get_daily_overview_data} from "../../api_calls/build_health_calls";
import {Pagination, Table} from "antd";


export default class Daily_overview_table extends Component{

    constructor(props) {
        super(props);
        this.state = {
            table_data: []
        }

        get_daily_overview_data().then(data => {
            this.setState({table_data: data["data"]})
        });
    }

    render() {

        const table_columns = [
            {
                title: "Date",
                dataIndex: "date",
                key: "date"
            },{
                title: "Total Builds",
                dataIndex: "total",
                key: "total"
            },{
                title: "Successful Builds",
                dataIndex: "success",
                key: "success"
            },{
                title: "Failed Builds",
                dataIndex: "failure",
                key: "failure"
            },{
                title: "Build Success Rate",
                dataIndex: "success_rate",
                key: "success_rate"
            }
        ]

        return(
            <div>
                <Table dataSource={this.state.table_data}
                       columns={table_columns}
                       pagination={<Pagination defaultCurrent={0}/>}
                    />
            </div>
        )
    }

}