import {CircleMarker, Popup} from "react-leaflet";

function Point(props)
{
    return (
        <>
            <CircleMarker center={[props.x, props.y]} pathOptions={{color: props.color, fillColor: props.color, fill: props.color}} radius={props.size}>
                <Popup>{props.title}</Popup>
            </CircleMarker>
        </>
    );
}

export default Point;
