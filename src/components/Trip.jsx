import React from "react";
import Nav from "./Nav.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Review from "./Review.jsx";
import axios from "axios";
// import mongoose from "mongoose";

class Place extends React.Component {
  state = {
    id: 122409,
    images: [
      "https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg",
      "https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg",
      "https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg",
      "https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg",
      "https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg",
      "https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223186.jpg",
      "https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223190.jpg",
      "https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223195.jpg",
      "https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223190.jpg"
    ],
    title: "Welcome to Dazzy's World",
    city: "Bangkok",
    country: "Thailand",
    host: {
      hosted: "Hosted by",
      name: "Dazzy Gurl",
      image: "https://shorturl.at/sCL47"
    },
    type: "Entire House, Private Room",
    guests: 6,
    bedrooms: 4,
    bathrooms: 3,
    description:
      "Private bungalow with balcony. Only 5 minute drive from Nathon pier, on the north-west side of the island. This property is located right in front of the less developed side of Lipa Noi Beach. It is perfect for those who are looking for a quiet and peaceful place right on the beach. P.S: Means of transport is needed to move around the Island from this location although taxi and motorbike rental can be arranged.",
    amenities: {
      name: "Kitchen",
      iconGym: "Gym",
      iconWifi: "Wifi",
      iconIron: "Iron",
      iconSwimmingPool: "Swimming Pool",
      iconAirConditioning: "Air Conditioning",
      iconTV: "TV"
    },
    rating: 5,
    reviews: {
      numberReviews: 3,
      date: "7 July 2019",
      author: {
        name: "Amanda",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
      },
      content:
        "It was beyond my imagination that my AirBnB experience could be better",
      rating: 5
    },
    price: 500,

    bigImage:
      "https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg",

    stardate: "",
    endate: ""
    // icon: "far fa-heart"
  };

  componentWillMount() {
    axios.get("http://localhost:4000/reviews").then(response => {
      this.setState({ types: response.data });
    });
  }

  selectImage = image => {
    this.setState({ bigImage: image });
  };

  handleChange = date => {
    this.setState({ stardate: date });
  };

  endhandleChange = date => {
    this.setState({ endate: date });
  };

