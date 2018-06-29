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
            console.log("constructor");
            axios.interceptors.request.use(req => {
                this.setState({ error: null, success: null });
                return req;
            });

            axios.interceptors.response.use(res => {
                if (res.config.method !== 'get') {
                    this.setState({ success: 'Your request is already sent' });
                }
            }, error => {
                this.setState({ error: error });
            })
        }

        errorConfrimedHandler = () => {
            this.setState({ error: null })
        }

        successConfrimedHandler = () => {
            this.setState({ success: null })
        }

        render() {
            console.log("render in error handler");
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