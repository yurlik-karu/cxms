import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Alert, Button } from 'reactstrap';
//import ApiHelper from './../ApiHelper';
import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios"

interface HomeInterface {
    sellOrders: any;
}

export class Home extends React.Component<RouteComponentProps<{}>, HomeInterface> {
    getSellOrders() {
        var config = {
            headers: {'Access-Control-Allow-Origin' : '*'}
          };
        axios.get('https://c-cex.com/t/api_pub.html?a=getorderbook&market=btc-usd&type=sell&depth=100', config).then(response => {
            this.setState({ sellOrders: (response.data || []) });
        });
    }

    componentDidMount() {
        this.getSellOrders();
    }

    constructor(props: any) {
        super(props);
        this.state = { sellOrders: [] };
    }

    public render() {
        return <div>
            <h1>Hello, world!</h1>
            <Alert>Hello from alert</Alert>
            <Button color="danger">Ok</Button>
            <p>Welcome to your new single-page application, built with:</p>
            <ul>
                <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                <li><a href='https://facebook.github.io/react/'>React</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>
                <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>
                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            </ul>
            <p>To help you get started, we've also set up:</p>
            <ul>
                <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
                <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>
                <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state.</li>
                <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>
            </ul>
            <h4>Going further</h4>
            <p>
                For larger applications, or for server-side prerendering (i.e., for <em>isomorphic</em> or <em>universal</em> applications), you should consider using a Flux/Redux-like architecture.
                You can generate an ASP.NET Core application with React and Redux using <code>dotnet new reactredux</code> instead of using this template.
            </p>
        </div>;
    }
}
