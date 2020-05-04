import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import styled from "styled-components";
import api from "../api";

const Container = styled.div.attrs({
  className: "container",
})``;

const selectRowProp = {
  mode: "radio",
};

const options = {
  afterDeleteRow: onAfterDeleteRow,
  afterInsertRow: onAfterInsertRow,
};

const cellEditProp = {
  mode: "click",
  blurToSave: true,
  afterSaveCell: onAfterSaveCell,
};

async function onAfterDeleteRow(rowKeys, rows) {
  alert("The rowkey you drop: " + rowKeys);
  await api.deleteMovieById(rowKeys);
}

async function onAfterInsertRow(row) {
  const payload = {
    name: row["name"],
    rating: row["rating"],
    time: row["time"],
  };

  await api.insertMovie(payload).then((res) => {
    window.alert(`Movie inserted successfully`);
  });
}
async function onAfterSaveCell(row, cellName, cellValue) {
  alert(`Save cell ${cellName} with value ${cellValue}`);
  
  let id =row["_id"];
  
  const payload = {
    name: row["name"],
    rating: row["rating"],
    time: row["time"],
  };

  await api.updateMovieById(id, payload).then((res) => {
    window.alert(`Movie updated successfully`);
  });
 
}
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount = async () => {
    await api.getAllMovies().then((movies) => {
      this.setState({
        movies: movies.data.data,
      });
    });
  };

  render() {
    const { movies } = this.state;

    return (
      <div>
        <Container>
          <BootstrapTable
            data={movies}
            deleteRow={true}
            selectRow={selectRowProp}
            options={options}
            insertRow={true}
            cellEdit={cellEditProp}
          >
            <TableHeaderColumn dataField="_id" isKey={true} hidden
            autoValue={true} width={"25%"}>
              ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField="name" width={"20%"}>
              Movie name
            </TableHeaderColumn>
            <TableHeaderColumn dataField="rating" width={"20%"}>
              Rating
            </TableHeaderColumn>
            <TableHeaderColumn dataField="time" width={"40%"}>
              Showtimes
            </TableHeaderColumn>
          </BootstrapTable>
        </Container>
      </div>
    );
  }
}

export default Movies;
