import React, { Component } from 'react';

const urlForProviderType = providerType => `https://provider-api.ccmnpe.com/search?providerType=${providerType}&zip=98371`

class Provider extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch(urlForProviderType(this.props.providerType))
    .then(d => d.json())
    .then(d => {
      this.setState({
        providerData: d.results
      })
    })
  }

  render () {
    if (!this.state.providerData) return <p>Loading...</p>
    return (
      <div>
      <ul>
        {this.state.providerData.map(function(result, index){
          return <li key={ index }>{result.first}</li>;
        })}
      </ul>
      </div>
    )
  }
}

export default Provider;
