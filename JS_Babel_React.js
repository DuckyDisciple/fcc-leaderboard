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
        {rows}
      </table>
    );
  }
});

var Leaderboard = React.createClass({
  render: function() {
    return (
      <div className="leaderContent">  
        <UserRows data={this.props.data} />
      </div>
    );
  }
});

React.render(<Leaderboard data={data} />,document.getElementById("content"));
