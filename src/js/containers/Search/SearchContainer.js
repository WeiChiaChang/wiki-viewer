import React, { Component } from 'react';
import { connect } from 'react-redux';
import WikiViewer from '../../components/App';
import { requestSearch } from '../../actions/index';

const mapStateToProps = state => ({
  result: state,
});

const mapDispatchToProps = (dispatch) => ({
  requestSearch: (query) => dispatch(requestSearch(query)),
});

class ConnectedWikiViwer extends Component {
  render() {
    const { result } = this.props;
    return (
      <WikiViewer
        data={result}
        onSearch={(e) =>
          this.props.requestSearch(e.target.value)
        }
      />
    )
  }
}

const App = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ConnectedWikiViwer);

export default App;