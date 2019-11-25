import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";
import Filters from "./Filters.jsx";
import Thumbnail from "./Thumbnail.jsx";
import axios from "axios";

class Places extends React.Component {
  state = {
    user: {
      name: "",
      avatar: "",
      location: "",
      email: "",
      likes: []
    },
    places: [],
    types: [],
    organizeBy: [
      {
        name: "Latest",
        value: "latest"
      },
      {
        name: "Price",
        value: "price"
      },
      {
        name: "Rating",
        value: "rating"
      }
    ],
    selectedOrganization: "Latest",
    filters: {
      bedrooms: 0,
      type: "All Types",
      price: 0,
      title: ""
    }
  };

  componentWillMount() {
    console.log("yooooo", `${process.env.REACT_APP_API}/places`);
    axios
      .get(`${process.env.REACT_APP_API}/places`)
      .then(response => {
        this.setState({ places: response.data });
        console.log("response.data", response.data);
      })
      .catch(error => {
        console.log("error>>>>>>", error);
      });

    axios
      .get(`${process.env.REACT_APP_API}/types`)
      .then(response => {
        this.setState({ types: response.data });
      })
      .catch(error => {
        console.log({ error });
      });
  }

  setBedroomsFilter = e => {
    let selectedRooms = e.target.value;
    this.setState(
      {
        filters: {
          bedrooms: selectedRooms,
          type: this.state.filters.type,
          price: this.state.filters.price,
          title: this.state.filters.title
        }
      },
      this.populatePlaces
    );
  };

  setTypeFilter = e => {
    let selectedType = e.target.value;
    this.setState(
      {
        filters: {
          bedrooms: this.state.filters.bedrooms,
          type: selectedType,
          price: this.state.filters.price,
          title: this.state.filters.title
        }
      },
      this.populatePlaces
    );
  };

  setPriceFilter = e => {
    let selectedPrice = e.target.value;
    this.setState(
      {
        filters: {
          bedrooms: this.state.filters.bedrooms,
          type: this.state.filters.type,
          price: selectedPrice,
          title: this.state.filters.title
        }
      },
      this.populatePlaces
    );
  };

  setNameFilter = e => {
    let inputValue = e.target.value;
    this.setState({
      filters: {
        rooms: this.state.filters.rooms,
        type: this.state.filters.type,
        price: this.state.filters.price,
        title: inputValue
      }
    });
  };

  populatePlaces = () => {
    // access filter values in state, use them to set express queries
    let filtersArr = [];
    if (this.state.filters.bedrooms > 0) {
      filtersArr.push(`min_rooms=${this.state.filters.bedrooms}`);
    }
    if (this.state.filters.type !== "All Types") {
      filtersArr.push(`type=${this.state.filters.type}`);
    }
    if (this.state.filters.price > 0) {
      filtersArr.push(`max_price=${this.state.filters.price}`);
    }
    // create single query for all filters to use with express
    let query = "";
    if (filtersArr.length === 1) {
      query = `?${filtersArr[0]}`;
    } else if (filtersArr.length > 1) {
      query = `?${filtersArr[0]}`;
      filtersArr.slice(1).forEach(filter => (query = query + `&${filter}`));
    }
    // make query, set state with response
    axios
      .get(`${process.env.REACT_APP_API}/places${query}`)
      .then(res => {
        this.setState({
          places: res.data
        });
      })
      .catch(err => console.log(err));
  };

  filterPlaces = () => {
    let filteredPlaces = this.state.places.slice();
    if (this.state.filters.title) {
      filteredPlaces = filteredPlaces.filter(place =>
        place.title
          .toLowerCase()
          .includes(this.state.filters.title.toLowerCase())
      );
    }
    return filteredPlaces;
  };

  setOrganizeBy = e => {
    let selected = e.target.value;
    this.setState({
      selectedOrganization: selected
    });
  };

  sortPlaces = () => {
    if (this.state.selectedOrganization === "price") {
      return this.filterPlaces().sort((a, b) =>
        a.price < b.price ? -1 : a.price > b.price ? 1 : 0
      );
    } else if (this.state.selectedOrganization === "rating") {
      return this.filterPlaces().sort((a, b) => b.rating - a.rating);
    } else {
      return this.filterPlaces();
    }
  };

  renderLike = placeId =>
    this.state.user.likes.includes(placeId) ? "fas" : "far";

  toggleLike = (e, placeId) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    axios
      .patch(`${process.env.REACT_APP_API}/likes/${token}`, {
        likes: placeId
      })
      .then(res => {
        let user = res.data;
        this.setState({ user });
      });
  };

  render() {
    console.log("render");
    return (
      <>
        <Nav />
        <Filters types={this.state.types} />
        <div className="grid five large">
          {this.state.places.map(place => (
            <Thumbnail p={place} />
          ))}
        </div>
      </>
    );
  }
}

export default Places;
