var Leaderboard = React.createClass({
  render: function() {
    return (
    <div className="leaderContent">  
      <table className="leaderboard">
          <tr className="example">
            <td className="num">
              1.
            </td>
            <td className="pic">
              <img src="http://www.mamadomia.org/img/smile-top-img.png" />
            </td>
            <td className="name">
              Michael Jackson
            </td>
            <td className="monthPoints">
              35
            </td>
            <td className="totalPoints">
              104
            </td>
          </tr>
        </table>
      </div>
    );
  }
});

React.render(<Leaderboard />,document.getElementById("content"));
