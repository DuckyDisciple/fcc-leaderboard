var myUrl = "http://fcctop100.herokuapp.com/api/fccusers/top/recent";

var RecentTD = React.createClass({
  clicked: function(){
    this.props.clicked();
  },
  render: function(){
    return (
      <td onClick={this.clicked}
        className = "recent-header">
        Recent Score
      </td>
    );
  }
});

var TotalTD = React.createClass({
  clicked: function(){
    this.props.clicked();
  },
  render: function(){
    return (
      <td onClick={this.clicked}
        className = "total-header">
        Total Score
      </td>
    );
  }
});

var UserRows = React.createClass({
  showRecent: function(){
    this.props.onRecent();
  },
  showTotal: function(){
    this.props.onTotal();
  },
  render: function(){
    var rows = this.props.data.map(function(row,index){
      return (
        <tr className="leader-data">
          <td className="num">
            {index+1}
          </td>
          <td className="name">
            <img src={row.img} />
            {row.username}
          </td>
          <td className="monthPoints">
            {row.recent}
          </td>
          <td className="totalPoints">
            {row.alltime}
          </td>
        </tr>
      );
    });
    return (
      <table className="user-data">
        <tr className="headers">
          <td>No.</td>
          <td>User</td>
          <RecentTD clicked={this.showRecent} />
          <TotalTD clicked={this.showTotal} />
        </tr>
        {rows}
      </table>
    );
  }
});

var Leaderboard = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  handleRecentClick: function(){
    var recentUrl = "http://fcctop100.herokuapp.com/api/fccusers/top/recent";
    this.getDataFromUrl(recentUrl);
  },
  handleTotalClick: function(){
    var totalUrl = "http://fcctop100.herokuapp.com/api/fccusers/top/alltime";
    this.getDataFromUrl(totalUrl);
  },
  getDataFromUrl: function(url){
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.getDataFromUrl(this.props.url);
  },
  render: function() {
    return (
      <div className="leaderContent">  
        <UserRows
          data = {this.state.data}
          onRecent = {this.handleRecentClick}
          onTotal = {this.handleTotalClick}
        />
      </div>
    );
  }
});

React.render(<Leaderboard url={myUrl} />,document.getElementById("content"));
