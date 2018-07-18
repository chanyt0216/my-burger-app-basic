import React, { Component, Fragment } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
            success: null,
        }

        constructor(props) {
            super(props);
            this.reqInterceptor = axios.interceptors.request.use(req => {
                console.log(req);
                this.setState({ error: null, success: null });
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => {
                if (res.config.method !== 'get') {
                    this.setState({ success: 'Your request is already sent' });
                    return res;
                }
                return res;
            }, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            console.log("Will Unmount", this.resInterceptor, this.reqInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfrimedHandler = () => {
            this.setState({ error: null })
        }

        successConfrimedHandler = () => {
            this.setState({ success: null })
        }

        render() {
            return (
                <Fragment>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfrimedHandler}>
                        {this.state.error && this.state.error.message}
                    </Modal>
                    <Modal
                        show={this.state.success}
                        modalClosed={this.successConfrimedHandler}>
                        {this.state.success && this.state.success}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }

};

export default withErrorHandler;