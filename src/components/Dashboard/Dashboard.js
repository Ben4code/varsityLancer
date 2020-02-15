import React from 'react'
import './dashboard.css'
import avatar from '../../imgs/avi3.png'
import pie from '../../imgs/pieChart.svg'
import progress from '../../imgs/progress.svg'



// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const StyledTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.blue,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles(theme => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
// }))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });










export default function Index() {
  // const classes = useStyles();



  return (
    <div className="dashboard">

      <div className="dashboard__sidebar">
        <img src={avatar} alt="" />

        <div className="dashboard__sidebar--content">
          <h4>Mike Jones</h4>
          <p>Fullstack Developer</p>
          <p>London, United Kingdom</p>
          <p>£20/hr</p>
        </div>
        <div className="dashboard__sidebar--menu">
          <ul>
            <li><a href="/"><i className="fa fa-user"></i> Profile</a></li>
            <li><a href="/"><i className="fa fa-picture-o"></i> Portfolio</a></li>
            <li className="active"><a href="/"><i className="fa fa-tasks"></i> Jobs</a></li>
            <li><a href="/"><i className="fa fa-desktop"></i> My Projects </a></li>
            <li><a href="/"><i className="fa fa-gears"></i> Settings </a></li>
          </ul>
        </div>
      </div>

      <div className="dashboard__header">
        <div className="dashboard__header--search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="dashboard__header--notify">
          <i className="fa fa-bell-o fa-2x"></i><span>1</span>
          <i className="fa fa-envelope-o fa-2x"></i>
        </div>
      </div>

      <div className="dashboard__section">
        <div className="dashboard__section--body">
          <div className="dashboard__section--card">
            <h4>Active Projects</h4>
            <div className="dashboard__section--stats">
              <img src={pie} alt=""/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>  
          </div>
          <div className="dashboard__section--card">
            <h4>Jobs Completed</h4>
            <div className="dashboard__section--stats">
              <img src={progress} alt=""/>
              <ul>
                <li> Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
          </div>
          <div className="dashboard__section--card">
            <h4>Top Skills</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, labore?</p>
          </div>
        </div>
      </div>

      <div className="dashboard__main">
        <div className="dashboard__content">

          <div className="dashboard__content--item">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <div className="dashboard__content--meta">
              <div>
                <p className="dashboard__content--desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tenetur, cumque exercitationem numquam beatae porro!
                </p>
                <ul>
                  <li className="dashboard__content--time">Posted 5mins age</li>
                  <li>
                    <span className="dashboard__content--badge">Php</span>
                    <span className="dashboard__content--badge">Javascript</span>
                    <span className="dashboard__content--badge">Node</span>
                  </li>
                </ul>
              </div>
              <span className="dashboard__content--price">£400</span>
            </div>  
          </div>

          <div className="dashboard__content--item">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <div className="dashboard__content--meta">
              <div>
                <p className="dashboard__content--desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tenetur, cumque exercitationem numquam beatae porro!
                </p>
                <ul>
                  <li className="dashboard__content--time">Posted 5mins age</li>
                  <li>
                    <span className="dashboard__content--badge">Php</span>
                    <span className="dashboard__content--badge">Javascript</span>
                    <span className="dashboard__content--badge">Node</span>
                  </li>
                </ul>
              </div>
              <span className="dashboard__content--price">£400</span>
            </div>
          </div>

          {/* <div className="dashboard__content--item">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <div className="dashboard__content--meta">
              <div>
                <p className="dashboard__content--desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis tenetur, cumque exercitationem numquam beatae porro!
                </p>
                <ul>
                  <li className="dashboard__content--time">Posted 5mins age</li>
                  <li>
                    <span className="dashboard__content--badge">Php</span>
                    <span className="dashboard__content--badge">Javascript</span>
                    <span className="dashboard__content--badge">Node</span>
                  </li>
                </ul>
              </div>
              <span className="dashboard__content--price">£400</span>
            </div>
          </div> */}

        </div>


        {/* <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align="right">Calories</StyledTableCell>
                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}



      </div>

    </div>
  )
}

