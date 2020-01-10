// LONGITUDE -180 to + 180
function generateRandomLong() {
    var longitude = (Math.random() * 360 - 180).toFixed(3);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        longitude = longitude * -1;
    }
    return longitude;
}
// LATITUDE -90 to +90
function generateRandomLat() {
    var latitude = (Math.random() * 360 - 180).toFixed(3);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        latitude = latitude * -1;
    }
    return latitude;
}