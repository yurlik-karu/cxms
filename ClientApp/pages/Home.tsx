import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Row, Col, Card, CardBody, CardHeader, Badge } from 'reactstrap';
import { ApiHelper, OrderInfoSetInterface } from './../ApiHelper';
import { SellOrdersTable } from './../components/SellOrdersTable';
import { BuyOrdersTable } from './../components/BuyOrdersTable';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return <div>

            <Row>
                <Col sm={6}>
                    <Card>
                        <CardHeader>                        
                            <Badge>Sell orders</Badge>
                        </CardHeader>
                        <CardBody>
                            <SellOrdersTable />
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={6}>
                    <Card>
                        <CardHeader>
                            <Badge>Buy orders</Badge>
                        </CardHeader>
                        <CardBody>
                            <BuyOrdersTable />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>;
    }
}
