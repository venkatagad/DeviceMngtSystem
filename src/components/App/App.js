import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem, Panel} from "react-bootstrap";
import {connect} from "react-redux";
import actions from '../../store/actions'

const propTypes = {
    devices: PropTypes.object,
    getDevices: PropTypes.func.isRequired,
    setSelected: PropTypes.func.isRequired,
    selectedDevice: PropTypes.bool,
    activeDevice: PropTypes.object
};

class App extends Component {
    constructor(props) {
        super(props);

        this.gotToDevice = this.gotToDevice.bind(this);
        this.setActiveDevice = this.setActiveDevice.bind(this);

        this.state = {
            breadCrumb: ['home']
        };
    }

    renderDevices(devices, self) {
        let keys = Object.keys(devices);
        return keys.length > 0 ? keys.map((device, index) => (<Panel key={index}>
            <Panel.Heading onClick={() => this.gotToDevice(device, self)}>{device}</Panel.Heading>
            <Panel.Body className={self.props.selectedDevice === device ? '' : 'hidden'}>
                <ListGroup>
                    {this.renderEquipment(devices, device, self)}
                </ListGroup>
            </Panel.Body>
        </Panel>)) : <div></div>
    }

    renderEquipment(devices, device, self) {
        return devices[device].map((element, index) => (<ListGroupItem
            key={index} onClick={() => {
            this.setActiveDevice(element, self)
        }}>{element.name}</ListGroupItem>))
    }

    gotToDevice = (device, self) => {
        window.history.pushState('', '', '/' + device);
        self.props.setSelected(device);
        this.setState({
            breadCrumb: ['home', device]
        });
    };

    setActiveDevice(device, self) {
        window.history.pushState('', '', '/' + self.props.selectedDevice + '/' + device.name);
        self.props.setActive(device);

        this.setState({
            breadCrumb: ['home', self.props.selectedDevice, device.name]
        });
    }

    renderBreadCrumb() {
        return (
            <ol className="breadcrumb">
                {this.state.breadCrumb.map((e, i) => (<li key={i}><a>{e}</a></li>))}
            </ol>
        );
    }


    render() {
        const {devices, activeDevice} = this.props;
        return (
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a>Link</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-sm-12 main-container">
                        <div className="row">
                            {this.renderBreadCrumb()}
                        </div>
                        <div className="row devices-container">
                            <div className="col-sm-9">
                                <div className="row containers">
                                    <div className="col-sm-6 image-container">
                                        <div className="child"></div>
                                    </div>
                                    <div className="col-sm-6 form-container">
                                        <div className="child">
                                            <div className="form-group">
                                                <label>Equipment Name</label>
                                                <input value={activeDevice.name} className="form-control"/>
                                            </div>

                                            <div className="form-group">
                                                <label>Vendor</label>
                                                <input value={activeDevice.vendor} className="form-control"/>
                                            </div>

                                            <div className="form-group">
                                                <label>Location</label>
                                                <input value={activeDevice.location} className="form-control"/>
                                            </div>

                                            <div className="form-group">
                                                <label>Modal</label>
                                                <input value={activeDevice.modal} className="form-control"/>
                                            </div>

                                            <div className="form-group">
                                                <label>Serial #</label>
                                                <input value={activeDevice.serial} className="form-control"/>
                                            </div>

                                            <div className="form-group">
                                                <label>Description</label>
                                                <input value={activeDevice.description} className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <Panel className="panel-primary">
                                    <Panel.Heading>System</Panel.Heading>
                                </Panel>
                                {this.renderDevices(devices, this)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = propTypes;

const mapStateToProps = state => ({
    devices: state.reducers.devices,
    selectedDevice: state.reducers.selectedDevice,
    activeDevice: state.reducers.activeDevice
});

const mapDispatchToProps = dispatch => ({
    getDevices: (self) => {
        dispatch(actions.getAll());
    },
    setSelected: (device) => {
        dispatch(actions.setSelected(device));
    },
    setActive: (device) => {
        dispatch(actions.setActive(device));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
