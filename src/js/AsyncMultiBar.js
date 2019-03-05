import React, { Component } from 'react';
import '../scss/SingleBar.scss';
import MultiBar from './MultiBar';

/**
 * Generates a MultiBar component based on API data
 */
class AsyncMultiBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      values: []
    };
  }

  componentDidMount(){
    this.getData();
  }

  //hide the loading spinner
  hideLoader(){
    this.setState({ loading: false });
  }

  //show the loading spinner
  showLoader(){
    this.setState({ loading: true });
  }

  //if data is loading, return spinner, if request is complete return MultiBar
  getDisplay(){
    const Loader = () => <div className="loader"></div>;
    return(
      (this.state.loading) ? <Loader /> : <MultiBar values={this.state.values} />
    )
  }

  //parse values from API response and update state
  updateValues(data){
    let values = data.map((obj) => (
      {
        title: obj.name, 
        left:{value: (obj.complete) ? obj.complete : obj.high_prio, color: '#1bd60a'}, 
        right:{value: (obj.incomplete) ? obj.incomplete : obj.low_prio, color: '#dd1900'} 
      }
    ));
    this.setState({values: values});
  }
  
  //request data from API
  getData(){
    const _this = this;
    const url = "https://gist.githubusercontent.com/gargrave/e2fd3d07d44862a094dabb36137a9187/raw/29f8aef5813e1f67ab12f90617638091561b6b25/mock-api.json";
    this.showLoader();
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        let values = myJson;
        _this.updateValues(values);
        _this.hideLoader();
    });
  }

  render() {  
    return (
      <div>
        {this.getDisplay()}
      </div>
    );
  }
}

export default AsyncMultiBar;
