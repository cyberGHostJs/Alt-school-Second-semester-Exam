import { render } from "@testing-library/react";
import React from "react";
function ErrorBoundary(){
        class ErrorBoundary extends React.Component{
            constructor(props) {
                super(props);
                this.state = {error: null, errorInfo: null } ;
            }
        
            componentDidCatch(error, errorInfo) {
                this.setState({
                    error: error,
                    errorInfo: errorInfo
                })
            }
        }
        
        render() {
            if(this.state.errorInfo){
                return(
                    <div>
                        <details>
                            <h1>an error has occured</h1>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo.componentStack}
                        </details>
                    </div>
                );
            }
        
            return this.props.children;
        }
}

