var UserRows = React.createClass({
  render: function(){
    var rows = this.props.data.map(function(row){
      return (
        <tr className="example">
          <td className="num">
            {row.num}
          </td>
          <td className="pic">
            <img src={row.img} />
          </td>
          <td className="name">
            {row.name}
          </td>
          <td className="monthPoints">
            {row.monthly}
          </td>
          <td className="totalPoints">
            {row.total}
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
  getInitialState: function(){
    return {data:[{
                    num: "1.",
                    img: "http://www.mamadomia.org/img/smile-top-img.png",
                    name: "Michael Jackson",
                    monthly: "35",
                    total: "104"
                  },
                  {
                    num: "2.",
                    img: "http://rs304.pbsrc.com/albums/nn180/4chanRus/Awesome%20Face/1213841779552.png~c200",
                    name: "Debbie Downer",
                    monthly: "20",
                    total: "208"
                 }]};
  },
  render: function() {
    return (
      <div className="leaderContent">  
        <UserRows data={this.state.data} />
      </div>
    );
  }
});

React.render(<Leaderboard />,document.getElementById("content"));
