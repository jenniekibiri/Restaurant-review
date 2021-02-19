# Restaurant-review
restaurant review site
The site temporarily down Google Maps Api expired

![chrome_mBlOrZfHgn.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612882065547/GMONtIgnt.png)

 
The Site uses React and Google map apis 
**Places, geocoding and Navigator geolocation**
The project is structured into components:
## Map component
This component holds the google map container and also responsible for the markers and info window 
![chrome_rrt0gKMWC9.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612882880436/ulzwQ2wKG.png)
A user can drag the blue marker(The current location) to see the restaurant in a different area.
Info Window only shows if you clicks on a marker
## card component
These are cards on the right which has the restaurant details(name, ratings, reviews and their corresponding authors)

The card component takes data from two sources; google map API reviews and custom review that comes from a user adding a restaurant on the map.

## Filter component
Has the filter tool where you can display restaurants according to the number of average rating stars and later reset to default restaurant list.

![chrome_C5aUnPCjXf.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612883503172/bDMWc6SpH.png)

## Form component
The site has two forms:
### Adding rating and review form 
You can add reviews for all the restaurants displayed on the right  by clicking on the add review button.


![chrome_b5hKFCXmXT.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612883791383/naT4QpFVO.png)
### Adding New restaurants to the site.
On map click a form pops up and you can add a new restaurant on the map.
The newly added restaurant will have a marker and a card on the right which which will allow you to add reviews 
![chrome_mBlOrZfHgn.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1612883824671/KsIR7FiWa.png)
