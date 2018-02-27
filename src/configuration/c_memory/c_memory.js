/**
 * Created by zhangzilong on 17-1-6.
 */
import React from 'react';
import {
    Spin,
    Card,
    Table,
    Progress
} from 'antd';
import {Config,
    // OpenNotificationWithIcon
} from '../../plugins';
import Common from '../../common';
import '../configuration.css'

class Memory extends Common {
    state = {
        Columns: [
            {
                title: '节点名称',
                dataIndex: 'nodeName',
                key: 'nodeName'
            }, {
                title: '总空间',
                dataIndex: 'total',
                key: 'total'
            }, {
                title: '总使用空间',
                dataIndex: 'used',
                key: 'used'
            }, {
                title: '总剩余空间',
                dataIndex: 'free',
                key: 'free'
            }, {
                title: '使用率',
                dataIndex: 'rate',
                key: 'rate'
            }
        ],
        DataSource: [],
        error: {}
    };

    componentWillMount() {
        super.Fetch_Promise(Config.storageEs).then(jsonData => {
            let results = [];
            jsonData.data.map((result, index) => {
                results.push({
                    key: index,
                    nodeName: result.cluster_name,
                    total: (result.total / 1024 / 1024 / 1024).toFixed(2) + "GB",
                    used: ((result.total - result.free) / 1024 / 1024 / 1024).toFixed(2) + "GB",
                    free: (result.free / 1024 / 1024 / 1024).toFixed(2) + "GB",
                    rate: <Progress percent={Number(((result.total - result.free) / result.total * 100).toFixed(2))}
                                    status="active"/>
                });
                return results;
            });
            this.setState({loading: false, DataSource: results});
        }).catch(error_promise => {
            let error = this.state.error;
            // OpenNotificationWithIcon(error_promise, error);
            error[error_promise] = 1;
            this.setState({
                error: error,
                loading: false,
            });
        });
    };

    render() {
        return (
            <div  className="memory cfortable">
                <Card title="存储监控" className="card" bordered={false}>
                    <Spin tip="加载中..." spinning={this.state.loading}>
                        <Table columns={this.state.Columns} dataSource={this.state.DataSource} pagination={{
                            defaultPageSize: Config.tablePageSize
                        }}
                            rowClassName={function (record,index) {
                                if(index%2===0){
                                    return "even"
                                }else{
                                    return "odd"
                                }
                            }}
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}
export default Memory;
