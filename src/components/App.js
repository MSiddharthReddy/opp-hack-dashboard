import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Dashboard from './Dashboard';
import { CollegeList, CollegeNew, CollegeView } from './colleges';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8'
  },
  contentRoot: {
    padding: 20
  }
};

class App extends Component {
  state = {
    tabValue: 'dashboard'
  };

  componentDidMount() {
    // Fetch top-level stuff
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="center" className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="title"
                  color="inherit"
                  className={classes.flex}
                >
                  F-Connect Admin Dashboard
                </Typography>
                <Button color="inherit">Logout</Button>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Paper>
              <Router>
                <React.Fragment>
                  <Tabs
                    value={this.state.tabValue}
                    onChange={this.handleChange}
                    classes={{ root: classes.tabRoot }}
                    indicatorColor="primary"
                    textColor="primary"
                    fullWidth
                  >
                    <Tab
                      value="dashboard"
                      label="Dashboard"
                      component={Link}
                      to="/"
                    />
                    <Tab
                      value="colleges"
                      label="Colleges"
                      component={Link}
                      to="/colleges"
                    />
                    <Tab
                      value="resources"
                      label="Resources"
                      component={Link}
                      to="/resources"
                    />
                  </Tabs>

                  <Grid container spacing={16}>
                    <Grid item xs={12}>
<<<<<<< Updated upstream
                      <Route exact path="/" component={Dashboard} />
                      <Route exact path="/colleges" component={CollegeList} />
                      <Route path="/colleges/new" component={CollegeNew} />
=======
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="title" color="inherit" className={classes.flex}>
                                    F-Connect Admin Dashboard
                                </Typography>
                                <Button color="inherit">Logout</Button>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <Paper>
                            <Router>
                                <React.Fragment>
                                    <Tabs
                                        value={this.state.tabValue}
                                        onChange={this.handleChange}
                                        classes={{root: classes.tabRoot}}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        fullWidth>
                                        <Tab value="dashboard" label="Dashboard" component={Link} to="/"/>
                                        <Tab value="colleges" label="Colleges" component={Link} to="/colleges"/>
                                        <Tab value="resources" label="Resources" component={Link} to="/resources"/>
                                    </Tabs>
                                    
                                    <Grid container spacing={16}>
                                        <Grid item xs={12}>
                                            <Route path="/" component={Dashboard} />
                                            <Route path="/colleges" component={CollegeList} />
                                            <Route path="/colleges/:name" component={CollegeView} />
                                            <Route path="/colleges/new" component={CollegeNew} />
                                        </Grid>
                                    </Grid>
                                </React.Fragment>
                            </Router>
                        </Paper>
>>>>>>> Stashed changes
                    </Grid>
                  </Grid>
                </React.Fragment>
              </Router>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  fetchUser: PropTypes.func.isRequired
};

export default connect(
  null,
  actions
)(withStyles(styles)(App));
