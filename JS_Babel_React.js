var data = [{
                    num: "1.",
                    img: "http://www.mamadomia.org/img/smile-top-img.png",
                    username: "Michael Jackson",
                    recent: "35",
                    alltime: "104"
                  },
                  {
                    num: "2.",
                    img: "http://rs304.pbsrc.com/albums/nn180/4chanRus/Awesome%20Face/1213841779552.png~c200",
                    username: "Debbie Downer",
                    recent: "20",
                    alltime: "208"
                 }];

var UserRows = React.createClass({
  render: function(){
    var rows = this.props.data.map(function(row,index){
      return (
        <tr className="example">
          <td className="num">
            {index+1}
          </td>
          <td className="pic">
            <img src={row.img} />
          </td>
          <td className="name">
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
        <th className="headers">
          <td>No.</td>
          <td></td>
          <td>User</td>
          <td className="recent-header">Recent Score</td>
          <td className="total-header">Total Score</td>
        </th>
        {rows}
      </table>
    );
  }
});

var Leaderboard = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function(){
    $.ajax({
      url: this.props.url,
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
  render: function() {
    return (
      <div className="leaderContent">  
        <UserRows data={this.state.data} />
      </div>
    );
  }
});

React.render(<Leaderboard url="http://fcctop100.herokuapp.com/api/fccusers/top/recent" />,document.getElementById("content"));
