import * as React from 'react';
import { ApiHelper, OrderInfoSetInterface } from './../ApiHelper';
import { ApiUrls } from './../ApiUrls';
import { Row, Col, Fade } from 'reactstrap';

export class SellOrdersTable extends React.Component<{}, OrderInfoSetInterface> {
    constructor(props: any) {
        super(props);

        this.state = { message: "", success: true, result: { buy: [], sell: [] } };
    }

    componentDidMount() {
        setInterval(() => {
            ApiHelper.getData(ApiUrls.SellOrdersUrl).then(response => {
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
                <Col sm={4}>Price</Col>
                <Col sm={4}>Quantity</Col>
                <Col sm={4}>Amount</Col>
            </Row>
            {this.state.result.sell.map(t => {
                return <Row>
                    <Col sm={4}>{t.Rate.toFixed(8)}</Col>
                    <Col sm={4}>{t.Quantity}</Col>
                    <Col sm={4}>{t.Rate * t.Quantity} </Col>
                </Row>
            })}
        </div>
    }
}