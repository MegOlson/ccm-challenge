import React, { Component } from 'react';

const urlForProviderType = providerType => `https://provider-api.ccmnpe.com/search?providerType=${providerType}&zip=98371`

class Provider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(urlForProviderType(this.props.providerType))
    .then(response => {
      if (!response.ok) {
        throw Error("Network request failed.")
      }
      return response
    })
    .then(d => d.json())
    .then(d => {
      this.setState({
        providerData: d.results
      })
    }, () => {
      this.setState({
        requestFailed: true
      })
    })
  }

  render () {
    if (this.state.requestFailed) return <p>Failed</p>
    if (!this.state.providerData) return <p>Loading...</p>
    return (
      <div>
        {this.state.providerData.map(function(result, index){
          return <p key={ index }>{result.first}</p>;
        })}
      </div>
    )
  }
}

export default Provider;