  render() {
    return (
      <>
        <Nav />
        <div className="gallery">
          <div
            className="image-main"
            style={{
              backgroundImage: `url('${this.state.bigImage}')`
            }}
          >
            <button className="icon">
              <i className="fas fa-heart" onClick={this.handleOnCLick}></i>
            </button>
          </div>

          <div className="thumbnails">
            {this.state.images.map((image, i) => {
              return (
                <div
                  className="thumbnail"
                  onClick={() => {
                    this.selectImage(image);
                  }}
                  style={{
                    backgroundImage: `url('${image}`
                  }}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="grid medium">
          <div className="grid sidebar-right">
            <div className="content">
              <h1>{this.state.title}</h1>
              <small>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  {this.state.city}, {this.state.country}
                </span>
              </small>
              <div className="user">
                <div
                  className="avatar"
                  style={{
                    backgroundImage: `url('${this.state.host.image}')`
                  }}
                ></div>
                <div className="name">
                  <small>{this.state.host.hosted}</small>
                  <span>{this.state.host.name}</span>
                </div>
              </div>
              <div className="card specs">
                <div className="content">
                  <ul className="grid two">
                    <li>
                      <i className="fas fa-fw fa-home"></i>
                      {this.state.type}
                    </li>
                    <li>
                      <i className="fas fa-fw fa-user-friends"></i>
                      {this.state.guests} guest
                    </li>
                    <li>
                      <i className="fas fa-fw fa-bed"></i>
                      {this.state.bedrooms} bedrooms
                    </li>
                    <li>
                      <i className="fas fa-fw fa-bath"></i>
                      {this.state.baths} baths
                    </li>
                  </ul>
                </div>
              </div>
              <p>{this.state.description}</p>
              <h3>Amenities</h3>
              <div className="card specs">
                <div className="content">
                  <ul className="grid two">
                    <li>
                      <i className="fas fa-utensils"></i>
                      {this.state.amenities.name}
                    </li>
                    <li>
                      <i className="fas fa-dumbbell"></i>
                      {this.state.amenities.iconGym}
                    </li>
                    <li>
                      <i className="fas fa-dumbbell"></i>
                      {this.state.amenities.iconWifi}
                    </li>
                    <li>
                      <i className="fas fa-tshirt"></i>
                      {this.state.amenities.iconIron}
                    </li>
                    <li>
                      <i className="fas fa-swimmer"></i>
                      {this.state.amenities.iconSwimmingPool}
                    </li>
                    <li>
                      <i className="fas fa-wind"></i>
                      {this.state.amenities.iconAirConditioning}
                    </li>
                    <li>
                      <i className="fas fa-tv"></i>
                      {this.state.amenities.iconTV}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="reviews">
                <h2>{this.state.reviews.numberReviews} Reviews</h2>
                <form>
                  <div className="group">
                    <label>Leave a review</label>
                    <textarea></textarea>
                    <div className="rating">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <button className="primary small">Submit</button>
                  </div>
                </form>
                <div className="card review">
                  <div className="content">
                    <div className="user">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: `url('https://randomuser.me/api/portraits/women/3.jpg')`
                        }}
                      ></div>
                      <div className="name">
                        <small>27 July 2019</small>
                        <span>Amanda</span>
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p></p>
                  </div>
                </div>
                <div className="card review">
                  <div className="content">
                    <div className="user">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: `url('https://randomuser.me/api/portraits/men/4.jpg')`
                        }}
                      ></div>
                      <div className="name">
                        <small>22 July 2019</small>
                        <span>John</span>
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <p>
                      It was beyond my imagination that my AirBnB experience
                      could be better than a 5 star resort hotel. It is one of
                      the most beautiful villa that I have had stayed so far in
                      the many countries travelled so far. The pictures have not
                      sufficiently described the details of the place.
                    </p>
                  </div>
                </div>
                <div className="card review">
                  <div className="content">
                    <div className="user">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: `url('https://randomuser.me/api/portraits/men/5.jpg')`
                        }}
                      ></div>
                      <div className="name">
                        <small>4 July 2019</small>
                        <span>Sam</span>
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <p>
                      It was beyond my imagination that my AirBnB experience
                      could be better than a 5 star resort hotel. It is one of
                      the most beautiful villa that I have had stayed so far in
                      the many countries travelled so far. The pictures have not
                      sufficiently described the details of the place.
                    </p>
                  </div>
                </div>
                <div className="card review">
                  <div className="content">
                    <div className="user">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: `url('https://randomuser.me/api/portraits/women/7.jpg')`
                        }}
                      ></div>
                      <div className="name">
                        <small>27 May 2019</small>
                        <span>Ella</span>
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p>
                      It was beyond my imagination that my AirBnB experience
                      could be better than a 5 star resort hotel. It is one of
                      the most beautiful villa that I have had stayed so far in
                      the many countries travelled so far. The pictures have not
                      sufficiently described the details of the place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar booking">
              <div className="card shadow">
                <div className="content large">
                  <h3>
                    $350<small>per night</small>
                  </h3>
                  <small>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <span>4 Reviews</span>
                  </small>
                  <form className="small">
                    <div className="group">
                      <label>Dates</label>
                      <DatePicker
                        default
                        placeholderText="Check-in"
                        selected={this.state.stardate}
                        onChange={this.handleChange}
                        dateformat="dd MMM yyyy"
                      />
                      <DatePicker
                        placeholderText="Check-out"
                        selected={this.state.endate}
                        onChange={this.endhandleChange}
                        dateformat="dd MMM yyyy"
                      />
                    </div>
                    <div className="group">
                      <label>Guests</label>
                      <select>
                        {[...Array(this.state.guests)].map((n, i) => (
                          <option key={i}>
                            {i === 0 ? "1 guest" : `${i + 1} guests`}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="group">
                      <button className="secondary full">
                        Book this place
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Place;
