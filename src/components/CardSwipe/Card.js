import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, distance, breeder, pics } = data[i];

    console.log('X:',x)
    console.log('Y:',y)
    return (
        <animated.div
          key={i}
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            )
          }}
        >
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans)
            }}
          >
            <div className="card">
              <Carousel className="containerImageCartSwipe">
                {pics.map((pic, index) => (
                  <img className="imageCartSwipe hoverZoom1-1" src={pic} key={index} alt="profilePicture"/>
                ))}
              </Carousel>
              <div className="detailCard" style={{zIndex: 9}}>
                  <p className="nameBreeder">{name}</p>
                  <p className="detailBreeder"><img src={require('../../assets/icons/person-icon.png')} alt="Person Icon"/> Breeder: {breeder}</p>
                  <p className="detailBreeder"><img src={require('../../assets/icons/place-icon.png')} alt="Place Icon"/> {distance} dari sini</p>
              </div>
            </div>
          </animated.div>
        </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
