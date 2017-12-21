import * as React from 'react';
import { ApiHelper, OrderInfoSetInterface } from './../ApiHelper';
import { ApiUrls } from './../ApiUrls';
import { Row, Col } from 'reactstrap';

export class BuyOrdersTable extends React.Component<{}, OrderInfoSetInterface> {
    constructor(props: any) {
        super(props);
        this.state = { message: "", success: true, result: { buy: [], sell: [] } };
    }
    componentDidMount() {
        setInterval(() => {
            ApiHelper.getData(ApiUrls.BuyOrdersUrl).then(response => {
                if (response.data != 'Maintenance...') {
                    this.setState(response.data);
                }
            }).catch(e => {
                console.log("getBUYorders error: " + e);
            });
        }, 5000)
    }
    componentWillUnmount() {
        clearInterval(0);
    }

    render() {
        return <div>
            <Row>
                <Col sm={4}>Quantity</Col>
                <Col sm={4}>Rate</Col>
                <Col sm={4}>Rate*Quantity</Col>
            </Row>
            {this.state.result.buy.map(t => {
                return <Row>
                    <Col sm={4}>{t.Quantity}</Col>
                    <Col sm={4}>{t.Rate} </Col>
                    <Col sm={4}>{t.Rate * t.Quantity} </Col>
                </Row>
            })}
        </div>
    }
}