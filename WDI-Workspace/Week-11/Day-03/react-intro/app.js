const Dashboard = React.createClass({

  getInitialState: function() {
    return {galaxies: []}
  },

  render: function() {
    return (
      <div>
        <SearchForm />
      </div>
    )
  }
})

const SearchForm = React.createClass({
  handleSubmit: function(evt) {
    evt.preventDefault()
    console.log(this.refs.search.value)
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="search" />
        <button>Search</button>
      </form>
    )
  }
})

ReactDOM.render(<Dashboard />, document.getElementById('main'))