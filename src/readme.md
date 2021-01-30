Creating google maps apis
install the packages
import the packages
load the google api 
create map component ie a container
specify the width and height of the map
load the first postion 
create a google api wrapper that hold the api key

The defaultProps will be used to ensure that this.props.name will have a value if it was not specified by the parent component
  <!-- {places.map((place, i) => (
            <Marker
              key={i}
              name={place.restaurantName}
              rating={place.rating}
              photo={place.photo}
              onClick={this.onMarkerClick}
              position={{ lat: place.lat, lng: place.long }}
            />
          ))}  -->

