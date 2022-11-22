import './App.css';
import {MapContainer} from "react-leaflet";
import {TileLayer} from "react-leaflet/TileLayer";
import Point from "./Point.jsx";
import 'leaflet/dist/leaflet.css'
import Parameters from "./map.json";
import PostData from "./VehicleRoutingPojo.json";

function App()
{
    const listParameters = JSON.parse(JSON.stringify(Parameters))
    const clr = listParameters['colors']
    const center = [listParameters['center'].x, listParameters['center'].y]
    const zoom = listParameters['zoom']
    const dd = JSON.parse(JSON.stringify(PostData))
    const visit = Object.values(dd['clusters'])
    const point = dd['Warehouse']


    let i = -1
    let j = 0
    let ii = -1

    return (
        <div>
            <MapContainer id="maps" style={{height: "800px", width: "100%"}} center={center} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    visit.map((e, index) => {
                        const list = e.adr
                        i++
                        return (
                            list.map((e) => {
                                j++
                                return (
                                    <Point size={5} x={e.lat} y={e.lon} color={clr[i % 7]} className={'P-'+i} title={e.rue} key={j}/>
                                )
                            })
                        )

                    })
                }

                {
                    <Point x={point.lat} color="red" y={point.lon} size={10}  title="Dépôt"/>
                }

            </MapContainer>
            <h4>
                Nombre de points : {j}
            </h4>
            <h4>
                Nombre de cluster : {i+1}
            </h4>
            <div style={{display:'flex', width:'50%', justifyContent:'space-around'}}>
                {
                    visit.map((e, index) => {
                        ii++
                        return (
                            <div style={{background:clr[ii % 7], width:'50px', height:'50px', borderRadius:'50%'}} key={'tii'+ii}></div>
                        )

                    })
                }
            </div>
        </div>
    );
}

export default App;
