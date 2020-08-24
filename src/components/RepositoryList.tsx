import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { ApplicationState } from "../store";
import * as RepositoryActions from "../store/ducks/repositories/actions";
import { Repository } from "../store/ducks/repositories/types";

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  LoadRequest(): void;
}

type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { LoadRequest } = this.props;

    LoadRequest();
  }

  render() {
    const { repositories } = this.props;
    return (
      <div>
        <p>total public repositories: {repositories.length}</p>
        <ul>
          {repositories.map((reporitory) => (
            <li>{reporitory.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
