import React, { Component } from "react";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Info from "./Info";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
  }

  renderHomePage() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            Ali Accent Translator
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/info" component={Link}>
              Translate something to ali accent
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => this.renderHomePage()}></Route>
          <Route path="/info" component={Info} />
        </Switch>
      </Router>
    );
  }
}
