import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Container } from 'reactstrap';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div>
            <NavMenu />
            <Container>
                {this.props.children}
            </Container>;
        </div>
    }
}
